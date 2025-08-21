SELECT name FROM language

SELECT a.title, a.description, b.name
FROM film a
JOIN language b ON a.language_id = b.language_id

SELECT a.title, a.description, b.name
FROM film a
RIGHT JOIN language b ON a.language_id = b.language_id
ORDER BY a.title DESC

CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO new_film(name) VALUES
('Harry Potter and the Sorcerer’s Stone'),
('Harry Potter and the Chamber of Secrets'), 
('Harry Potter and the Prisoner of Azkaban'), 
('Harry Potter and the Goblet of Fire'), 
('Harry Potter and the Order of the Phoenix'), 
('Harry Potter and the Half-Blood Prince'), 
('Harry Potter and the Deathly Hallows – Part 1'), 
('Harry Potter and the Deathly Hallows – Part 2');

SELECT * FROM new_film

CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY,
film_id INT NOT NULL,
language_id INT NOT NULL,
title VARCHAR(50) NOT NULL,
score INT NOT NULL CHECK (score BETWEEN 1 AND 10), 
review_text TEXT,
last_update TIMESTAMP NOT NULL DEFAULT NOW(),
FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
FOREIGN KEY (language_id) REFERENCES language(language_id)
)

INSERT INTO customer_review(film_id, language_id, title, score, review_text) VALUES
((SELECT id FROM new_film WHERE name = 'Harry Potter and the Sorcerer’s Stone'), (SELECT language_id FROM language WHERE name = 'English'), 'The major start of all the magic!', 8, 'Having read the first few Harry Potter books before 2001 and hearing about the hype for the first movie, I was excited. I heard there was going to be an all-British cast (which makes sense, right?) and we would get to see a live version of one of the defining novels of our generation. From what I remember I went with my family and a family friend to see the movie the day after Christmas and was pleasantly amazed. After the movie was over, I watched the credits and discovered some familiar names (the late Alan Rickman, Sister Act is Maggie Smith, James Bond 007 is Robbie Coltrane, and Star Wars Warwick Davis); others not so familiar (the kids, some of whom had their debut). But it was a good movie and was a party of colors and sights for all to see. This is easily my favorite of all the Harry Potter films. The catalyst of the movie series!'), 
((SELECT id FROM new_film WHERE name = 'Harry Potter and the Half-Blood Prince'), (SELECT language_id FROM language WHERE name = 'English'), 'My least favourite hp movie', 7, 'This movie focuses on the relationships too much and not the actual story. There was more of Tom Riddle is backstory in the book and in the film, they could have focused on that instead of the relationships')

SELECT * FROM customer_review

DELETE FROM new_film WHERE name='Harry Potter and the Sorcerer’s Stone'