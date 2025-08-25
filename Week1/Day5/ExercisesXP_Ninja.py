# Exercises XP Ninja
# Last Updated: September 13th, 2024

# What we will learn:
# Data Type
# Conditionals
# Loops
# Dictionaries

# Exercise 1 : Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert it into a list using Python (don’t do it by hand!).
new_list = list(string.split(", "))
print(new_list)

# Print out a message saying how many manufacturers/companies are in the list.
print(f"There are {len(new_list)} manufacturers/companies in the list")

# Print the list of manufacturers in reverse/descending order (Z-A).
print(sorted(new_list, reverse=True))

# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.
count = 0
for name in new_list:
    if "o" in name:
        count += 1
print(f"There are {count} manufacturers with 'o' in their name.")

# Find out how many manufacturers’ names do not have the letter ‘i’ in them.
count2 = 0
for name in new_list:
    if "i" not in name:
        count2 += 1
print(f"There are {count2} manufacturers without 'i' in their name.")

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
companies2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique = set(companies2)
unique_comp = list(unique)
print(unique_comp)

# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out
# a message saying how many companies are now in the list.
companies = ", ".join(unique)
print(companies)
print(len(unique))

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

#  slicing in py > Syntax: sequence[start:stop:step]
# Take the whole string "name", but step through it backwards.
print(sorted(unique_comp))
for name in unique_comp:
    reversed_name = name[::-1]
    print(reversed_name)



