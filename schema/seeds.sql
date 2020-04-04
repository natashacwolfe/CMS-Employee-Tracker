INSERT INTO department (name)
VALUES ("sales"), ("engineering"), ("finance"), ("legal");

INSERT INTO role (title, salary, department_FK)
VALUES ("sales lead", 120000.00, 1), ("sales person", 80000.00, 1), ("lead engineer", 150000.00, 2), 
("software engineer", 100000.00, 2), ("lead accountant", 100000.00, 3), ("accountant", 80000.00, 3), 
("legal team lead", 150000.00, 4), ("lawyer", 120000.00, 4);
