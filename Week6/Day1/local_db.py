import psycopg2
import requests
import json
import os
dir_path = os.path.dirname(os.path.realpath(__file__))

# 1. Connect to the database
# DATABASE = 'Hollywood'
# USERNAME = 'postgres' 
# PASSWORD = 'Franshsk19' 
# HOSTNAME = 'localhost'
# PORT = '5432'

# 2. define the connection by creating a connection obj:
# connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
connection = psycopg2.connect(
    database = 'countries',
    user = 'postgres',
    password = 'Franshsk19',
    host = 'localhost',
    port = '5432'
)


# 3. From the connection object, we can get a cursor. Think of this as the place that runs your queries, kind like the pgAdmin query tool.
cursor = connection.cursor()

# 4. Now we can define our query:
# query = "SELECT * FROM actors;"


# 5. And submit it to the cursor to execute it:
# cursor.execute(query)
cursor.execute('DROP TABLE IF EXISTS random_countries')
cursor.execute('''CREATE TABLE IF NOT EXISTS countries(
               country_id SERIAL PRIMARY KEY,
               country_name VARCHAR(200) NOT NULL,
               capital VARCHAR(200),
               flag_png VARCHAR(200),
               region VARCHAR(200),
               population INT NOT NULL)''')

connection.commit()
print('Connection was successfully made and table was created')

response = requests.get('https://www.apicountries.com/countries')
data = response.json()

with open(f'{dir_path}/countries.json', "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)


for i in range(10):
    country_name = data[i]['name']
    capital = data[i].get('capital') or 'Unknown'
    if isinstance(capital, str):
        capital = capital.replace("'", "`")
    # try:
    #     capital = data[i].get('capital')
    # except:
    #     capital = 'unknown'
    # if "\'" in capital:
    #     capital = capital.replace('\'', '`') 
    flag_png = data[i]['flags']['png']
    region = data[i]['region']
    population = data[i]['population']
    
    cursor.execute(f'''INSERT INTO countries(country_name, capital, flag_png, region, population)
               VALUES ('{country_name}', '{capital}', '{flag_png}', '{region}', '{population}')''')
    
    connection.commit()

print('Table successfully executed')

cursor.execute('SELECT * FROM countries')

rows = cursor.fetchall()
    
for row in rows:
    print(row)

cursor.close()
connection.close()

# 6. The cursor now contains a result set. We need to fetch it into Python memory. This will give us a list of results:
# results = cursor.fetchall()

# 7. And now you can close your database connection, or make another request:
# connection.close()

# 8. You can process the results object however you like:
# for item in results:
    # print(item)