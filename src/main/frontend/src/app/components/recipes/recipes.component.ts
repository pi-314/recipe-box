import { Component, computed, inject, OnInit, output, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { Ingredient } from 'src/app/datamodel/ingredient';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/datamodel/recipe';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from "../../../libs/spartan/ui-icon-helm/src/lib/hlm-icon.component";
import { provideIcons } from '@ng-icons/core';
import { lucideBookPlus, lucideTrash, lucideSave, lucideAlertTriangle } from '@ng-icons/lucide';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import { HlmLabelModule } from '@spartan-ng/ui-label-helm';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-recipes',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IngredientsComponent,
        HlmButtonModule, HlmIconComponent, HlmInputModule, HlmLabelModule, HlmScrollAreaComponent
    ],
    providers: [
        provideIcons({ lucideBookPlus, lucideTrash, lucideSave, lucideAlertTriangle }),
    ],
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {

    private recipesService = inject(RecipesService);
    readonly recipes: Signal<Recipe[]> = computed<Recipe[]>(() => this.recipesService.recipes());
    private localStorageKey = 'selected_recipe';

    readonly selectedRecipe = signal<Recipe>({ id: '', caption: '', description: '', ingredients: [] } as Recipe);
    recipeSelected: boolean = false;

    ngOnInit(): void {
        if (typeof localStorage !== 'undefined') {
            const localDataString = localStorage.getItem(this.localStorageKey);
            if (localDataString !== null) {
                this.selectRecipe(<Recipe>JSON.parse(localDataString), true);
            }
        }
    }

    ctrlNewCaption = new FormControl<string>('');

    recipeForm = new FormGroup({
        caption: new FormControl(''),
        description: new FormControl('')
    });


    selectRecipe(_t3: Recipe, skipLocalStorage: boolean = false): void {
        this.recipeSelected = true;
        this.selectedRecipe.set(_t3);

        if (!skipLocalStorage && typeof localStorage !== 'undefined') {
            localStorage.setItem(this.localStorageKey, JSON.stringify(_t3));
        }

        this.recipeForm.controls.caption.setValue(this.selectedRecipe().caption);
        this.recipeForm.controls.description.setValue(this.selectedRecipe().description);
    }

    addNewRecipe(): void {
        if (this.ctrlNewCaption.valid) {
            this.selectRecipe(
                this.recipesService.addRecipe({
                    id: '',
                    caption: this.ctrlNewCaption.value as string,
                    description: '',
                    ingredients: []
                })
            );
            this.ctrlNewCaption.reset();
        }
    }

    onIngredientsChanged($event: Ingredient[]) {
        const newRecipe = this.selectedRecipe();
        newRecipe.ingredients = $event;
        this.selectRecipe(newRecipe);
    }

    onSubmit(): void {
        const recipe: Recipe = {
            id: this.selectedRecipe().id,
            caption: this.recipeForm.controls.caption.value || '',
            description: this.recipeForm.controls.description.value || '',
            ingredients: this.selectedRecipe().ingredients
        };
        this.selectRecipe(this.recipesService.saveRecipe(recipe));
    }

    deleteRecipe(arg0: Recipe): void {
        this.recipesService.deleteRecipe(arg0);
        this.recipeForm.reset();
        this.selectedRecipe.set({ id: '', caption: '', description: '', ingredients: [] });
        this.recipeSelected = false;
    }

}
