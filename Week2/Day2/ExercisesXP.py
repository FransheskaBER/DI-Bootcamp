# EXERCISES XP : FUNCTIONS

# 🌟 Exercise 1: What Are You Learning?
# Goal: Create a function that displays a message about what you’re learning.

# Key Python Topics:
# Functions (defining and calling)
# print() function

# Step 1: Define a Function
# Define a function named display_message().
# This function should not take any parameters.

# Step 2: Print a Message
# For example: “I am learning about functions in Python.”

# Step 3: Call the Function
# This will execute the code inside the function and print your message.

def display_message():
    '''Prints what you are learning'''
    print('I am learning about functions in Python')

display_message()
# Expected Output:
# I am learning about functions in Python.












# 🌟 Exercise 2: What’s Your Favorite Book?
# Goal: Create a function that displays a message about a favorite book.

# Key Python Topics:

# Functions with parameters
# String concatenation or f-strings
# Calling functions with arguments

# Step 1: Define a Function with a Parameter
# Define a function named favorite_book().
# This function should accept one parameter called title.

# Step 2: Print a Message with the Title
# The function needs to output a message like “One of my favorite books is <title>”.

# Step 3: Call the Function with an Argument
# Call the favorite_book() function and provide a book title as an argument.
# For example: favorite_book("Alice in Wonderland").

def favorite_book(title):
    '''Prints your favorite book'''
    print(f"My favorite book is {title} by Colleen Hoover.")

favorite_book('November 9')











# 🌟 Exercise 3: Some Geography
# Goal: Create a function that describes a city and its country.

# Key Python Topics:
# Functions with multiple parameters
# Default parameter values
# String formatting

# Step 1: Define a Function with Parameters ok
# Define a function named describe_city().
# This function should accept two parameters: city and country.
# Give the country parameter a default value, such as “Unknown”.

# Step 2: Print a Message
# Inside the function, set up the code to display a sentence like “ is in “.
# Replace <city> and <country> with the parameter values.

# Step 3: Call the Function
# Call the describe_city() function with different city and country combinations.
# Try calling it with and without providing the country argument to see the default value in action.
# Example: describe_city("Reykjavik", "Iceland") and describe_city("Paris").

def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

describe_city('Lima', 'Peru')
describe_city('Reykjavik')
describe_city(country= 'Israel', city = 'Jerusalem')

