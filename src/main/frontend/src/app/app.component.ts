import { Component, computed, inject, Output, output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngredientsService } from './services/ingredients.service';
import { Ingredient } from './datamodel/ingredient';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { APIService } from './services/API.service';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, RecipesComponent],
  providers: [RouterModule, RecipesComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Recipe Box';
  
  

}
