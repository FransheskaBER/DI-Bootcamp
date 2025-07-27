# 🌟 Exercise 1: Favorite Numbers
# Key Python Topics:

# Sets
# Adding/removing items in a set
# Set concatenation (using union)


# Instructions:

# Create a set called my_fav_numbers and populate it with your favorite numbers.
my_fav_numbers = {222, 555, 666, 100}
print(my_fav_numbers)

# Add two new numbers to the set.
my_fav_numbers.add(999)
my_fav_numbers.add(333)
print(my_fav_numbers)

# Remove the last number you added to the set.
my_fav_numbers.remove(333)
print(my_fav_numbers)

# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
friend_fav_numbers = {12, 51, 19, 21, 17}

# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Note: Sets are unordered collections, so ensure no duplicate numbers are added.
unique_fav_numbers1 = my_fav_numbers.difference(friend_fav_numbers)
print(unique_fav_numbers1)

unique_fav_numbers2 = friend_fav_numbers.difference(my_fav_numbers)
print(unique_fav_numbers2)






# 🌟 Exercise 2: Tuple
# Key Python Topics:

# Tuples (immutability)


# Instructions:

# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

time = (14, 30) #14:30
print(time)

temporary_list = list(time)
print(type(temporary_list))

temporary_list.extend([15, 30]) #15:30
print(temporary_list)

time = tuple(temporary_list)
print(type(time))
print(time)






# 🌟 Exercise 3: List Manipulation
# Key Python Topics:

# Lists
# List methods: append, remove, insert, count, clear


# Instructions:

# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)

# Remove "Banana" from the list.
basket.remove("Banana")
print(basket)

# Remove "Blueberries" from the list.
basket.remove("Blueberries")
print(basket)

# Add "Kiwi" to the end of the list.
basket.append("Kiwi")
print(basket)

# Add "Apples" to the beginning of the list.
basket.insert(0, "Apples")
print(basket)

# Count how many times "Apples" appear in the list.
print(basket.count("Apples"))

# Empty the list.
del basket[0:4] # Use del to remove more than one item at the same time.
print(basket)

# Print the final state of the list.
print(basket)






# 🌟 Exercise 4: Floats
# Key Python Topics:

# Lists
# Floats and integers
# Range generation


# Instructions:

# Recap: What is a float? What’s the difference between a float and an integer?
#  A float is a decimal number, and an integer is a whole number (positive or negative, even or odd).

# Create a list containing the following sequence of mixed floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?
kilograms = []
numbers = 1.5

while numbers <= 5:
    if numbers.is_integer():
        kilograms.append(int(numbers)) #add it to the list as an integer
    else:
        kilograms.append(float(numbers)) #add it to the list as a float
    numbers += 0.5

print(kilograms)
print(type(kilograms))
print(type(kilograms[0])) #use index
print(type(kilograms[1]))






# 🌟 Exercise 5: For Loop
# Key Python Topics:

# Loops (for)
# Range and indexing


# Instructions:

# Write a for loop to print all numbers from 1 to 20, inclusive.
for numbers in range(1, 21):
    print(numbers)

# Write another for loop that prints every number from 1 to 20 where the index is even.
numbers = list(range(1, 21))

for even_index, number in enumerate(numbers): # enumerate() keeps tracks of the position (index) of each item
    if even_index % 2 == 0:
        print(f"The number {number} has an even index which is {even_index}")






# 🌟 Exercise 6: While Loop
# Key Python Topics:

# Loops (while)
# Conditionals


# Instructions:

# Write a while loop that keeps asking the user to enter their name.
# Stop the loop if the user’s input is your name.
entered_name = True

while entered_name:
    user_name = input("What's your name? ")
    if user_name == "Fransheska":
        print("We have the same name!")
        break
    else:
        print(f"Nice to meet you {user_name}")






# 🌟 Exercise 7: Favorite Fruits
# Key Python Topics:

# Input/output
# Strings and lists
# Conditionals


# Instructions:

# Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
fruits = input("Enter your favorite fruits, separated by commas: ")

# Store these fruits in a list.
user_fav_fruits = [fruits] #with this line of code, whatever the user enters will be a long string, one item in the whole list. To store every fruit as an item in the list use:
user_fav_fruits = [fruit.strip() for fruit in fruits.split(",")]
print(user_fav_fruits) 

# Ask the user to input the name of any fruit.
secret_fruit = input("Write the name of any fruit: ")

# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"

if secret_fruit in user_fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")






# 🌟 Exercise 8: Pizza Toppings
# Key Python Topics:

# Loops
# Lists
# String formatting


# Instructions:

# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.

entered_pizza_topping = True
user_toppings = []

while entered_pizza_topping:
    topping = input("Enter your favorite pizza topping, write one topping only one by one or type 'quit': ")
    if topping == "quit":
        break
    else:
        print(f"Adding {topping} to your pizza")
        user_toppings.append(topping)

print(f"You pizza toppings are {user_toppings}")

pizza_base_price = 10
topping_price = 2.50

total_price = pizza_base_price + (len(user_toppings) * topping_price)
print(f"The total price for your pizza is ${total_price}")






# 🌟 Exercise 9: Cinemax Tickets
# Key Python Topics:

# Conditionals
# Lists
# Loops


# Instructions:

# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.

total_ticket_cost = 0

people_want_to_buy_tickets = int(input("How many people want to buy tickets? "))

for position in range(people_want_to_buy_tickets):
    age = int(input(f"Enter the age of the person number {position + 1}: "))
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    total_ticket_cost += price

print(f"The total price for your tickets is: ${total_ticket_cost}")






# Bonus:

# Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
# Write a program to:
# Ask for each person’s age.
# Remove anyone who isn’t allowed to watch.
# Print the final list of attendees.
want_to_watch_the_movie = int(input("How many people want to watch this restricted movie? "))
ages = []

for position in range(want_to_watch_the_movie):
    age = int(input(f"Enter the age of the person number {position + 1}: "))
    if 16 <= age <= 21:
        print("This person is allowed to watch the movie")
        ages.append(age)
    else:
        print("This person is not allowed to watch the movie")

print(f"Only {len(ages)} people can watch the movie")
print(f"The approved ages are: ", ages)






# 🌟 Exercise 10: Sandwich Orders
# Key Python Topics:

# Lists
# Loops (while)


# Instructions:

# Using the list:
sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]

# The deli has run out of “Pastrami”, so use a loop to remove all instances of “Pastrami” from the list.
while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")

# Prepare each sandwich, one by one, and move them to a list called finished_sandwiches.
# Print a message for each sandwich made, such as: "I made your Tuna sandwich."
finished_sandwiches = []

for sandwich in sandwich_orders:
    print(f"I made you a {sandwich} sandwich")
    finished_sandwiches.append(sandwich)
    
# Print the final list of all finished sandwiches.
print("\nThese are all the sandwiches we have prepared for you:")
for sandwich in finished_sandwiches:
    print(f" - {sandwich}")