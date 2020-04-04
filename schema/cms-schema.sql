-- create database
DROP DATABASE IF EXISTS cmsDB;
CREATE database cmsDB;

USE cmsDB;

-- Create table for DEPARTMENT 
CREATE TABLE department (
    department_ID INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(department_ID),
    name VARCHAR(30) NOT NULL 
);

-- Create table for ROLE 
CREATE TABLE role (
    role_ID INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY(role_ID),
    department_FK INT,
    FOREIGN KEY (department_FK) REFERENCES department(department_ID)
);

-- Create table for EMPLOYEE
CREATE TABLE employee (
    employee_ID INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
	role_FK INT,
    PRIMARY KEY(employee_ID),
    FOREIGN KEY (role_FK) REFERENCES role(role_ID)
);


