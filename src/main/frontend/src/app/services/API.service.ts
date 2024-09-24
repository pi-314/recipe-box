import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Ingredient } from '../datamodel/ingredient';
import { Recipe } from '../datamodel/recipe';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    readonly apiBaseUrl = 'http://localhost:8080'; // for now just expose the base URL, usefull for testing!
    private http: HttpClient = inject(HttpClient);

    getAllIngredients(): Observable<Ingredient[]> {
        console.log('getAll() called');
        return this.http.get<Ingredient[]>(`${this.apiBaseUrl}/ingredients`).pipe(
            catchError(this.handleError<Ingredient[]>('getAll()', []))
        );
    }

    saveIngredient(ingredient: Ingredient): Observable<Ingredient> {
        const url = `${this.apiBaseUrl}/ingredients/${ingredient.id}`;

        return this.http.post<Ingredient>(url, ingredient, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            catchError(this.handleError<Ingredient>(`saveIngredient(ingredient:  ${JSON.stringify(ingredient)})`))
        );
    }

    saveAllIngredients(ingredients: Ingredient[]): Observable<Ingredient[]> {
        const url = `${this.apiBaseUrl}/ingredients`;

        return this.http.post<Ingredient[]>(url, ingredients, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            catchError(this.handleError<Ingredient[]>('saveAllIngredients(ingredients:  ${JSON.stringify(ingredients)})', []))
        );
    }

    delete(ingredient: Ingredient): Observable<void> {
        const url = `${this.apiBaseUrl}/ingredients/${ingredient.id}`;

        return this.http.delete<void>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: ingredient
        }).pipe(
            catchError(this.handleError<void>(`delete(ingredient:  ${JSON.stringify(ingredient)})`))
        );
    }

// ====================================================================================================
    getAllRecipes(): Observable<Recipe[]> {
        console.log('getAllRecipes() called');
        return this.http.get<Recipe[]>(`${this.apiBaseUrl}/recipes`).pipe(
            catchError(this.handleError<Recipe[]>('getAllRecipes()', []))
        );
    }

    saveRecipe(recipe: Recipe): Observable<Recipe> {
        const url = `${this.apiBaseUrl}/recipes/${recipe.id}`;

        return this.http.post<Recipe>(url, recipe, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            catchError(this.handleError<Recipe>(`saveRecipe(recipe:  ${JSON.stringify(recipe)})`))
        );
    }

    saveAllRecipes(recipes: Recipe[]): Observable<Recipe[]> {
        const url = `${this.apiBaseUrl}/recipes`;

        return this.http.post<Recipe[]>(url, recipes, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            catchError(this.handleError<Recipe[]>('saveAllRecipes(recipes:  ${JSON.stringify(recipes)})', []))
        );
    }

    deleteRecipe(recipe: Recipe): Observable<void> {
        const url = `${this.apiBaseUrl}/recipes/${recipe.id}`;

        return this.http.delete<void>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: recipe
        }).pipe(
            catchError(this.handleError<void>(`deleteRecipe(recipe:  ${JSON.stringify(recipe)})`))
        );
    }

// ====================================================================================================
    private handleError<T>(operation = 'operation', result?: T) {
        const sourceClassName = this.constructor.toString().match(/\w+/g)?.[1] ?? 'UnknownClass';
        return (error: any): Observable<T> => {
            if (error.error instanceof ErrorEvent || ProgressEvent) {
                // Client-side network error
                // TODO: consider providing more detailed logging for such errors
                console.error(`Client-side error in ${sourceClassName}.${operation}:`, error.error, error.message);
            } else {
                // Backend error (returned an non-200 response code, so log the body as well)
                console.error(`Backend-side error in ${sourceClassName}.${operation}:`, `status: ${error.status}, body: ${error.error}, message: ${error.message}`);
            }
            return of(result as T);
        };
    }
}