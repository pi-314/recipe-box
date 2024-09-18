package de.pi314.recipebox.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import de.pi314.recipebox.model.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, UUID> {}
