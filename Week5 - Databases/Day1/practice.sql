SELECT * FROM actors;
SELECT first_name, last_name FROM actors WHERE first_name = 'Matt' AND last_name = 'Clooney';
SELECT first_name, last_name FROM actors WHERE first_name = 'Matt' OR number_oscars = 2;
SELECT * FROM actors WHERE last_name LIKE '%an%';
SELECT * FROM actors LIMIT 4;
SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
SELECT * FROM actors WHERE first_name LIKE '%e%';
SELECT * FROM actors WHERE number_oscars >= 5;
SELECT * FROM actors;
UPDATE actors SET number_oscars=5 WHERE first_name='Matt' AND last_name='Damon' RETURNING *;
UPDATE actors SET first_name='Maty' WHERE first_name='Matt' RETURNING *
ALTER TABLE actors RENAME COLUMN age TO birthdate;


