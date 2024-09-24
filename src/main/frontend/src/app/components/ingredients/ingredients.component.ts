import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { Ingredient } from 'src/app/datamodel/ingredient';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
})
export class IngredientsComponent {
  private ingredientService = inject(IngredientsService);
  ingredients = computed<Ingredient []>(() => this.ingredientService.ingredients());
  
}
