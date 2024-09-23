import { computed, effect, inject, Injectable, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Ingredient } from '../datamodel/ingredient';
import { APIService } from './API.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private api_service = inject(APIService);
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  constructor() {
  
    // this.cart = JSON.parse(data);
    
  }

  ingredients = signal<Ingredient []>([] as Ingredient[]);
  // ----------------------------------------------------------------------------
  // This pattern unfortunately doesn't work yet -> signals/effects are still developer preview
  //  #ingredients = signal<Ingredient []>([] as Ingredient[]);         // hard-private signal
  //  ingredients = computed<Ingredient []>(() => this.#ingredients()); // expose the signal as a computed property
    
  init = effect(() => {
    // ensures that the data are loaded when the ingredients signal() is initialized
    console.log('IngredientService init effect() called');
    this.loadIngredients();
  });
  
  #localData: Ingredient[] = [];
  #remoteData: Ingredient[] = [];

  // TODO: refactor and implement some efficient synchronization strategy!
  private async loadIngredients() {
    console.log('loadIngredients(): Syncing local and remote data...');
    
    // call backend API first, assuming it is THE source of truth ;)
    this.api_service.getAllIngredients().subscribe((fetched: Ingredient[]) => {
      console.log(`getAll.subscribe returned data. Fetched: ${JSON.stringify(fetched)}`);
      // get remote data
      this.#remoteData = fetched;
      console.log('got remote copy');

      // get local data
      if(this.isLocalStorageAvailable){
        const localDataString = localStorage.getItem('ingredients');
        if(localDataString !== null){
          this.#localData = <Ingredient[]>JSON.parse(localDataString);
          console.log('got local copy');
        } else {
          console.log('localStorage available but empty');
        }
      } else {
        console.log('localStorage not available -> considering local data empty');
      }
      console.log(`-R-${JSON.stringify(this.#remoteData)}\n-L-${JSON.stringify(this.#localData)}`);
      // merge distinct
      const result: Ingredient[] = this.#localData
      .reduce((acc: Ingredient[], item2: Ingredient) => {
          if (!acc.some((item1: Ingredient) =>
              item1.id === item2.id && item1.name === item2.name)) {
              acc.push(item2);
          }
          return acc;
      }, this.#remoteData);
      console.log(`-r-${JSON.stringify(result)}`);
      
      // update local copy
      this.#localData = result;
      if(this.isLocalStorageAvailable){
        localStorage.setItem('ingredients', JSON.stringify(result));
        console.log('updated local copy / localStorage');
      }
      
      // update remote copy
      this.api_service.saveAll(result).subscribe((saved: Ingredient[]) => {
        console.log(`saveAll.subscribe returned data. Saved: ${JSON.stringify(saved)}`);
        this.#remoteData = saved;
        console.log('updated remote copy');
      });

      this.ingredients.set(result);
      console.log('Set ingredients to signal()');
    } );
  }

  addIngredient(ingredient: Ingredient): Ingredient {

    ingredient.id = uuid();

    const newIngredients = this.ingredients().concat(ingredient);
    this.ingredients.set(newIngredients);

    if(this.isLocalStorageAvailable){
      localStorage.setItem('ingredients', JSON.stringify(newIngredients));
    }
    
    this.api_service.saveIngredient(ingredient).subscribe((saved: Ingredient) => {
      console.log(`saveIngredient.subscribe returned data. Saved: ${JSON.stringify(saved)}`);
    });

    return ingredient;
  }
}
