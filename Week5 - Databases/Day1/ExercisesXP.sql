INSERT INTO items (item_name, price) 
VALUES
('Small Desk', '100'),
('Large desk', '300'),
('Fan', '80');
INSERT INTO customers(first_name, last_name) VALUES('Greg', 'Jones'),
INSERT INTO customers(first_name, last_name) 
VALUES
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
SELECT * FROM items;
SELECT * FROM items WHERE price>80;
SELECT * FROM items WHERE price<=300;
SELECT * FROM customers WHERE last_name='Smith';
SELECT * FROM customers WHERE last_name='Jones';
SELECT * FROM customers WHERE first_name!='Scott';
