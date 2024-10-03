import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APIService } from './services/API.service';
import { IngredientsService } from './services/ingredients.service';
import { RecipesComponent } from './components/recipes/recipes.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, RecipesComponent],
  providers: [RouterModule, RecipesComponent, APIService, IngredientsService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Recipe Box';
}
