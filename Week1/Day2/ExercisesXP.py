# Exercise 1 : Hello World
# Instructions
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

#\n is new line in pyhton

print("Hellow World\nHellow World\nHellow World\nHellow World\nHellow World")

# Exercise 2 : Some Math
# Instructions
# Write code that calculates the result of:

# (99^3)*8 (meaning 99 to the power of 3, times 8).

math_operation =  (99 ** 3) * 8
print(math_operation)

print((99 ** 3) * 8)

# Exercise 3 : What is the output ?
# Instructions
# Predict the output of the following code snippets:

# >>> 5 < 3
# >>> 3 == 3
# >>> 3 == "3"
# >>> "3" > 3
# >>> "Hello" == "hello"

print(False)
print(True)
print("Can't compare string to number")
print(False)

# Exercise 4 : Your computer brand
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable, print a sentence that states the following:
# "I have a <computer_brand> computer."

computer_brand = "MacBook Pro"
print(f"I have a {computer_brand} computer")

# Exercise 5 : Your information
# Instructions
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
# Have your code print the info message.
# Run your code.

name = "Fransheska"
age = "33"
shoe_size = "37"
info = "My name is " + name + " and I'm " + age + " and my show size is " + shoe_size + " and I love hiking."
print(info)

# Exercise 6 : A & B
# Instructions
# Create two variables, a and b.
# Each variable’s value should be a number.
# If a is bigger than b, have your code print "Hello World".

a = 1
b = 2

if a > b:
    print("hello world!")
elif a < b:
    print("no hello")

# Exercise 7 : Odd or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.

number = int(input("Enter a number: "))

if number % 2 == 0:
    print("your number is EVEN")
else:
    print("your number is ODD")

# Exercise 8 : What’s your name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.

user_name = input("What's your name? ")

if user_name == "Fransheska":
    print("You have such a beautiful name!")
else:
    print("Your name is not so beautiful")

# Exercise 9 : Tall enough to ride a roller coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145 cm, print a message that states they are tall enough to ride.
# If they are not tall enough, print a message that says they need to grow some more to ride.

user_height = input("how tall are you? ")

if int(user_height) >= 145:
    print("You are tall enough to ride")
else:
    print("you need to grow some more to ride")
 

