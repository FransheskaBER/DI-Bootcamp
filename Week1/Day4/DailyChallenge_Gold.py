from datetime import date, datetime

# Daily challenge GOLD : Happy birthday

# What You will learn :
# Python Basics
# Conditionals

# Instructions
# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.
# Bonus : If they were born on a leap year, display two cakes !

bday_input = input("When is your birthday? Enter it in this format DD/MM/YYYY: ")

# convert string to datetime object
bday = datetime.strptime(bday_input, '%d/%m/%Y').date()

today = date.today()

age = today.year - bday.year

print(age)

digits = [] 

for n in str(age):
    digits.append(int(n))

print(digits)

# OR

first = int(str(age)[0])
second = int(str(age)[-1])

print(first)
print(second)

candles = "i" * (first + second)

print("       ___" + candles + "___")
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")



