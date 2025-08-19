SELECT * FROM actors;
SELECT AVG(number_oscars) FROM actors;
SELECT DISTINCT(number_oscars) FROM actors;
SELECT number_oscars, COUNT(*) FROM actors GROUP BY number_oscars;
SELECT * FROM actors WHERE birthdate > '1970-01-01';
SELECT * FROM actors WHERE first_name IN ('David', 'Morgan', 'Will');