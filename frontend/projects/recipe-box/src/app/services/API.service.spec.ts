import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { APIService } from './API.service';
import { Ingredient } from '../datamodel/ingredient';
import { provideHttpClient } from '@angular/common/http';
import { Recipe } from '../datamodel/recipe';

describe('APIService', () => {
  let service: APIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        APIService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(APIService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // API methodes tests --------------------------------------------------------
  //====INGREDIENTS=================================================================================
  it('should fetch all ingredients', () => {
    const mockIngredients: Ingredient[] = [
      { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' },
      { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Onion' }
    ];

    service.getAllIngredients().subscribe(ingredients => {
      expect(ingredients.length).toBe(2);
      expect(ingredients).toEqual(mockIngredients);
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients`);
    expect(req.request.method).toBe('GET');
    req.flush(mockIngredients);
  });

  it('should save an ingredient', () => {
    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' };

    service.saveIngredient(mockIngredient).subscribe(ingredient => {
      expect(ingredient).toEqual(mockIngredient);
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients/${mockIngredient.id}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(mockIngredient);
  });

  it('should save all ingredients', () => {
    const mockIngredients: Ingredient[] = [
      { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' },
      { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Onion' }
    ];

    service.saveAllIngredients(mockIngredients).subscribe(ingredients => {
      expect(ingredients).toEqual(mockIngredients);
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(mockIngredients);
  });

  it('should delete an ingredient', () => {
    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' };

    service.deleteIngredient(mockIngredient).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients/${mockIngredient.id}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    expect(req.request.body).toEqual(mockIngredient);
    req.flush(null);
  });

  //====RECIPES=========================================================================================
  it('should fetch all recipes', () => {
    const mockRecipes: Recipe[] = [
      { id: '123e4567-e89b-12d3-a456-426614174002', caption: 'Pasta', description: 'Yum', ingredients: [{ id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }] },
      { id: '123e4567-e89b-12d3-a456-426614174003', caption: 'Salad', description: 'Fresh', ingredients: [{ id: '123e4567-e89b-12d3-a456-426614174001', name: 'Onion' }] }
    ];

    service.getAllRecipes().subscribe(recipes => {
      expect(recipes.length).toBe(2);
      expect(recipes).toEqual(mockRecipes);
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/recipes`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRecipes);
  });

  it('should save a recipe', () => {
    const mockRecipe: Recipe = { id: '123e4567-e89b-12d3-a456-426614174002', caption: 'Pasta', description: 'Yum', ingredients: [{ id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }] };

    service.saveRecipe(mockRecipe).subscribe(recipe => {
      expect(recipe).toEqual(mockRecipe);
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/recipes/${mockRecipe.id}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(mockRecipe);
  });

  it('should save all recipes', () => {
    const mockRecipes: Recipe[] = [
      { id: '123e4567-e89b-12d3-a456-426614174002', caption: 'Pasta', description: 'Yum', ingredients: [{ id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }] },
      { id: '123e4567-e89b-12d3-a456-426614174003', caption: 'Salad', description: 'Fresh', ingredients: [{ id: '123e4567-e89b-12d3-a456-426614174001', name: 'Onion' }] }
    ];

    service.saveAllRecipes(mockRecipes).subscribe(recipes => {
      expect(recipes).toEqual(mockRecipes);
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/recipes`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(mockRecipes);
  });

  it('should delete a recipe', () => {
    const mockRecipe: Recipe = { id: '123e4567-e89b-12d3-a456-426614174002', caption: 'Pasta', description: 'Yum', ingredients: [{ id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }] };

    service.deleteRecipe(mockRecipe).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/recipes/${mockRecipe.id}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    expect(req.request.body).toEqual(mockRecipe);
    req.flush(null);
  });

  //====================================================================================================
  // Backend error handling tests --------------------------------------------------------
  it('should handle error when fetching all ingredients', () => {
    const errorMessage = 'Failed to fetch ingredients';

    service.getAllIngredients().subscribe(
      () => fail('expected an error, not ingredients'),
      error => expect(error).toContain(errorMessage)
    );

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients`);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });

  it('should handle error when saving an ingredient', () => {
    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' };
    const errorMessage = 'Failed to save ingredient';

    service.saveIngredient(mockIngredient).subscribe({
      next: () => fail('expected an error, not ingredient'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients/${mockIngredient.id}`);
    expect(req.request.method).toBe('POST');
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });

  it('should handle error when deleting an ingredient', () => {
    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' };
    const errorMessage = 'Failed to delete ingredient';

    service.deleteIngredient(mockIngredient).subscribe({
      next: () => fail('expected an error, not response'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients/${mockIngredient.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });

  // Client-side error handling tests --------------------------------------------------------
  it('should handle client-side error when fetching all ingredients', () => {
    const errorMessage = 'Client-side error';

    service.getAllIngredients().subscribe({
      next: () => fail('expected an error, not ingredients'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients`);
    expect(req.request.method).toBe('GET');
    req.error(new ProgressEvent('error', { lengthComputable: false, loaded: 0, total: 0 }), { status: 0, statusText: errorMessage });
  });

  it('should handle client-side error when saving an ingredient', () => {
    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' };
    const errorMessage = 'Client-side error';

    service.saveIngredient(mockIngredient).subscribe({
      next: () => fail('expected an error, not ingredient'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients/${mockIngredient.id}`);
    expect(req.request.method).toBe('POST');
    req.error(new ProgressEvent('error', { lengthComputable: false, loaded: 0, total: 0 }), { status: 0, statusText: errorMessage });
  });

  it('should handle client-side error when deleting an ingredient', () => {
    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' };
    const errorMessage = 'Client-side error';

    service.deleteIngredient(mockIngredient).subscribe({
      next: () => fail('expected an error, not response'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients/${mockIngredient.id}`);
    expect(req.request.method).toBe('DELETE');
    req.error(new ProgressEvent('Network error', { lengthComputable: false, loaded: 0, total: 0 }), { status: 0, statusText: errorMessage });
  });

  it('should handle error when saving all ingredients', () => {
    const mockIngredients: Ingredient[] = [
      { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' },
      { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Onion' }
    ];
    const errorMessage = 'Failed to save ingredients';

    service.saveAllIngredients(mockIngredients).subscribe({
      next: () => fail('expected an error, not ingredients'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients`);
    expect(req.request.method).toBe('POST');
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });

  it('should handle client-side error when saving all ingredients', () => {
    const mockIngredients: Ingredient[] = [
      { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' },
      { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Onion' }
    ];
    const errorMessage = 'Client-side error';

    service.saveAllIngredients(mockIngredients).subscribe({
      next: () => fail('expected an error, not ingredients'),
      error: error => expect(error).toContain(errorMessage)
    });

    const req = httpMock.expectOne(`${service.apiBaseUrl}/ingredients`);
    expect(req.request.method).toBe('POST');
    req.error(new ProgressEvent('error', { lengthComputable: false, loaded: 0, total: 0 }), { status: 0, statusText: errorMessage });
  });
});
