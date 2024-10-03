import { TestBed } from '@angular/core/testing';
import { RecipesService } from './recipes.service';
import { IngredientsService } from './ingredients.service';
import { APIService } from './API.service';
import { Recipe } from '../datamodel/recipe';
import { of } from 'rxjs';

describe('RecipesService', () => {
  let service: RecipesService;
  let apiServiceMock: jest.Mocked<APIService>;
  let ingredientsServiceMock: jest.Mocked<IngredientsService>;

  beforeEach(() => {
    // Mock the API service, providing only the methods that are used by the recipes service
    apiServiceMock = {
      getAllRecipes: jest.fn(),
      saveAllRecipes: jest.fn(),
      saveRecipe: jest.fn()
    } as unknown as jest.Mocked<APIService>;

    // Mock the ingredients service, providing only the methods that are used by the recipes service
    ingredientsServiceMock = {
      addIngredient: jest.fn(),
    } as unknown as jest.Mocked<IngredientsService>;

    TestBed.configureTestingModule({
      // Provide required dependencies
      providers: [
        RecipesService,
        { provide: APIService, useValue: apiServiceMock },
        { provide: IngredientsService, useValue: ingredientsServiceMock }
      ]
    });

    service = TestBed.inject(RecipesService);
    TestBed.flushEffects(); // Should trigger the effects, helping to test the service without a component

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // Unfortunatelly cannot be tested in some elegant way, because
  // effects() are still in developer preview :(
  // s. https://github.com/angular/angular/issues/50466
  it('should initially fetch recipes', async () => {
    const mockRecipes: Recipe[] = [
      { id: '', caption: 'Salad', description: 'Just put all together and mix.', ingredients: [] }
    ];

    apiServiceMock.getAllRecipes.mockReturnValue(of(mockRecipes));

    // TODO: Remove this line as soon as signals() are supported in tests.
    //       That method should be private!!!
    service.loadRecipes();

    expect(service.recipes()).toEqual(mockRecipes);
  });



  it('should add a new recipe with empty ingredients', () => {
    const newRecipe: Recipe = { id: '', caption: 'Salad', description: 'Just put all together and mix.', ingredients: [] };
    apiServiceMock.saveRecipe.mockReturnValue(of(newRecipe));

    const x = service.addRecipe(newRecipe);

    // Since ingredients are empty, no calls to the IngredientsService should be made
    expect(ingredientsServiceMock.addIngredient).toHaveBeenCalledTimes(0); // Since ingredients are empty, no calls to the IngredientsService should be made
    // The recipe.id should have a new valid non-NIL UUID
    expect(x.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    // The recipe should be the same as the one returned by the API
    expect(x).toEqual(newRecipe);
    // The recipe should be stored in the local storage
    if (typeof localStorage !== 'undefined') {
      const localData = JSON.parse(localStorage.getItem('recipes') || '[]');
      expect(localData).toEqual(expect.arrayContaining([expect.objectContaining(x)]));
    }
  });




});
