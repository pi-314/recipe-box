import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Ingredient } from '../datamodel/ingredient';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    private apiUrl = 'http://localhost:8080/ingredients';
    private http: HttpClient = inject(HttpClient);

    getAllIngredients(): Observable<Ingredient[]> {
        console.log('getAll() called');
        return this.http.get<Ingredient[]>(this.apiUrl).pipe(
            catchError(this.handleError<Ingredient[]>('getAll()', []))
        );
    }

    saveIngredient(ingredient: Ingredient): Observable<Ingredient> {
        const url = `${this.apiUrl}/${ingredient.id}`;

        return this.http.post<Ingredient>(url, ingredient, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            catchError(this.handleError<Ingredient>(`saveIngredient(ingredient:  ${JSON.stringify(ingredient)})`))
        );
    }

    saveAll(ingredients: Ingredient[]): Observable<Ingredient[]> {
        const url = `${this.apiUrl}`;

        return this.http.post<Ingredient[]>(url, ingredients, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            catchError(this.handleError<Ingredient[]>('save(ingredients:  ${JSON.stringify(ingredients)})', []))
        );
    }

    delete(ingredient: Ingredient): Observable<void> {
        const url = `${this.apiUrl}/${ingredient.id}`;

        return this.http.delete<void>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: ingredient
        }).pipe(
            catchError(this.handleError<void>(`delete(ingredient:  ${JSON.stringify(ingredient)})`))
        );
    }

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