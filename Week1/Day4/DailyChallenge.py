# DAILY CHALLENGE : LISTS AND STRINGS

# Challenge 1: Multiples of a Number

# Key Python Topics:
# input() function
# Loops (for or while)
# Lists and appending items
# Basic arithmetic (multiplication)

# Instructions:
# 1. Ask the user for two inputs:

# A number (integer).
# A length (integer).
# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.

# Example 1:

# Input:

# number: 7
# length: 5
# Output:

# [7, 14, 21, 28, 35]

# Example 2:

# Input:
# number: 12
# length: 10
# Output:

# [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# Example 3:

# Input:
# number: 17
# length: 6
# Output:
# [17, 34, 51, 68, 85, 102]

number = int(input("Enter a number: ")) #first input
lenght = int(input("Enter another number for the lenght: ")) #second input

user_numbers = [] #empty list

for i in range(1, lenght + 1): # I want you to go through a list of numbers "i", starting from "1," up to whatever "lenght" the user gave me plus 1 (in index if we say range 1, 4 = means 1, 2, 3)
    user_numbers.append(number * i) # and then each time, multiply that "number" the user gave you by the current counter number the loop is running and add it to the list ".append"

# for = start the loop
# i = it is just a number that changes each time the loop runs (a little counter)
# range(1, lenght + 1) = start at 1 and stop before lenght + 1 so if user gave you number 5 you want the loop to stop in 6, because in index we exclude the last number so it will loop from 1 to 5.

print(user_numbers)







# Challenge 2: Remove Consecutive Duplicate Letters

# Key Python Topics:
# input() function
# Strings and string manipulation
# Loops (for or while)
# Conditional statements (if)

# Instructions:
# 1. Ask the user for a string.
# 2. Write a program that processes the string to remove consecutive duplicate letters.

# The new string should only contain unique consecutive letters.
# For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
# 3. The program should print the modified string.

# Example 1:

# Input:
# user’s word: "ppoeemm"
# Output:
# "poem"

# Example 2:

# Input:
# user’s word: "wiiiinnnnd"
# Output:
# "wind"

# Example 3:

# Input:
# user’s word: "ttiiitllleeee"
# Output:
# "title"

# Example 4:

# Input:
# user’s word: "cccccaaarrrbbonnnnn"
# Output:
# "carbon"

# Notes:
# The final string will not include any consecutive duplicates, but non-consecutive duplicates are allowed.
# Example: In "carbon", the two ‘r’s are allowed because they are not consecutive.

final_word = "" #empty string

user_word = input("Enter a word with repeated letters: ") #input function


for letters in range(len(user_word)): #loop through each letter in the lenght of the word given
    if letters == 0 or user_word[letters] != user_word[letters - 1]: #if this is the first letter in the word or the current letter is different from the letter before it, then
        final_word += user_word[letters] # add it to the final word

print(final_word)
