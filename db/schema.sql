CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT primary key,
    burger_name varchar(150),
    devoured boolean default false
);