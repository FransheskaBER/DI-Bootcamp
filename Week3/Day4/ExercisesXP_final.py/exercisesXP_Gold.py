# Exercises XP Gold
# Last Updated: September 13th, 2024

# What you will learn:
# Modules


# Exercise 1 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is.
# (Example: the next holiday is New Years’ Eve in 30 days).
# Hint: Use a module to find the datetime and name of the upcoming holiday.

import datetime
import holidays

def upcoming_holidays(country="US"):
    today = datetime.date.today()
    print(f"Today is: {today}")

    # Let's load all holidays for this year 2025
    US_holidays = holidays.country_holidays(country, years=today.year)
    
    # Find the next holiday date and name
    next_holiday_date = None
    next_holiday_name = None

    for date, name in sorted(US_holidays.items()):
        if date > today:
            next_holiday_date = date
            next_holiday_name = name
            break
    
    # calculate time difference
    delta = next_holiday_date - today

    print(f"The next holiday is {next_holiday_name} on {next_holiday_date}, in {delta.days} days")

upcoming_holidays("US")
upcoming_holidays("IS")
upcoming_holidays("IL")




# Exercise 2 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on all those planets :

# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Example : if someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years

# 1 earth year = 31,557,600 seconds
# So if someone is 1,000,000,000 seconds old, divide by 31,557,600 → about 31.69 Earth years.

# Each planet’s year is measured in Earth years:
# Mercury = 0.2408467 Earth years
# Venus = 0.61519726 Earth years

# So the trick:
# First, get the person’s age in Earth years.
# Then, divide that by the planet’s orbital period (in Earth years).

# Example for Mercury:
# Earth years = 31.69.
# Divide by 0.2408467 → about 131.57 Mercury years.

earth_year_seconds = 31557600
age_in_seconds = 1000000000

age_on_earth = age_in_seconds / earth_year_seconds
print(age_on_earth)

age_on_mercury = age_in_seconds / (earth_year_seconds * 0.2408467)
print(age_on_mercury)

EARTH_YEAR_SECONDS = 31557600

ORBITAL_PERIODS = {
    "Earth": 1.0,
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132,
}

def age_on_planets(age_in_seconds, planet):
    period = ORBITAL_PERIODS[planet]
    return age_in_seconds / (EARTH_YEAR_SECONDS * period)

print(age_on_planets(1000000000, "Saturn"))
# 1.0760876124018737





# Exercise 3 : Regular Expression #1
# Instructions
# Hint: Use the RegEx (module)
# Use the regular expression module to extract numbers from a string.
# Example
# return_numbers('k5k3q2g5z6x9bn') 
# // Excepted output : 532569

import re

def return_numbers(string):
    numbers = re.findall(r"\d", string)
    return "".join(numbers)

print(return_numbers('k5k3q2g5z6x9bn'))
# 532569






# Exercise 4 : Regular Expression #2
# Instructions
# Hint: Use the RegEx (module)
# Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
# The name should contain only letters.
# The name should contain only one space.
# The first letter of each name should be upper cased.

def name_validation():
    user_name = input("Enter your full name: ").strip()
    pattern = r"^[A-Z][a-z]+ [A-Z][a-z]+$"
    if re.match(pattern, user_name):
        print("Valid name")
    else:
        print("Invalid name")

name_validation()




# Exercise 5: Python Password Generator
# Instructions
# Create a Python program that will generate a good password for you.

# Program flow:
# Ask the user to type in the number of characters that the password should have (password length) – between 6 and 30 characters.
# Validate the input. Make sure the user is inputing a number between 6 to 30. Create a loop which will continue to ask the user for an input until they enter a valid one.

# Generate a password with the required length.
# Print the password with a user-friendly message which reminds the user to keep the password in a safe place!

# Rules for the validity of the password
# Each password should contain:
# At least 1 digit (0-9)
# At least 1 lower-case character (a-z)
# At least 1 upper-case character (A-Z)
# At least 1 special character (eg. !, @, #, $, %, ^, _, …)
# Once there is at least 1 of each, the rest of the password should be composed of more characters from the options presented above.

# Create a test function first!
# Do the following steps 100 times, with different password lengths:
# Generate a password.
# Test the password to ensure that:
# it fulfills all the requirements above (eg. it has at least one digit, etc.)
# it has the specified length.
import string
import random


def generate_password(length):
    # required characters
    one_digit = random.choice(string.digits)
    one_lower = random.choice(string.ascii_lowercase)
    one_upper = random.choice(string.ascii_uppercase)
    one_special = random.choice(string.punctuation)

    all_characters = string.digits + string.ascii_lowercase + string.ascii_uppercase + string.punctuation
    last_characters = [random.choice(all_characters) for _ in range(length - 4)]

    # Combine and shuffle
    password_list = [one_digit, one_lower, one_upper, one_special] + last_characters
    random.shuffle(password_list)
    final_password = "".join(password_list)

    print(f"Your secure password is: {final_password}")
    print("⚠️ Remember to store it in a safe place!")

def ask_password_lenght():
    while True:
        try:
            lenght = int(input("Enter the number of characters that the password should have: "))
            if 6 <= lenght <=30:
                generate_password(lenght)
                break
            else:
                print("Must be between 6 and 30.")
        except ValueError:
            print("please enter a number")

ask_password_lenght()

