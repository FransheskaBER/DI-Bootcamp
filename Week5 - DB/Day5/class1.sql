CREATE TABLE colors (
    color_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO colors (name) VALUES ('blue'), ('yellow'), ('pink');
SELECT * FROM colors

CREATE TABLE cars_cascade(
car_id SERIAL PRIMARY KEY,
car_name VARCHAR(100),
car_color INT REFERENCES colors(color_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO cars_cascade(car_name, car_color) VALUES
('Toyota', 1), 
('Ford', 2),
('Honda', 3);

SELECT * FROM cars_cascade

DELETE FROM colors WHERE name = 'blue'

UPDATE colors 
SET color_id = 1
WHERE color_id = 3