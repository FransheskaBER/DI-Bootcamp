-- HOW TO CREATE A TABLE --
-- Primary Key means that it should not be null and it should be unique
-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(100),
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- )

-- HOW TO INSERT DATA INTO THE TABLE
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('Matt', 'Damon', '08/10/1970', 5)

-- HOW TO RETRIEVE DATA ON THE TABLE
-- SELECT * FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('George', 'Clooney', '06/05/1961', 2),
-- ('Gal', 'Gadot', '30/04/1985', 2),
-- ('Meryl', 'Streep', '22/06/1949', 12),
-- ('Brad', 'Pitt', '18/12/1963', 2);

SELECT first_name, number_oscars FROM actors WHERE last_name ILIKE '%mon%'



