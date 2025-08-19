SELECT * FROM items;
SELECT * FROM items ORDER BY price ASC;
INSERT INTO items(item_name, price) VALUES ('Blender', '50'), ('Broom', '10');
SELECT item_name, price FROM items WHERE price>= 80 ORDER BY price ASC;
SELECT * FROM customers;
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
SELECT last_name FROM customers ORDER BY lasT_name DESC;