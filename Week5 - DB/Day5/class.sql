SELECT * FROM movies
SELECT * FROM actors

INSERT INTO movies(movie_title, movie_story) VALUES
('Harry Potter', 'Amazing fantastic movie')

SELECT a.first_name, a.last_name, m.movie_title
FROM actors a
FULL JOIN movies m
ON a.actor_id = m.actor_playing_id

CREATE TABLE countries(
country_id SERIAL PRIMARY KEY,
country_name VARCHAR(50) NOT NULL
)

INSERT INTO countries(country_name) VALUES
('Iceland'),
('Spain'),
('Italy');

SELECT * FROM countries

SELECT a.actor_id, b.country_id, a.first_name, a.last_name
FROM actors a
FULL JOIN countries b
ON a.actor_id = b.country_id



