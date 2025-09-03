CREATE TABLE Book(
book_id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
author VARCHAR(50) NOT NULL
)

INSERT INTO book(title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

SELECT * FROM Book

CREATE TABLE Student(
student_id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
age DATE CHECK(age >= CURRENT_DATE - INTERVAL '15 years')
)

INSERT INTO Student(name, age) VALUES
('John', CURRENT_DATE - INTERVAL '12 years'),
('Lera', CURRENT_DATE - INTERVAL '11 years'),
('Patrick', CURRENT_DATE - INTERVAL '10 years'),
('Bob', CURRENT_DATE - INTERVAL '14 years');

SELECT * FROM Student

CREATE TABLE Library(
book_fk_id INT NOT NULL,
student_id INT NOT NULL,
borrowed_date DATE NOT NULL,
PRIMARY KEY (book_fk_id, student_id),
FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO Library(student_id, book_fk_id, borrowed_date) VALUES
((SELECT student_id FROM Student WHERE name='John'), (SELECT book_id FROM Book WHERE title='Alice In Wonderland'), '2022-02-15'),
((SELECT student_id FROM Student WHERE name='Bob'), (SELECT book_id FROM Book WHERE title='To kill a mockingbird'), '2021-03-03'),
((SELECT student_id FROM Student WHERE name='Lera'), (SELECT book_id FROM Book WHERE title='Alice In Wonderland'), '2021-05-23'),
((SELECT student_id FROM Student WHERE name='Bob'), (SELECT book_id FROM Book WHERE title='Harry Potter'), '2021-08-12');

SELECT * FROM Library

SELECT a.name, b.title
FROM Student a
JOIN Library l ON a.student_id = l.student_id
JOIN Book b ON b.book_id = l.book_fk_id;

-- To calculate the age from dates use function AGE(datetime1, datetime2) which returns an interval (0 years 0 months 0 days)
-- To pull out the number of years from the returned interval use > EXTRACT(YEAR FROM...)
SELECT AVG(EXTRACT(YEAR FROM AGE(CURRENT_DATE, a.age))) AS average_age FROM Student a
JOIN Library l
ON a.student_id = l.student_id
WHERE book_fk_id = (SELECT book_id FROM Book WHERE title='Alice In Wonderland');


DELETE FROM Student WHERE name = 'Bob';
SELECT * FROM Library
-- it deleted the two entries of Bob from the library table so now it shows just the entry for student John and Lera

