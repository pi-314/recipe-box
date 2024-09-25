package de.pi314.recipebox.controller;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.pi314.recipebox.model.Recipe;
import de.pi314.recipebox.repository.RecipeRepository;

@RestController
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    /**
     * Retrieves all recipes.
     *
     * @return ResponseEntity containing a list of all recipes and an HTTP status code.
     *         - HTTP status 200 (OK) if the retrieval is successful
     *         - HTTP status 500 (Internal Server Error) if an error occurs during retrieval
     */
    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes() {
        try {
            return new ResponseEntity<>(StreamSupport.stream(recipeRepository.findAll().spliterator(), false).toList(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Saves a list of recipes.
     *
     * @param recipes the list of recipes to be saved
     * @return a ResponseEntity containing the list of saved recipes and an HTTP status code.
     *         - HTTP 200 (OK) if the save is successful
     *         - HTTP 500 (Internal Server Error) if an error occurs during save
     */
    @PostMapping("/recipes")
    public ResponseEntity<List<Recipe>> saveAllRecipes(@RequestBody List<Recipe> recipes) {
        try {
            return new ResponseEntity<>(
                StreamSupport.stream(recipeRepository.saveAll(recipes).spliterator(), false).toList(), 
                HttpStatus.OK
            );
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Updates an existing recipe.
     *
     * @param id the UUID of the recipe to be updated
     * @param recipe the Recipe object containing updated details
     * @return a ResponseEntity containing the updated Recipe object and HTTP status code,
     *         - HTTP 200 (OK) if the updated successfully
     *         - HTTP 500 (Internal Server Error) if an error occurs during update
     */
    @PostMapping("/recipes/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable UUID id, @RequestBody Recipe recipe) {
        try {
            return new ResponseEntity<>(recipeRepository.save(recipe), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Deletes a recipe identified by its ID.
     *
     * @param id the UUID of the recipe to be deleted
     * @param recipe the Recipe object to be deleted
     * @return a ResponseEntity containing the deleted Recipe object and an HTTP status code
     *         - HTTP 200 (OK) if the deletion is successful
     *         - HTTP 500 (Internal Server Error) if an error occurs during deletion
     */
    @DeleteMapping("/recipes/{id}")
    public ResponseEntity<Recipe> removeRecipe(@PathVariable UUID id, @RequestBody Recipe recipe) {
        try {
            recipeRepository.delete(recipe);
            return new ResponseEntity<>(recipe, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
