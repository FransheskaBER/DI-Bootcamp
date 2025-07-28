# Daily Challenge: Dictionaries

# Challenge 1: Letter Index Dictionary

# Goal: Create a dictionary that stores the indices (number of the position) of each letter in a word provided by the user(input()).

# Key Python Topics:

# User input (input())
# Dictionaries
# Loops (for loop)
# Conditional statements (if, else)
# String manipulation
# Lists

# Instructions:
# 1. User Input:
# Ask the user to enter a word.
# Store the input word in a variable.

# 2. Creating the Dictionary:
# Iterate through each character of the input word using a loop.
# And check if the character is already a key in the dictionary.
# If it is, append the current index to the list associated with that key.
# If it is not, create a new key-value pair in the dictionary.
# Ensure that the characters (keys) are strings.
# Ensure that the indices (values) are stored in lists.

# 3. Expected Output:
# For the input “dodo”, the output should be: {"d": [0, 2], "o": [1, 3]}.
# For the input “froggy”, the output should be: {"f": [0], "r": [1], "o": [2], "g": [3, 4], "y": [5]}.
# For the input “grapes”, the output should be: {"g": [0], "r": [1], "a": [2], "p": [3], "e": [4], "s": [5]}.

user_input = input("Type your favorite word in English: ")
word = {}

for index, letter in enumerate(user_input): # go through each letter the user type, and remember the letter and its index
    if letter in word: # Have we seen this letter?
        word[letter].append(index) # If yes, add this new index to the list we have for that letter
    else:
        word[letter] = [index] # If not, add a new entry to the dictionary with the letter as key and the index as value

print(word)











# Challenge 2: Affordable Items

# Goal: Create a program that prints a list of items that can be purchased with a given amount of money.

# Key Python Topics:

# Dictionaries
# Loops (for loop)
# Conditional statements (if, else)
# String manipulation (replace())
# Type conversion (int())
# Lists
# Sorting (sorted())

# Instructions:
# 1. Store Data:
# You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign).
# You will also be given a string (wallet) representing the amount of money you have.

# 2. Data Cleaning:
# 3. Determining Affordable Items:

# 4. Sorting and Output:
# Sort the list of affordable items in alphabetical order.
# If the list is empty (no items can be afforded), return the string “Nothing”.
# Otherwise, return the sorted list.

# 5. Examples:
# Given:
items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
    }

new_items_purchase = {}
for item, price in items_purchase.items():
    clean_price = price.replace('$', '').replace(',', '')
    new_items_purchase[item] = int(clean_price)
print(new_items_purchase)


wallet = "$300"
new_wallet = int(wallet.replace("$", ""))
print(new_wallet)


can_purchase = []
for item, price in new_items_purchase.items():
    if price < new_wallet:
        can_purchase.append(item)

if can_purchase:
    sorted_can_purchase = sorted(can_purchase)
    print(f'You can only purchase these items: {sorted_can_purchase}')
else:
    print("You can't afford buying any item")
# The output should be: ["Bread", "Fertilizer", "Water"].


# Given:
# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
# wallet = "$100"
items_purchase = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
    }

new_items_purchase = {}
for item, price in items_purchase.items():
    clean_price = price.replace('$', '').replace(',', '')
    new_items_purchase[item] = int(clean_price)
print(new_items_purchase)


wallet = "$100"
new_wallet = int(wallet.replace("$", ""))
print(new_wallet)


can_purchase = []
for item, price in new_items_purchase.items():
    if price < new_wallet:
        can_purchase.append(item)

if can_purchase:
    sorted_can_purchase = sorted(can_purchase)
    print(f'You can only purchase these items: {sorted_can_purchase}')
else:
    print("You can't afford buying any item")
# The output should be: ["Apple", "Bananas", "Fan", "Honey", "Spoon"].




# Given:
# items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
# wallet = "$1"
items_purchase = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
    }

new_items_purchase = {}
for item, price in items_purchase.items():
    clean_price = price.replace('$', '').replace(',', '')
    new_items_purchase[item] = int(clean_price)
print(new_items_purchase)


wallet = "$1"
new_wallet = int(wallet.replace("$", ""))
print(new_wallet)


can_purchase = []
for item, price in new_items_purchase.items():
    if price < new_wallet:
        can_purchase.append(item)


if can_purchase:
    sorted_can_purchase = sorted(can_purchase)
    print(f'You can only purchase these items: {sorted_can_purchase}')
else:
    print("You can't afford buying any item")
# The output should be: "Nothing".







