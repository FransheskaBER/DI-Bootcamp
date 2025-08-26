import random
import json
import requests
import psycopg2

# Daily challenge : Web API to DB

# What You will learn :
# Web API and Database

# Instructions
# Using this REST Countries API, create the functionality which will write 10 random countries to your database.
# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

connection = psycopg2.connect(
    database = "bootcamp",
    user = 'postgres',
    password = 'Franshsk19',
    host = 'localhost',
    port = '5432'
    )
cursor = connection.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS countries(
               item_id SERIAL PRIMARY KEY,
               name VARCHAR(200) NOT NULL,
               capital VARCHAR(200) NOT NULL,
               flag VARCHAR(200) NOT NULL,
               region VARCHAR(200) NOT NULL,
               population INT NOT NULL)
               ''')
connection.commit()

response = requests.get('https://restcountries.com/v3.1/all')
data = response.json()
random_countries = random.sample(data, 10)
# print(random_countries)
# print(random_countries[0].keys())

for i in random_countries:
    name = i.get("name")
    capital = i.get("capital")
    flag = i.get("flag")
    region = i.get("subregion")
    population = i.get("population")
    
    cursor.execute(f'''INSERT INTO countries(name, capital, flag, region, population)
               VALUES ('{name}', '{capital}', '{flag}', '{region}', '{population}')''')
    
    connection.commit()



