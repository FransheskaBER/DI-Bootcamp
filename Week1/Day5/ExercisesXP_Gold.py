# Exercises XP Gold

# What we will learn:
# Data Type
# Conditionals
# Loops
# Dictionaries

# Exercise 1: Birthday Look-up
# Instructions
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the
# value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.
birthdays = {
    "Fransheska": "1992/06/20",
    "Yotam": "1989/03/29",
    "Yuriko": "1988/08/23",
    "Roxana": "1960/09/27",
    "Verushka": "1982/06/15"
}

print("Welcome")
print("“You can look up the birthdays of the people in the list!")
user_input = input("Enter the name of the person you are interested in: ")

if user_input in birthdays:
    print(f"The birthday of {user_input} is {birthdays[user_input]}")
else:
    print("Sorry, we don't know the birthday of that person")




# Exercise 2: Birthdays Advanced
# Instructions
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s
# name>”)
for name in birthdays.keys():
    print(name)




# Exercise 3: Add Your Own Birthday
# Instructions
# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is
# found and displayed.
new_bday = input("Enter your birthday in this format YYYY/MM/DD: ")
new_name = input("Enter a name: ")

# Syntax to add a new entry to a dict: dictionary[key] = value
if new_name in birthdays:
    print(f"The birthday of {new_name} is {birthdays[new_name]}")
else:
    birthdays[new_name] = new_bday
    print(birthdays)

# Exercise 4: Fruit Shop
# Instructions
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
# Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.
for name, price in items.items():
    print(f"The fruit {name} costs {price}.")

# Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.
items1 = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

print(items1["apple"]["price"])
# 2
total_list = {}
for fruit, value in items1.items():
    total_list[fruit] = value["price"] * value["stock"]

print(total_list)
print(f"To buy all the fruits in stock, it will cost {sum(total_list.values())}")

    




