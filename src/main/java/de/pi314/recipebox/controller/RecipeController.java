package de.pi314.recipebox.controller;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.pi314.recipebox.model.Recipe;
import de.pi314.recipebox.repository.RecipeRepository;

@RestController
@CrossOrigin( origins = "http://localhost:8081")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes() {

        try {
            return new ResponseEntity<>(StreamSupport.stream(recipeRepository.findAll().spliterator(), false).toList(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/recipes/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable UUID id, @RequestBody Recipe recipe) {

        try {
            return new ResponseEntity<>(recipeRepository.save(recipe), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/recipes/{id}")
    public ResponseEntity<Recipe> removeIngredient(@PathVariable UUID id, @RequestBody Recipe recipe) {

        try {
            recipeRepository.delete(recipe);
            return new ResponseEntity<>(recipe, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
