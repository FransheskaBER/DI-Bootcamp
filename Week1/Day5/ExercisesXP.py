# EXERCISES XP

# 🌟 Exercise 1: Converting Lists into Dictionaries
# Key Python Topics:

# Creating dictionaries
# Zip function or dictionary comprehension

# Instructions

# You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.

# Lists:

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

zip(keys, values)

new_dictionary = dict(zip(keys, values))

print(new_dictionary)
print(type(new_dictionary))







# 🌟 Exercise 2: Cinemax #2
# Key Python Topics:

# Looping through dictionaries
# Conditionals
# Calculations

# Instructions

# Write a program that calculates the total cost of movie tickets for a family based on their ages.

# Family members’ ages are stored in a dictionary.
# The ticket pricing rules are as follows:
# Under 3 years old: Free
# 3 to 12 years old: $10
# Over 12 years old: $15

# Loop through the family dictionary to calculate the total cost.
# Print the ticket price for each family member.
# Print the total cost at the end.

# Family Data:
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

for key, value in family.items():
    if value < 3:
        price = 0
        print(f"The ticket for {key} is free")
    elif 3 <= value <= 12:
        price = 10
        print(f"The ticket for {key} costs $10")
    else:
        price = 15
        print(f"The ticket for {key} costs $15")
    total_cost += price

print(f"The total ticket cost for all family members is {total_cost}")

# Bonus:
# Allow the user to input family members’ names and ages, then calculate the total ticket cost.
total_cost = 0

while True:
    name = input("What's the name of the person who wants to buy a movie ticket (type 'done' to finish)? ")
    if name == 'done':
        break
    age = int(input(f"What's the age of {name}? "))
    if age < 3:
        price = 0
        print(f"The ticket for {name} is free")
    elif 3 <= age <= 12:
        price = 10
        print(f"The ticket for {name} costs $10")
    else:
        price = 15
        print(f"The ticket for {name} costs $15")
    total_cost += price

print(f"The total ticket cost for all family members is {total_cost}")















# 🌟 Exercise 3: Zara
# Key Python Topics:

# Creating dictionaries
# Accessing and modifying dictionary elements
# Dictionary methods like .pop() and .update()

# Instructions

# Create and manipulate a dictionary that contains information about the Zara brand.
# Create a dictionary called brand with the provided data.
# Modify and access the dictionary as follows:
# Change the value of number_stores to 2.
# Print a sentence describing Zara’s clients using the type_of_clothes key.
# Add a new key country_creation with the value Spain.
# Check if international_competitors exists and, if so, add “Desigual” to the list.
# Delete the creation_date key.
# Print the last item in international_competitors.
# Print the major colors in the US.
# Print the number of keys in the dictionary.
# Print all keys of the dictionary.

zara_brand = {
    'name': 'Zara',
    'creation_date': '1975',
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': { 
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}

zara_brand['number_stores'] = 2
print(zara_brand['number_stores'])

clients_list = zara_brand['type_of_clothes']
print(f"Most of Zara's clients enjoy shopping across all four sections: {clients_list}")

#to print just the strings without () and '' use .join() - The [:] means to exclude the last index of the list "-1"
clients = ', '.join(clients_list[:-1]) + ' and ' + clients_list[-1] + '.'
print(f"Most of Zara's clients enjoy shopping across all four sections: {clients}")

zara_brand['country_creation'] = 'Spain'
print(zara_brand)

if 'international_competitors' in zara_brand:
    zara_brand['international_competitors'].append('Desigual') #.append for LISTS 
print(zara_brand)

# If you don't know whether the key holds a list, set, or tuple, use ISISTANCE(x, list) that checks whether a value is a certain type

# key = zara_brand.get('international_competitors')
# print(key) # if exists, it will print the list. Otherwise, it will print "none"
# if isinstance(key, list):
#     key.append('Desigual')
# elif isinstance(key, set):
#     key.add('Desigual')
# elif isinstance(key, tuple):
#     print("this key is a tuple - cannot add values")
# print(zara_brand)

del(zara_brand['creation_date'])
print(zara_brand)

print(zara_brand['international_competitors'][-1])

print(zara_brand['major_color']['US'])

print(len(zara_brand))

for key, value in zara_brand.items():
    print(key)

# Bonus:
# Create another dictionary called more_on_zara with creation_date and number_stores. Merge this dictionary with the original brand dictionary and print the result.

more_on_zara = {
    'creation_date': '1975',
    'number_stores': 2
}
print(more_on_zara)

zara_brand.update(more_on_zara)
print(zara_brand)
print(len(zara_brand))












# 🌟 Exercise 4: Disney Characters
# Key Python Topics:

# Looping with indexes
# Dictionary creation
# Sorting

# Instructions

# You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:

# Character List:
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Expected Results:
# 1. Create a dictionary that maps characters to their indices:
dictionary1 = {}

for index, user in enumerate(users): #go through each character and its index in the list, and add a new item to the dic1 where user is the key and index is the value
    dictionary1[user] = index

print(dictionary1)

# 2. Create a dictionary that maps indices to characters:
dictionary2 = {}

for index, user in enumerate(users): #go through each character and its index in the list, and add a new item to the dic1 where index is the key and user is the value
    dictionary2[index] = user

print(dictionary2)

# 3. Create a dictionary where characters are sorted alphabetically and mapped to their indices:
sorted_users = sorted(users)
print(sorted_users)

dictionary3 = {}

for index, user in enumerate(sorted_users):
    dictionary3[user] = index

print(dictionary3)
