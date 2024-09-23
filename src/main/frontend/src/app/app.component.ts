import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngredientsService } from './services/ingredients.service';
import { Ingredient } from './datamodel/ingredient';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { APIService } from './services/API.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  providers: [IngredientsService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Recipe Box';
  private ingredientService = inject(IngredientsService);

  ingredients = computed<Ingredient []>(() => this.ingredientService.ingredients());

}
