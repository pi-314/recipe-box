import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IngredientsService } from './ingredients.service';
import { APIService } from './API.service';
import { Ingredient } from '../datamodel/ingredient';


describe('IngredientsService', () => {
    let service: IngredientsService;
    let apiServiceMock: jest.Mocked<APIService>;

    beforeEach(() => {
        apiServiceMock = {
            getAllIngredients: jest.fn(),
            saveAll: jest.fn(),
            saveIngredient: jest.fn()
        } as unknown as jest.Mocked<APIService>;

        TestBed.configureTestingModule({
            providers: [
                IngredientsService,
                { provide: APIService, useValue: apiServiceMock }
            ]
        });

        service = TestBed.inject(IngredientsService);
        
        TestBed.flushEffects();
    });

    it('should be created', () => {
        
        expect(service).toBeTruthy();
        
    });

    // Unfortunatelly cannot be tested in some elegant way, because 
    // effects() are still in developer preview :(
    // s. https://github.com/angular/angular/issues/50466
    xit('should initially fetch ingredients', async () => {
        
        const mockIngredients: Ingredient[] = [
            { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }
        ];
        apiServiceMock.getAllIngredients
            .mockReturnValue(of(mockIngredients));

        // This still doesn't work without component
        //TestBed.flushEffects();
        
        expect(service.ingredients()).toEqual(mockIngredients);
        console.log('expects passed');
    });

    it('should add a new ingredient', async () => {
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
    // it('should save ingredients', async () => {
    //     const mockIngredients: Ingredient[] = [{ id: '123e4567-e89b-12d3-a456-426614174000', name: 'Tomato' }];
    //     apiServiceMock.getAll.mockReturnValue(of(mockIngredients));

    //     await service.loadIngredients();
    //     expect(service.hasLoaded).toBe(true);
    //     expect(service.ingredients()).toEqual(mockIngredients);

    //     const mockIngredient: Ingredient = { id: '123e4567-e89b-12d3-a456-426614174001', name: 'Cucumber' };
    //     apiServiceMock.save.mockReturnValue(of(mockIngredient));
        
    //     await service.add(mockIngredient);
        
    //     expect(apiServiceMock.save).toHaveBeenCalledWith(mockIngredient);
    //     expecst(service.ingredients()).toContain(mockIngredient);
        
    // });




});