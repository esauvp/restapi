CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados (
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre varchar(45) DEFAULT NULL,
    salario int(5) DEFAULT NULL,
    PRIMARY KEY (id)

);