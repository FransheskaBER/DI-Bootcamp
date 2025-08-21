UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name='Italian')
WHERE title LIKE 'A%'

SELECT title, language_id FROM film ORDER BY title ASC

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- The FK in the customer_table is address_id and store_id which reference the address where the store the user rented for is located. When we INSERT
-- into the customer table, we need to create a sub-query to select an address from the list)

-- To drop a table, we need extra checking, to see if there are foreign keys that reference this table. Since, there were not references keys then, 
-- dropping this table was easy step.
DROP TABLE customer_review

SELECT count(*) AS unreturned_yet
FROM rental
WHERE return_date IS NULL

SELECT DISTINCT c.film_id, c.title, c.rental_rate, MAX(a.rental_date) AS most_recent_outstanding
FROM rental a
JOIN inventory b ON a.inventory_id = b.inventory_id
JOIN film c ON b.film_id = c.film_id
WHERE a.return_date IS NULL
GROUP BY c.film_id, c.title, c.rental_rate
ORDER BY c.rental_rate DESC LIMIT 30

SELECT a.title, a.description, b.first_name, b.last_name
FROM actor b
JOIN film_actor c ON b.actor_id = c.actor_id
JOIN film a ON c.film_id = a.film_id
WHERE b.first_name = 'Penelope' AND b.last_name = 'Monroe' AND a.description ILIKE '%wrestler%'

SELECT title, description, length, rating
FROM film
WHERE length < 60 AND rating = 'R' AND description ILIKE '%documentary%'

SELECT e.title, a.first_name, a.last_name, b.amount, c.return_date
FROM customer a
JOIN payment b ON a.customer_id = b.customer_id 
JOIN rental c ON b.rental_id = c.rental_id
JOIN inventory d ON c.inventory_id = d.inventory_id
JOIN film e ON d.film_id = e.film_id
WHERE a.first_name = 'Matthew' AND a.last_name = 'Mahan' AND b.amount > 4 AND c.return_date >= TIMESTAMP '2005-07-28' AND c.return_date < TIMESTAMP '2005-08-02'

SELECT d.title, d.description, d.replacement_cost, a.first_name, a.last_name
FROM customer a 
JOIN rental b ON a.customer_id = b.customer_id  
JOIN inventory c ON b.inventory_id = c.inventory_id
JOIN film d ON c.film_id = d.film_id
WHERE (d.title ILIKE '%boat%' OR d.description ILIKE '%boat%') AND a.first_name = 'Matthew' AND a.last_name = 'Mahan'
ORDER BY d.replacement_cost DESC

