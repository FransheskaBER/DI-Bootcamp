# Challenges #2
# Last Updated: September 13th, 2024

# What you will learn
# Conditionals
# Loops
# Functions


# Exercise 1
# Instructions
# Draw the following pattern using for loops:
#   *
#  ***
# *****
rows = 3
for i in range(1, rows + 1): # i = 1, 2, 3
    spaces = " " * (rows - i) # decreasing spaces
    stars = "*" * (2 * i - 1)
    print(spaces + stars) 

# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****
rows = 5
for i in range(1, rows + 1): # 1, 2, 3, 4, 5 
    spaces = " " * (rows - i)
    stars = "*" * i
    print(spaces + stars)



# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *
rows2 = 5
# top half
for i in range(1, rows2 + 1): # 1, 2, 3, 4, 5
    print("*" * i)
# bottom half
for i in range(rows2, 0, -1): # range(start, stop, step) - count down from 5 to 1
    spaces1 = " " * (rows2 - i)
    stars1 = "*" * i
    print(spaces1 + stars1)
    


# Exercise 2
# Instructions
# Analyse this code before executing it. Write some commnts next to each line.
# Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.


#  BIG PIC: 
# This code sorts the list from smallest to largest. It’s a version of selection sort:
# scan the rest of the list to find something smaller, then swap.

my_list = [2, 24, 12, 354, 233] #Numbers we want to sort

for i in range(len(my_list) - 1): #Loop ove positions > len(my_list) is 5, so range(5 - 1) = range(4) → i = 0, 1, 2, 3
    smallest = i #Start by assuming the current position is the index of the smallest value.
    for j in range( i + 1, len(my_list)): # j = scanner that looks at items to the right of "i" 
    #Look to the RIGHT of i.
    # If i = 0, j = 1,2,3,4 (5 is not inclusive)
    # If i = 1, j = 2,3,4
    # If i = 2, j = 3,4
    # If i = 3, j = 4
        if(my_list[j] < my_list[minimum]):
        # Compare the value at j with the value at 'minimum'.
        # If the value at j is smaller, we found a new minimum index.
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] #swap two numbers in the list 
            # If the smallest we know about is not already at position i,
            # swap the value at i with the value at 'minimum'.
            # This moves the smaller value toward the front immediately.

print(my_list)
# output: [2, 12, 24, 233, 354]