-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE bamazon;
USE bamazon;

-- Created the table "schools"
CREATE TABLE products (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  price int(6) NOT NULL,
  qty int(3) NOT NULL,
  department varchar(30) NOT NULL,
  PRIMARY KEY(id)
);


INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('1', 'toothbrush', '5', '20', 'bath');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('2', 'football', '10', '100', 'sports');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('3', 'tires', '100', '50', 'automotive');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('4', 'computer', '500', '20', 'electronics');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('5', 'soap', '2', '1000', 'bath');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('6', 'fishing rod', '100', '90', 'sports');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('7', 'jumper cables', '30', '35', 'automotive');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('8', 'television', '250', '143', 'electronics');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('9', 'headphones', '20', '30', 'electronics');
INSERT INTO `bamazon`.`products` (`id`, `name`, `price`, `qty`, `department`) VALUES ('10', 'towels', '30', '56', 'bath');
