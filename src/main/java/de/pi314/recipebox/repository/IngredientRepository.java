package de.pi314.recipebox.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import de.pi314.recipebox.model.Ingredient;


@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, UUID> {}
