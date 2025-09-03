SELECT * FROM customer

SELECT first_name || ' ' || last_name AS full_name FROM customer

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

SELECT a.customer_id, a.first_name, a.last_name, b.address, b.phone
FROM customer a
JOIN address b ON a.address_id = b.address_id
WHERE district = 'Texas'


SELECT * FROM film WHERE film_id = 15 OR film_id = 150

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Lord of the Rings'

SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Lo%'

SELECT title FROM film ORDER BY rental_rate ASC LIMIT 10 

SELECT title FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10

SELECT a.customer_id, a.first_name, a.last_name, b.amount, b.payment_date
FROM customer a
INNER JOIN payment b
ON a.customer_id = b.customer_id
ORDER BY a.customer_id ASC

SELECT a.film_id, a.title, b.inventory_id
FROM film a
LEFT OUTER JOIN inventory b ON a.film_id = b.film_id
WHERE b.inventory_id IS NULL


SELECT a.country, b.city
FROM country a
JOIN city b
ON a.country_id = b.country_id

SELECT a.customer_id, a.first_name, a.last_name, b.amount, b.payment_date, b.staff_id
FROM payment b
JOIN customer a ON a.customer_id = b.customer_id
ORDER BY staff_id ASC

SELECT staff_id, COUNT(payment_id) AS total_sales FROM payment
GROUP BY staff_id
ORDER BY total_sales DESC
