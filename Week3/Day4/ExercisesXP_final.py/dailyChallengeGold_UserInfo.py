# Daily Challenge GOLD - User Info
# Last Updated: September 13th, 2024

# What You will learn :
# OOP


# Instruction: Information from the user
# Harder Daily Challenge
# Notice : solve this exercise using a lambda function.

# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.
# If the following tuples are given as input to the script:

# Tom,19,80
# John,20,90
# Jony,17,91
# Jony,17,93
# Json,21,85
# Then, the output of the program should be:
# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
# Note : The lambda function will not print but sort

# Step 1: empty list
users = []

# Step 2: loop 5 times
for _ in range(5):
    raw = input("Enter Name, Age, Score separated by commas: ")
    name, age, score = raw.split(",")   # unpack
    users.append((name, age, score))    # store as tuple

# Step 3: sort using lambda
sorted_users = sorted(users, key=lambda x: (x[0], int(x[1]), int(x[2])))
# x[0] → name
# int(x[1]) → age
# int(x[2]) → score

# Step 4: print result
print(sorted_users)
