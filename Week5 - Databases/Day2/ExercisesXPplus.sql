INSERT INTO students(first_name, last_name, birth_date)
VALUES
('Marc', 'Benichou', '02/11/998'),
('Yoan', 'Cohen', '03/12/2010'),
('Lea', 'Benichou', '27/07/1987'),
('Amelia', 'Dux', '07/04/1996'),
('David', 'Grez', '14/06/2003'),
('Omer', 'Simpson', '03/10/1980');
INSERT into students(first_name, last_name, birth_date) VALUES('Fransheska', 'Echevarria', '20/06/1992');
UPDATE students SET birth_date='02/11/1998' WHERE first_name='Marc' AND last_name='Benichou';
SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students WHERE id=2;
SELECT first_name, last_name FROM students WHERE last_name='Benichou' OR first_name='Marc';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
SELECT first_name, last_name FROM students WHERE id=1 OR id=3;
SELECT * FROM students WHERE birth_date>='2000/01/1';
