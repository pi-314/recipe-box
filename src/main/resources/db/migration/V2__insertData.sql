-- insert some data
INSERT INTO ingredients VALUES(unhex(replace(uuid(),'-','')), 'Milk');
INSERT INTO ingredients VALUES(unhex(replace(uuid(),'-','')), 'Coffee');
INSERT INTO ingredients VALUES(unhex(replace(uuid(),'-','')), 'Sugar');

INSERT INTO `recipes` (id, caption, description) 
    VALUES (unhex(replace(uuid(),'-','')), 'Coffee with Cinamon', 'Put all ingredients together and enjoy your coffee.');

INSERT INTO `recipes_ingredients` ( `ingredients_id`, `recipes_id` )
    SELECT i.id, r.id from `ingredients` AS i, `recipes` AS r;

INSERT INTO ingredients VALUES(unhex(replace(uuid(),'-','')), 'Cinamon Powder');