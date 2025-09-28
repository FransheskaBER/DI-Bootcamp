from collections import Counter
import random
# Daily challenge : Advanced Algorithm
# Last Updated: September 13th, 2024

# What You will learn :
# Python Basics
# Conditionals
# Loops
# Functions


# Instructions
# Here is a python code that generates a list of 20000 random numbers, called list_of_numbers, and a target number.

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728


# Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number

# For example
# 1000 and 2728 sums to the target_number 3728
# 1864 and 1864 sums to the target_number 3728

def find_pairs(numsList, target):
    seenNumber = Counter() #Counts of numbers we have passed and seen so far
    pairs = [] #this is going to be a list of a and b tuples (no duplicates)

    for x in numsList: #Scan each number once, left to right
        y = target - x #The pair we need
        if seenNumber[y] > 0: #If we've seen a matching "y" that is  not used, use it and try to pair it with x
            pairs.append((x, y)) #Record the pair
            seenNumber[y] -= 1 #"use up" one x we had seen before
        else:
            seenNumber[x] += 1 #Otherwise remember we've seen x now (for future matches)
    return pairs

print(find_pairs(list_of_numbers, target_number))