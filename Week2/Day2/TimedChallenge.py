# Timed Challenge #1

# Count occurence
# Write a program which takes a string and a character as an input, and finds out the number of occurrences the character has in the string.

def count_occurence(string, char):
    count = 0
    for letter in string:
        if letter == char:
            count += 1
    print(count)

count_occurence("programing is cool", "o")
count_occurence("This is a great example", "y")
    

# String: Programming is cool!
# Character: o
# 3

# String: This is a great example
# Character: y
# 0