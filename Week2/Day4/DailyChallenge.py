
# Daily challenge: Challenges
# Last Updated: April 30th, 2025

# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Python Basics
# String Manipulation
# Lists
# Sorting
# Functions




# Challenge 1: Sorting

# Instructions:
# Write a Python program that takes a single string of words as input, where the words are separated by commas (e.g., ‘apple,banana,cherry’). The program should output these words sorted in alphabetical order, with the sorted words also separated by commas.

# Step 1: Get Input
# Use the input() function to get a string of words from the user.
# The words will be separated by commas.

string = input("Write a list of your favorite fruits separated by commas: ")

# Step 2: Split the String
split_str = string.split(",")

# # Step 3: Sort the List
sorted_str = sorted(split_str)

# # Step 4: Join the Sorted List
joined_str = ",".join(sorted_str)

# # Step 5: Print the Result
# # Print the resulting comma-separated string.
print(joined_str)

# Expected Output: If the input is without,hello,bag,world, the output should be bag,hello,without,world.





# Challenge 2: Longest Word

# Instructions: Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple longest words, return the first one encountered. Characters like apostrophes, commas, and periods should be considered part of the word.

# Step 1: Define the Function
# Define a function that takes a string (the sentence) as a parameter.
# Step 2: Split the Sentence into Words
# Step 3: Initialize Variables
# Step 4: Iterate Through the Words
# Step 5: Compare Word Lengths
# Step 6: Return the Longest Word

def longest_sentence(sentence):
    words = sentence.split()
    current_longest_word = " "
    for word in words:
        if len(word) > len(current_longest_word):
            current_longest_word = word
    return current_longest_word

print(longest_sentence("Forgetfulness is by all means powerless!"))


# Expected Output:
# longest_word("Margaret's toy is a pretty doll.") should return "Margaret's".
# longest_word("A thing of beauty is a joy forever.") should return "forever.".
# longest_word("Forgetfulness is by all means powerless!") should return "Forgetfulness".


# Key Python Topics:

# Functions
# Strings
# .split() method
# Loops (for)
# Conditional statements (if)
# String length (len())