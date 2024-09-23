package de.pi314.recipebox.controller;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import de.pi314.recipebox.model.Ingredient;
import de.pi314.recipebox.repository.IngredientRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@CrossOrigin( origins = "http://localhost:4200")
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;


    @GetMapping("/ingredients")
    public ResponseEntity<List<Ingredient>> getAllIngredients() {

        try {
            return new ResponseEntity<>(StreamSupport.stream(ingredientRepository.findAll().spliterator(), false).toList(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/ingredients")
    public ResponseEntity<List<Ingredient>> saveAllIngredients(@RequestBody List<Ingredient> ingredients) {
        try {
            return new ResponseEntity<>(StreamSupport.stream(ingredientRepository.saveAll(ingredients).spliterator(), false).toList(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/ingredients/{id}")
    public ResponseEntity<Ingredient> updateIngredient(@PathVariable UUID id, @RequestBody Ingredient ingredient) {
        try {
            return new ResponseEntity<>(ingredientRepository.save(ingredient), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
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
