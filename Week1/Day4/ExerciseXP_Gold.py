import random

#  EXERCISE XP - GOLD

# Exercise 1: Concatenate lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

list1 = [1, 2, 3]
list2 = [4, 5, 6]

list1.extend(list2)
print(list1)


# Exercise 2: Range of numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for i in range(1500, 2501):
    if i % 5 == 0 and i % 7 == 0:
        print(i) 


# Exercise 3: Check the index
# Instructions
# Using this variable
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

user_input = input("What's your name? ")

if user_input in names:
    print(names.index(user_input)) # to find the index, call .index()
elif user_input not in names:
    print('Your name is not in the list')


# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.

# Test Data
# Input the 1st number: 25
# Input the 2nd number: 78
# Input the 3rd number: 87

# The greatest number is: 87

num1 = int(input("Input the first number: "))
num2 = int(input("Input the second number: "))
num3 = int(input("Input the third number: "))

biggest_number = num1

if num2 > biggest_number:
    biggest_number = num2
if num3 > biggest_number:
    biggest_number = num3
print(f'The greates number is {biggest_number}')


# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

letters = 'abcdefghijklmnopqrstuvwxyz'
vowels = ['a', 'e', 'i', 'o', 'u']

for i in letters:
    if i in vowels:
        print(f'The letter {i} is a vowel')
    else:
        print(f'The letter {i} is a consonant')



# Exercise 6: Words and letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

user_words = input("Enter 7 of your favorite words separated by commas: ")

# split once, strip spaces, no nested lists
words = [w.strip() for w in user_words.split(",")]

user_letter = input("Enter your favorite letter or character: ")

for word in words:
    if user_letter in word:
        print(f"The letter {user_letter} is at index {word.index(user_letter)} in '{word}'")
    else:
        print(f"Your favorite letter {user_letter} does not match your word '{word}'")



    




# Exercise 7: Min, Max, Sum
# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million.
# Use the sum() function to see how quickly Python can add a million numbers.

numbers_list = list(range(1, 1000001))

min_number = min(numbers_list)

max_number = max(numbers_list)

sum_total = sum(numbers_list)

print(f'Minimum number: {min_number}')
print(f'Maximum number: {max_number}')
print(f'The total sum: {sum_total}')


# Exercise 8 : List and Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.

# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

input_numbers = input('Enter a sequence of numbers separately by commas not spaces: ')

cleaned = input_numbers.split(',')
new_list = list(cleaned)
new_tuple = tuple(cleaned)

print(new_list)
print(new_tuple)

# Exercise 9 : Random number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

secret = random.randint(1, 9)
while True:
    guess = input('Enter a number form 1 to 9: ')
    if guess == "quit":
        break
    if secret == int(guess):
        print("You have guessed the secret number. Enter quit to exit.")
    else:
        print("You didn't guess the random number. Try next time.")

