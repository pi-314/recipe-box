import { effect, inject, Injectable, signal } from '@angular/core';
import { Ingredient } from '../datamodel/ingredient';
import { APIService } from './API.service';
import { v4 as uuid } from 'uuid';
import { LocalStorageBackedService } from './local.storage.backed';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService extends LocalStorageBackedService {

  private api_service = inject(APIService);

  constructor() {
    super();
  }

  ingredients = signal<Ingredient[]>([] as Ingredient[]);
  // ----------------------------------------------------------------------------
  // This pattern unfortunately doesn't work yet -> signals/effects are still developer preview
  //  #ingredients = signal<Ingredient []>([] as Ingredient[]);         // hard-private signal
  //  ingredients = computed<Ingredient []>(() => this.#ingredients()); // expose the signal as a computed property

  init = effect(() => {
    // ensures that the data are loaded when the ingredients signal() is initialized
    console.log('IngredientsService init effect() called');
    this.loadIngredients();
  });

  #localData: Ingredient[] = [];
  #remoteData: Ingredient[] = [];

  // TODO: refactor and implement some clever/efficient synchronization strategy!
  // TODO: intended to be private, but for testing purposes it is public.
  //       Change it back to private as soon as signals() in services become test support.
  public loadIngredients() {
    console.log('loadIngredients(): Syncing local and remote data...');

    // call backend API first, assuming it is THE source of truth ;)
    this.api_service.getAllIngredients().subscribe((fetched: Ingredient[]) => {
      // get remote data
      this.#remoteData = fetched;

      // get local data
      if (this.isLocalStorageAvailable) {
        const localDataString = localStorage.getItem('ingredients');
        if (localDataString !== null) {
          this.#localData = JSON.parse(localDataString) as Ingredient[];
        }
      }
      // merge distinct
      const result = super.reduceDistinct(this.#localData, this.#remoteData, (item1: Ingredient, item2: Ingredient) => item1.id === item2.id && item1.name === item2.name);

      // update local copy
      this.#localData = result;
      if (this.isLocalStorageAvailable) {
        localStorage.setItem('ingredients', JSON.stringify(result));
      }

      // publish signal
      this.ingredients.set(result);

      // update remote copy
      this.api_service.saveAllIngredients(result).subscribe((saved: Ingredient[]) => {
        this.#remoteData = saved;
      });


    });
  }

  addIngredient(ingredient: Ingredient): Ingredient {

    ingredient.id = uuid();

    const newIngredients = this.ingredients().concat(ingredient);
    this.ingredients.set(newIngredients);

    if (this.isLocalStorageAvailable) {
      localStorage.setItem('ingredients', JSON.stringify(newIngredients));
    }

    this.api_service.saveIngredient(ingredient).subscribe((saved: Ingredient) => {
      console.log(`saveIngredient.subscribe returned data. Saved: ${saved.name}`);
    });

    return ingredient;
  }
}
