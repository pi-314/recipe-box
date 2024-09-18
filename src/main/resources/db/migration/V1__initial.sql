-- Create tables
CREATE TABLE `ingredients` (
  `id` binary(16) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
;

CREATE TABLE `recipes` (
  `id` binary(16) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
;

CREATE TABLE `recipes_ingredients` (
  `recipes_id` binary(16) NOT NULL,
  `ingredients_id` binary(16) NOT NULL,
  PRIMARY KEY (`recipes_id`,`ingredients_id`),
  KEY `FKlvjx0n917c1o5h1f4uyswgpx7` (`ingredients_id`),
  CONSTRAINT `FK7nlvtcyl7qjws7gh3h6xbruwi` FOREIGN KEY (`recipes_id`) REFERENCES `recipes` (`id`),
  CONSTRAINT `FKlvjx0n917c1o5h1f4uyswgpx7` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
;
