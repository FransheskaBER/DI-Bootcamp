import random
import re

# Exercises XP Ninja

# What you will learn:
# Lists
# Tuples
# Loops

# Exercise 1: Formula
# Instructions
# Write a program that calculates and prints a value according to this given formula:

# Following are the fixed values of C and H:

# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180
# The output should be:
# 18,22,24

C = 50
H = 30

user_input = input('Enter a string of numbers separated by commas: ')

cleaned_numbers = [n.strip() for n in user_input.split(",")]

numbers = [int(n) for n in cleaned_numbers]
print(numbers)

results = []

for D in numbers:
    new_D = ((2 * C * D) / H) ** 0.5
    results.append(round(new_D))

print(results)    










# Exercise 2 : List of integers
# Instructions
# Given a list of 10 integers to analyze. For example:
    # [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
    # [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
    # [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
    # [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]


# 1. Store the list of numbers in a variable.
list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
list2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
list3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
list4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

# 2. Print the following information:
# a. The list of numbers – printed in a single line
combined_list = list1 + list2 + list3 + list4

for number in combined_list:
    print(number, end=' ')

# b. The list of numbers – sorted in descending order (largest to smallest)
sort_list = sorted(combined_list, reverse=True)
print(sort_list)

# c. The sum of all the numbers
sum_list = sum(combined_list)
print(sum_list)

# 3. A list containing the first and the last numbers.
new_list = [combined_list[0], combined_list[-1]]
print(new_list)

# 4. A list of all the numbers greater than 50.
big_numbers = []
for n in combined_list:
    if n > 50:
        big_numbers.append(n)
print(big_numbers) 

# 5. A list of all the numbers smaller than 10.
small_numbers = []
for n in combined_list:
    if n < 10:
        small_numbers.append(n)
print(small_numbers) 

# 6. A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
for n in combined_list:
    print(n ** 2, end=' ')

# 7. The numbers without any duplicates – also print how many numbers are in the new list.
no_duplicates = []

for n in combined_list:
    if n not in no_duplicates:
        no_duplicates.append(n)

print(no_duplicates)
print(len(no_duplicates))


# 8. The average of all the numbers.
average = sum_list / len(combined_list)
print(average)

# 9. The largest number.
print(max(combined_list))

# 10.The smallest number.
print(min(combined_list))

# 11. Bonus: Find the sum, average, largest and smallest number without using built in functions.
total = 0
for n in combined_list:
    total = total + n
print(f'The sum is: {total}')

count = 0
for n in combined_list:
    count += 1
average_n = total / count
print(f'The average is: {average_n}')

largest_number = 0
for n in combined_list:
    if n > largest_number:
        largest_number = n
print(f'The largest number is: {largest_number}')

smallest_number = 0
for n in combined_list:
    if n < smallest_number:
        smallest_number = n
print(f'The smallest number is: {smallest_number}')


# 12. Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100.
# Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
user_numbers = []

while True:
    user_n = int(input('Enter a number: '))
    user_numbers.append(user_n)
    if len(user_numbers) == 10:
        break
print(f'The list of your numbers is {user_numbers}')
    

# 13. Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
generated_numbers = []

for _ in range(10):
    generated_numbers.append(random.randint(-100, 100)) 
print(generated_numbers)

# 14. Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
random_count = random.randint(50, 100)
list_r_n = []
for _ in range(random_count):
    list_r_n.append(random.randint(-100, 100))
print(f'Generated this total number: {random_count}')
print(list_r_n)

# 15. Bonus: Will the code work when the number of random numbers is not equal to 10?





# Exercise 3: Working on a paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.

para = "Python is a high-level, interpreted, general-purpose programming language known for its readability and versatility. It emphasizes code readability with its use of significant indentation."
char = len(para)
sentences = len(para.split(". "))
words = re.split(r"[^a-zA-Z]+", para)
cleaned_words = []
for w in words:
    if w: # if w not empty
        cleaned_words.append(w)
count_words = len(cleaned_words)

unique_w = []
for w in cleaned_words:
    if w not in unique_w:
        unique_w.append(w)
unique_words = len(unique_w)

print(f'\nThe para has {char} characters\nThe para contains {sentences} sentences\nThe para contains {count_words} words\nThe para contains {unique_words} unique words.')

# Bonus: How many non-whitespace characters it contains.
count_ws = 0
for i in para:
    if i.isspace(): # if i is empty space or "\t", "\n"
        count_ws += 1
print(f'The number of whitespaces in the paragraph is: {count_ws}')

# Bonus: The average amount of words per sentence in the paragraph.
all_words = []
sentences_n = para.split(". ")
total_s = len(sentences_n)
# output 2

for s in sentences_n:
    words_n = re.split(r"[^a-zA-Z]+", s)
    words_n = [w for w in words_n if w]
    all_words.append(words_n)

print(all_words)

sentence1 = len(all_words[0])
sentence2 = len(all_words[1])

print(sentence1)
# ouput 16
print(sentence2)
# output 10

total_words = sentence1 + sentence2

average2 = total_words / total_s
print(f'The average words per senteces is {average2}')

# Bonus: the amount of non-unique words in the paragraph.
non_unique_w = []
for w in cleaned_words:
    if cleaned_words.count(w) > 1:
        if w not in non_unique_w:
            non_unique_w.append(w)

non_unique_words = len(non_unique_w)
print(f"The amount of non unique words is: {non_unique_words}")




# Exercise 4 : Frequency Of The Words
# Instructions
# Write a program that prints the frequency of the words from the input.
# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.

# Then, the output should be:
#     2:2
#     3.:1
#     3?:1
#     New:1
#     Python:5
#     Read:1
#     and:1
#     between:1
#     choosing:1
#     or:2
#     to:1

user_s = input("Enter your favorite sentence: ")

freq = {}

words = user_s.split()

for w in words:
    if w in freq:
        freq[w] +=1
    if w not in freq:
        freq[w] = 1

print(freq)
