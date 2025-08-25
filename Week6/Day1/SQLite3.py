# SQlite is just a file in your computers (and it is commonly use in phones because it is ligtweight)
# sqlite database is not a mysql and postgresqsl
# SQLite doesn't need username, database, hostname, and all of that.
#  SQLite has less features than postgreSQL has.

""" # Common SQL statements:

# CREATE DATABASE
# ALTER DATABASE
# CREATE TABLE
# ALTER TABLE
# DROP TABLE
# SELECT
# INSERT INTO
# UPDATE
# DELETE

import sqlite3

# Connect to a local database (in your computer - it
# creates the database file if it doesn't exist):
conn = sqlite3.connect('database.sqlite')
cursor = conn.cursor()
print('Opened database successfully')

cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

# Create a table:
cursor.execute("""
# CREATE TABLE IF NOT EXISTS EMPLOYEE (
    # ID INT PRIMARY KEY NOT NULL,
    # NAME TEXT NOT NULL,
    # AGE INT NOT NULL
# );
""")

#  Commit + close
# conn.commit()
# conn.close()

# Insert values in table:
cursor.execute("""
# INSERT OR IGNORE INTO EMPLOYEE (ID,NAME,AGE)
# VALUES (1, 'Razi', 14);
""")

cursor.execute("""
# INSERT INTO EMPLOYEE (ID,NAME,AGE)
# VALUES (2, 'Jon', 19);
""")

cursor.execute("""
# INSERT INTO EMPLOYEE (ID,NAME,AGE)
# VALUES (3, 'Martha', 35);
""")

# Save changes:
conn.commit()

# Close:
# conn.close()

cursor.execute("SELECT * FROM EMPLOYEE")
rows = cursor.fetchall()

for row in rows:
    print(row)

conn.close()

#  after you close the connection,
#  you can open a new connect:

conn = sqlite3.connect("database.sqlite")
cur = conn.cursor()

cur.execute("DROP TABLE employee")
conn.commit()
conn.close()

conn = sqlite3.connect("database.sqlite")
cur = conn.cursor()
cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
print(cur.fetchall()) """


import requests
import json
import sqlite3
from faker import Faker
from time import time

def get_jokes(n):
    for i in range(n):
        print(i + 1)
        url = 'https://api.chucknorris.io/jokes/random'
        data = requests.get(url)
        data = data.json()
        joke = data['value']
        joke = joke.replace("'", "")
        print(joke)
        connection = sqlite3.connect('jokes.db')  #Make a connection to the database
        cursor = connection.cursor() #Think of the cursor as the place that executes queries
        create_table = f"CREATE TABLE IF NOT EXISTS jokes (id SERIAL PRIMARY KEY, joke TEXT NOT NULL)"
        cursor.execute(create_table) 
        query = f"INSERT INTO jokes (joke) VALUES ('{joke}');"
        cursor.execute(query)  #Cursor runs the query
        connection.commit()  #Finalize the result. "Write" it to the DB
        # results = cursor.fetchall() #Fetch theh results back from the cursor into python variable
        connection.close()  #Close the connection

get_jokes(5)

def read_jokes():
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM jokes;")
    connection.commit
    results = cursor.fetchall()
    connection.close
    for result in results:
        print(result)

# read_jokes()

def gen_fake_data(n):
    start = time()
    f = Faker()
    connection = sqlite3.connect('jokes.db')  #Make a connection to the database
    cursor = connection.cursor() #Think of the cursor as the place that executes queries
    for i in range(n):
        print(i + 1)
        name = f.name()
        query = f"INSERT INTO jokes (joke) VALUES ('{name}');"
        cursor.execute(query)  #Cursor runs the query
    connection.commit()  #Finalize the result. "Write" it to the DB
    connection.close()
    end = time()
    print(f"The function ran in {round(end-start,2)}s")

gen_fake_data(5)
read_jokes()