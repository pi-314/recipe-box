
import { effect, inject, Injectable, signal } from '@angular/core';
import { Ingredient } from '../datamodel/ingredient';
import { Recipe } from '../datamodel/recipe';
import { APIService } from './API.service';
import { IngredientsService } from './ingredients.service';
import { v4 as uuid } from 'uuid';
import { LocalStorageBackedService } from './local.storage.backed';

@Injectable({
  providedIn: 'root'
})
export class RecipesService extends LocalStorageBackedService {

  private ingredientService = inject(IngredientsService); // Required for storing new ingredients
  private api_service = inject(APIService);

  private localStorageKey = 'recipes';

  constructor() {
    super();
  }

  recipes = signal<Recipe[]>([] as Recipe[]);
    
  init = effect(() => {
    // ensures that the data are loaded when the ingredients signal() is initialized
    console.log('RecipesService init effect() called');
    this.loadRecipes();
  });
  
  #localData: Recipe[] = [];
  #remoteData: Recipe[] = [];

  // TODO: refactor and implement some clever/efficient synchronization strategy!
  public loadRecipes() {
    console.log('loadRecipes(): Syncing local and remote data...');
    
    // call backend API first, assuming it is THE source of truth ;)
    this.api_service.getAllRecipes().subscribe((fetched: Recipe[]) => {
      // get remote data
      this.#remoteData = fetched;

      // get local data
      if(this.isLocalStorageAvailable){
        const localDataString = localStorage.getItem(this.localStorageKey);
        if(localDataString !== null){
          this.#localData = <Recipe[]>JSON.parse(localDataString);
        }
      }

      // merge distinct
      const result = super.reduceDistinct(this.#localData, this.#remoteData, (item1: Recipe, item2: Recipe) => item1.id === item2.id);
      
      // update local copy
      this.#localData = result;
      if(this.isLocalStorageAvailable){
        localStorage.setItem(this.localStorageKey, JSON.stringify(result));
      }
      
      // publish signal
      this.recipes.set(result);

      // update remote copy
      this.api_service.saveAllRecipes(result).subscribe((saved: Recipe[]) => {
        this.#remoteData = saved;
      });

    });
  }

  addRecipe(recipe: Recipe): Recipe {
    // Assign new id to the recipe
    recipe.id = uuid();

    const savedRecipe = this.saveRecipe(recipe);
    const newRecipes = [savedRecipe, ...this.recipes()];
    
    this.recipes.set(newRecipes);

    if(this.isLocalStorageAvailable){
      localStorage.setItem(this.localStorageKey, JSON.stringify(newRecipes));
    }

    return savedRecipe;
  }

  saveRecipe(recipe: Recipe): Recipe {
    
    // Check if the recipe contains new ingredients
    recipe.ingredients.forEach((ingredient: Ingredient) => {
      if(ingredient.id === undefined){
        // Assign new id to the new ingredient and add let the ingredients service store them
        ingredient.id = uuid();
        this.ingredientService.addIngredient(ingredient);
      }

    });

    const newRecipes = this.recipes().map((r: Recipe) => r.id === recipe.id ? recipe : r);
    this.recipes.set(newRecipes);
    
    this.api_service.saveRecipe(recipe).subscribe((saved: Recipe) => {
      console.log(`saveRecipe.subscribe returned data. Saved: ${saved.caption}`);
    });

    return recipe;
  }

  deleteRecipe(recipe: Recipe): void {
    const newRecipes = this.recipes().filter((r: Recipe) => r.id !== recipe.id);
    this.recipes.set(newRecipes);

    if(this.isLocalStorageAvailable){
      localStorage.setItem(this.localStorageKey, JSON.stringify(newRecipes));
    }

    this.api_service.deleteRecipe(recipe).subscribe(() => {
      console.log(`deleteRecipe.subscribe returned data. Deleted: ${JSON.stringify(recipe)}`);
    });
  }

}
