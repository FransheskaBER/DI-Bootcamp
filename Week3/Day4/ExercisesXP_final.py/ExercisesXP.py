import string
import random
import datetime
from faker import Faker

# Exercises XP

"""🌟 Exercise 1: Currencies
Goal: Implement dunder methods for a Currency class to handle string representation, integer conversion, addition, and in-place addition.

Key Python Topics:
Dunder methods (__str__, __repr__, __int__, __add__, __iadd__)
Type checking (isinstance())
Raising exceptions (raise TypeError)"""

# Instructions:
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount > 1:
            return (f"{self.amount} {self.currency}s")
        elif self.amount == 1:
            return (f"{self.amount} {self.currency}")
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return (f"'{self.amount} {self.currency}'")
    
    def __add__(self, other):
        if isinstance (other, int):
            return self.amount + other
        elif isinstance (other, Currency):
            if self.currency != other.currency:
                return(f"TypeError: Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        
    def __iadd__(self, other):
        if isinstance(other, Currency):
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
# 5 dollars

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1) 
# '5 dollars'

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>"""












"""🌟 Exercise 2: Import
Goal: Create a module with a function and import it into another file.

Instructions:
Create a func.py file with a function that sums two numbers and prints the result. Then, import and call the function from exercise_one.py.

Key Python Topics:
Modules (creating and importing)
Functions

Step 1: Create func.py
Create a file named func.py.
Define a function inside that file that takes two numbers as arguments, sums them, and prints the result."""

def add_math(a, b):
    print(a+b)

add_math(30, 30)

"""Step 2: Create exercise_two.py
Create a file named exercise_two.py.
Import the function from func.py using one of the import syntaxes provided in the instructions.
Call the imported function with two numbers.




🌟 Exercise 3: String module
Goal: Generate a random string of length 5 using the string module.

Instructions:
Use the string module to generate a random string of length 5, consisting of uppercase and lowercase letters only.

Key Python Topics:
string module
random module
String concatenation

Step 1: Import the string and random modules
Import the string and random modules.
Step 2: Create a string of all letters
Read about the strings methods HERE to find the best methods for this step"""

lower_letters = string.ascii_lowercase
print(lower_letters)

upper_letters = string.ascii_uppercase
print(upper_letters)

numbers_from_0__to_9 = string.digits
print(numbers_from_0__to_9)

"""Step 3: Generate a random string
Use a loop to select 5 random characters from the combined string.
Concatenate the characters to form the random string."""

random_5_num = random.sample(lower_letters, 5)
print(random_5_num)
print("".join(random_5_num)) # joined as a string









"""🌟 Exercise 4: Current Date
Goal: Create a function that displays the current date.

Key Python Topics:
datetime module

Instructions: Use the datetime module to create a function that displays the current date.

Step 1: Import the datetime module
Step 2: Get the current date
Step 3: Display the date"""

current_date = datetime.date.today()
print(current_date)










"""🌟 Exercise 5: Amount of time left until January 1st
Goal: Create a function that displays the amount of time left until January 1st.

Key Python Topics:
datetime module
Time difference calculations

Instructions:
Use the datetime module to calculate and display the time left until January 1st.
more info about this module HERE

Step 1: Import the datetime module
Step 2: Get the current date and time
Step 3: Create a datetime object for January 1st of the next year
Step 4: Calculate the time difference
Step 5: Display the time difference"""


current_date_time = datetime.datetime.now()
print(current_date_time)

next_year = current_date.year + 1
print(next_year)

new_year_day = datetime.date(next_year, 1, 1)
print(new_year_day)

difference = new_year_day - current_date
print(difference)
print(difference.days) # to print just the days without the time




"""🌟 Exercise 6: Birthday and minutes

Key Python Topics:
datetime module
datetime.datetime.strptime() (parsing dates)
Time difference calculations
.total_seconds() method

Instructions:
Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating
how many minutes the user lived in his life."""

def lifetime(birthday):
    current_date = datetime.datetime.today()
    parsed_date = datetime.datetime.strptime(birthday, "%Y-%m-%d")
    time_alive = current_date - parsed_date
    print(f"You have lived {time_alive.total_seconds()} seconds") # to print it in seconds

lifetime("1992-6-20")









"""🌟 Exercise 7: Faker Module
Goal: Use the faker module to generate fake user data and store it in a list of dictionaries.
Read more about this module HERE

Key Python Topics:
faker module
Dictionaries
Lists
Loops

Instructions:
Install the faker module and use it to create a list of dictionaries, where each dictionary represents a user with fake data.

Step 1: Install the faker module
Step 2: Import the faker module
Step 3: Create an empty list of users
Step 4: Create a function to add users
Create a function that takes the number of users to generate as an argument.
Inside the function, use a loop to generate the specified number of users.
For each user, create a dictionary with the keys name, address, and language_code.
Use the faker instance to generate fake data for each key:
name: faker.name()
address: faker.address()
language_code: faker.language_code()
Append the user dictionary to the users list.
Step 5: Call the function and print the users list """

fake = Faker()

def add_users(total_users):
    users = []
    for user in range(total_users):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
            }
        users.append(user)
    print(users)

add_users(2)





