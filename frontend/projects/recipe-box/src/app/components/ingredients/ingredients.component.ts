import { Component, computed, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../datamodel/ingredient';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import { HlmLabelModule } from '@spartan-ng/ui-label-helm';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';
import { lucideBookPlus, lucideTrash, lucideSave, lucideAlertTriangle, lucideCopyPlus, lucidePuzzle } from '@ng-icons/lucide';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IngredientsComponent,
    HlmButtonModule, HlmIconComponent, HlmInputModule, HlmLabelModule, HlmScrollAreaComponent,
  ],
  providers: [
    provideIcons({ lucideBookPlus, lucideTrash, lucideSave, lucideAlertTriangle, lucideCopyPlus, lucidePuzzle }),
  ],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
})
export class IngredientsComponent {

  private ingredientService = inject(IngredientsService);
  private allingredients = computed<Ingredient[]>(() => this.ingredientService.ingredients());

  @Input() ingredients: Ingredient[] = [] as Ingredient[];

  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();


  ctrlNewIngredient = new FormControl<string>('');

  isAlreadyThere(): boolean {
    const newIngredientValue = this.ctrlNewIngredient.value;
    return newIngredientValue !== null &&
      this.ingredients.some(i => i.name.toLowerCase() === newIngredientValue.toLowerCase());
  }

  removeIngredient(_t14: Ingredient) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient !== _t14);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addNewIngredient(): void {
    console.log('addNewIngredient() called');
    const newIngredientName = this.ctrlNewIngredient.value;
    this.ctrlNewIngredient.setValue('');

    if (newIngredientName && newIngredientName !== '') {
      const existingIngredient = this.allingredients()
        .find(ingredient => ingredient.name.toLowerCase() === newIngredientName.toLowerCase());

      let addThis: Ingredient;

      if (existingIngredient) {
        // use existing ingredient
        addThis = existingIngredient;
      } else {
        // add and save new ingredient
        const newIngredient = {
          id: '',
          name: newIngredientName,
        };
        addThis = this.ingredientService.addIngredient(newIngredient);
      }
      if (!this.isAlreadyThere()) {
        this.ingredients = [...this.ingredients, addThis];
        this.ingredientsChanged.emit(this.ingredients);
      }
    }
  }

}
