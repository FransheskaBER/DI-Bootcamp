-- CREATE TABLE customers(
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50),
-- last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customers_profile(
-- customer_id INT PRIMARY KEY,
-- isLoggedIn BOOLEAN DEFAULT FALSE,
-- FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
-- )

-- INSERT INTO customers(first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- SELECT * FROM customers

-- INSERT INTO customers_profile(customer_id, isLoggedIn)
-- VALUES
-- ((SELECT customer_id FROM customers WHERE first_name = 'John'), TRUE),
-- ((SELECT customer_id FROM customers WHERE first_name = 'Jerome'), FALSE)

-- SELECT * FROM customers_profile

-- SELECT a.first_name FROM customers a
-- INNER JOIN customers_profile b
-- ON a.customer_id = b.customer_id
-- WHERE isLoggedIn = TRUE;

-- SELECT a.first_name, b.isLoggedIn FROM customers a
-- LEFT JOIN customers_profile b
-- ON a.customer_id = b.customer_id

-- SELECT count(*) AS not_logged_in
-- FROM customers a
-- JOIN customers_profile b
-- ON a.customer_id = b.customer_id
-- WHERE isLoggedIn = FALSE;










