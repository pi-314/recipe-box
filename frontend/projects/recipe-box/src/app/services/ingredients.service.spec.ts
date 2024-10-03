import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IngredientsService } from './ingredients.service';
import { APIService } from './API.service';
import { Ingredient } from '../datamodel/ingredient';


describe('IngredientsService', () => {
  let service: IngredientsService;
  let apiServiceMock: jest.Mocked<APIService>;

  beforeEach(() => {
    // Mock the API service, providing only the methods that are used by the ingredientsService
    apiServiceMock = {
      getAllIngredients: jest.fn(),
      saveAll: jest.fn(),
      saveIngredient: jest.fn()
    } as unknown as jest.Mocked<APIService>;

    TestBed.configureTestingModule({
      // Provide required dependencies
      providers: [
        IngredientsService,
        { provide: APIService, useValue: apiServiceMock }
      ]
    });

    service = TestBed.inject(IngredientsService);

    TestBed.flushEffects(); // Should trigger the effects, helping to test the service without a component
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Unfortunatelly cannot be tested in some elegant way, because
  // effects() are still in developer preview :(
  // s. https://github.com/angular/angular/issues/50466
  it('should initially fetch ingredients', () => {
    const mockIngredients: Ingredient[] = [
      { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }
    ];

    apiServiceMock.getAllIngredients.mockReturnValue(of(mockIngredients));

    // TODO: Remove this line as soon as signals() are supported in tests.
    //       That method should be private!!!
    service.loadIngredients();

    expect(service.ingredients()).toEqual(mockIngredients);
  });

  it('should add a new ingredient', () => {
    const newIngredient: Ingredient = { id: '', name: 'Cucumber' };

    apiServiceMock.saveIngredient.mockReturnValue(of(newIngredient));

    const x = service.addIngredient(newIngredient);

    expect(apiServiceMock.saveIngredient)
      .toHaveBeenCalledWith(
        expect.objectContaining({ name: 'Cucumber' }));

    expect(service.ingredients()).toContain(x);

    if (typeof localStorage !== 'undefined') {
      const localData = JSON.parse(localStorage.getItem('ingredients') || '[]');
      expect(localData).toEqual(expect.arrayContaining([expect.objectContaining(x)]));
    }
  });

  it('should save ingredients', () => {
    const mockIngredients: Ingredient[] = [{ id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }];
    apiServiceMock.getAllIngredients.mockReturnValue(of(mockIngredients));

    // TODO: Remove this line as soon as signals() are supported in tests.
    //       That method should be private!!!
    service.loadIngredients();

    expect(service.ingredients()).toEqual(mockIngredients);

    const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Cucumber' };
    apiServiceMock.saveIngredient.mockReturnValue(of(mockIngredient));

    service.addIngredient(mockIngredient);

    expect(apiServiceMock.saveIngredient).toHaveBeenCalledWith(mockIngredient);
    expect(service.ingredients()).toContain(mockIngredient);

  });




});
