package de.pi314.recipebox.model;

import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "recipes")
public class Recipe {

    @Id
    @Column(updatable = false, unique = true)
    UUID id;

    @Column( nullable=false )
    String caption;

    @Column(columnDefinition = "TEXT")
    String description;

    // Note: one-way(!) ManyToMany -> 
    // Ingredient doesn't maintain such a relation to the Recipe,
    // having only the list of the Ingredients
    @ManyToMany
    @JoinTable(
        name="recipes_ingredients",
        joinColumns=
            @JoinColumn(name="recipes_id", referencedColumnName="id"),
        inverseJoinColumns=
            @JoinColumn(name="ingredients_id", referencedColumnName="id"))
    Set<Ingredient> ingredients;
}
