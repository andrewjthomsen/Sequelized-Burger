USE burger;
CREATE TABLE burgers2(
id INT AUTO_INCREMENT primary key,
burger_name VARCHAR(30) NOT NULL,
devoured boolean DEFAULT false
);
