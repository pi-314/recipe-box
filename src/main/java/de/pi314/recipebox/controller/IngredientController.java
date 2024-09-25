package de.pi314.recipebox.controller;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import de.pi314.recipebox.model.Ingredient;
import de.pi314.recipebox.repository.IngredientRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;


    /**
     * Gets all ingredients.
     * <p>
     * @return a ResponseEntity containing a list of all ingredients and an HTTP status code.
     *    <p>- If the retrieval is successful, the status code is 200 (OK).
     *    <p>- If an error occurs, the status code is 500 (Internal Server Error).
     */
    @GetMapping("/ingredients")
    public ResponseEntity<List<Ingredient>> getAllIngredients() {
        try {
            return new ResponseEntity<>(
                StreamSupport.stream(ingredientRepository.findAll().spliterator(), false).toList(),
                HttpStatus.OK
            );
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Saves a list of ingredients.
     * <p>
     * @param ingredients the list of ingredients to be saved
     * @return a ResponseEntity containing the list of saved ingredients and an HTTP status code .
     *    <p>- If saved successfully, the status code is 200 (OK).
     *    <p>- If an error occurs, the status code is 500 (Internal Server Error).
     */
    @PostMapping("/ingredients")
    public ResponseEntity<List<Ingredient>> saveAllIngredients(@RequestBody List<Ingredient> ingredients) {
        try {
            return new ResponseEntity<>(
                StreamSupport.stream(ingredientRepository.saveAll(ingredients).spliterator(), false).toList(),
                HttpStatus.OK
            );
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Saves an existing ingredient.
     * <p>
     * @param id The UUID of the ingredient to be updated.
     * @param ingredient The ingredient object containing updated details.
     * @return A ResponseEntity containing the updated ingredient and HTTP status code.
     *    <p>- If saved successfully, the status code is 200 (OK).
     *    <p>- If an error occurs, the status code is 500 (Internal Server Error).
     */
    @PostMapping("/ingredients/{id}")
    public ResponseEntity<Ingredient> updateIngredient(@PathVariable UUID id, @RequestBody Ingredient ingredient) {
        try {
            return new ResponseEntity<>(ingredientRepository.save(ingredient), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    /**
     * Deletes an ingredient.
     * <p>
     * @param id The UUID of the ingredient to be deleted.
     * @param ingredient The ingredient object to be deleted.
     * @return A ResponseEntity containing the deleted ingredient and an HTTP status code.
     *    <p>- If deleted successfully, the status code is 200 (OK).
     *    <p>- If an error occurs, the status code is 500 (Internal Server Error).
     */
    @DeleteMapping("/ingredients/{id}")
    public ResponseEntity<Ingredient> removeIngredient(@PathVariable UUID id, @RequestBody Ingredient ingredient) {
        try {
            ingredientRepository.delete(ingredient);
            return new ResponseEntity<>(ingredient, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
