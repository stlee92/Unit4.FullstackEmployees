DROP TABLE IF EXISTS fullstack_employees;
CREATE TABLE fullstack_employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthday DATE,
    salary INT
    );