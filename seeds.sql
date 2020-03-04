INSERT INTO department (name)
VALUES ("sales"), ("engineering"), ("finance"), ("legal");

INSERT INTO role (title, salary, department_FK)
VALUES ("sales lead", 120000, 1), ("sales person", 80000, 1), ("lead engineer", 150000, 2), 
("software engineer", 100000, 2), ("lead accountant", 100000, 3), ("accountant", 80000, 3), 
("legal team lead", 150000, 4), ("lawyer", 120000, 4);
