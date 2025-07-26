#Lists are organized and are with square brackets and commas [x, y, z, n]
#dictionaries are curly brackets and can containe a list of data for example:
# user_info = {
#   "name" = "fran",
#   "phone" = "12345",
#   "email" = "email@sample.com",
#   "age" = 23
# }
# print("the user email is", user_info["email"])

#list:

# user_name = "Fransheska"
# age = 33
# email = "fran@gmail.com"

# #list:
# user_list = [user_name, email, age]
# #you can also index specif data from your list, for example if you want to print just the first item of your list, do:
# print(user_list[0])
# print(user_list[0:3])

# #Tuple cannot be reordered.

# user_name = "Mary"
# age = 34
# height = 1.53
# weight = 56

# user_tuple = (user_name, age, height, weight)
# #you can also index from right to left with minus - so if you want the last item of your tuple/list then use -1, and consequtive.
# print(user_tuple[-2])

# #you can also print ranges of item with : to print the first until the third item:
# print(user_tuple[0:3])

# my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90]
# print(my_list[0:4]) 

# #you can also assign a new value to an item of a list with index, for example if you want to change the value of the first item in your LIST only, you do:
# my_hobbies = ["dancing", "hiking", "reading"]
# print(my_hobbies[1])

# my_hobbies[1] = "climbing"
# print(my_hobbies[1])

# #to add an item to your list use .append()

# my_hobbies.append("hiking")

# print(my_hobbies)

# #to remove an element use .remove()

# my_hobbies.remove("hiking")
# print(my_hobbies)

# #ti remove an item by using an index use .pop(0)

# #to add two list just use the symbol plus +

# additional_hobbies = ["cooking", "watching movies"]

# all_hobbies = my_hobbies + additional_hobbies
# print(all_hobbies) 

#FUNCTIONS: len() for lenght, sum(), sorted(), .append() for adding 1 item ONLY, .insert(0, "x") to replace, and .extend() to add more than 1 item from a list.

# Given this list:

# list1 = [5, 10, 15, 20, 25, 50, 20]

# # find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value
# # Hint : Look at the index method

# # Expected output:
# # list1 = [5, 10, 15, 200, 25, 50, 20]

# list1.insert(3, 200)
# print(list1)

# Tuples
# Tuples are immutable lists, which means items can’t be changed.

# To create a tuple, use parentheses:

# >>> my_tuple = (5,6,7)


# The good thing about tuples is that they can be unpacked, meaning each value will go to one variable:

# >>> a, b, c = my_tuple

# >>> print(a)
# 5

# >>> print(b)
# 6

# >>> print(c)
# 7

# Unpack the following tuple into 4 variables


# a_tuple = (10, 20, 30, 40)

# Expected output:

# a_tuple = (10, 20, 30, 40)
# # Your code
# print(a) # should print 10
# print(b) # should print 20
# print(c) # should print 30
# print(d) # should print 40

# a_tuple = (10, 20, 30, 40)

# a, b, c, d = a_tuple

# print(a)
# print(b)
# print(c)
# print(d)

#SETS cannot have duploicates and they hjave curly brackers {}  - to add an element to a set use .add()

# my_set = set()
# my_set.add("John")
# my_set.add("mary")
# my_set.add("John")

# print(my_set)

# new_set = {"banana", "banana", "apple"}
# print(new_set)

#FOR loops (only in LISTS) []

# fruits = ["apple", "banana", "orange", "blueberry"]

# # for varible_name in variable_element
# #   CODE
# #   CODE

# for fruit in fruits:
#     print(fruit)


# #To print RANGES use range()

# # numbers = range(1, 23)
# #to convert that range into a list just wrap list()
# numbers = list(range(1, 23))
# print(numbers)
# # for number in numbers:
# #     print(number)


#Accept a number from the user and print its multiplication table

# number = int(input("Enter a number: "))

# for x in range(1, 12):
#     result = number * x
#     print(f"{number} * {x} = {result}")


#whilte LOOP

# current_number = 1
# while current_number <= 5:
#     print(current_number)
#     current_number += 1
# print("finished")

# number = 5
# while number <= 100:
#     print(number)
#     number += 5
# # print("finished")

# password = " "

# while password != "HelloWorld": #keep asking while you see that the password is not equal to HelloWorld - once it is equal, then print what printing message
#     password = input("What's the secret password? ")
# print("You have guessed the secret password")

# Print the numbers from 1 to 10 using while loop

# number = 1

# while number <= 10:
#     print(number)
#     number += 1
# print("finished")

# while 1 == 1:
#     print("loading...")


#use flags like conditions to keep printing sth in a loop and then use condition to stop printingam

# active = True

# while active:
#     city = input("enter the city you have visited(enter 'quit' when you have finished): ")
#     if city == "quit":
#         active = False
#     elif city == "leave me alone":
#         active - False
#     elif city == "stop":
#         active = False
#     else:
#         print("I would love to go to", city)
# print("goodbye")

# while True:
#     city = input("Enter a city you have visited: ")
#     if city == "quit":
#         break
#     else:
#         print("I would love to visit", city)
# print("goodbye")

# number = 4

# while True:
#     user_number = input("guess the secret number: ")
#     if int(user_number) == number:
#         print("Congrats! you guessed the secret number")
#         break
#     else:
#         print("keep trying")

#use CONTINUE to go back to the beginnin of the loop, for example:

# number = 0

# while number <= 10:
#     number += 1
#     if 3 < number < 7: #skip the number 4, 5, 6 and keep continue the loop
#         continue 
#     print(number)

# list1 = list("honey 1")

# list2 = ["honey 1"]

# print(list1)
# print(list2)

# fruits = ["orange", "kiwi", "pineapple", "apple"]

# print(fruits[1])
# print(fruits[-2:]) #to print the last two items

# fruits[2] = "strawberry"

# print(fruits)

# # methods = metho that apply to classes and lists
# fruits = ["apple", "banana", "mango"]
# #.insert(where to insert, what to insert)
# fruits.insert(1, "kiwi")
# print(fruits)

# #.append () add item to the end of the list, only one item
# fruits.append("strawberry")
# print(fruits)

# # .to remove("string") or .pop[index]
# fruits.remove("kiwi")
# print(fruits)

# fruits.pop(0)
# print(fruits)

# # .extend() to add another list

# vegs = ["tomate", "carrot", "cucumber"]

# fruits.extend(vegs)
# print(fruits)

# #sorted() and .sort()

# # fruits_sorted = sorted(fruits)
# # print(fruits)
# # print(fruits_sorted)

# fruits.sort()
# print(fruits)

# fruits.sort(reverse=True)
# print(fruits)

#exercise 1 - find the 20 and replace it with 200

# list1 = [5, 10, 15, 20, 25, 50, 20]

# list1.pop(3)
# list1.insert(3, 200)
# print(list1)

# #another method:
# # first find the index of 50 and then replace it with 500

# index_50 = list1.index(50)
# print(index_50)

# if 50 in list1: 
#     index_50 = list1.index(50) #find the index
#     list1[index_50] = 500 #change the value of the index to 500
# print(list1)

#TUPLES - a list that cannot be changed and it uses brackets () - Unlike lists that can be empty list = [] , tuples CANNOT be empty

# my_tuple_cities = ("NY", "BO", "BC", "NY", "NY")
# print(my_tuple_cities.count("NY")) #use .count() to see how many times an item/value appears in the tuple

# print(my_tuple_cities.index("BO")) #to find out the index of a specific value

# print(my_tuple_cities[1])

# # my_tuple_cities.append("CJ") #you cannot add or change anything in tuples, they are unmutable
# # print(my_tuple_cities) 

#you can also unpack tuples, since they have a specific order , you can unpack them with different variables, for example:
#let's say you have a tuple of a list of languages:
# languages = ("EN", "SP", "UK" , "JP")
# lang1, lang2, lang3, lang4 = languages #you are unpacking each language to these new variables, so unpacking language EN to lang1, then you can just print lang1
# print(lang1)
# print(lang2)
# print(lang3)
# print(lang4)

# SETS do not have duplicates, and they are not index , they are unordered and you use curly brackets {}

# set1_countries = {"Israel", "US", "Japan"}
# set2_names = {"John", "Israel", "Carol"}

# set3 = set1_countries.intersection(set2_names) #to print or check if a value appears in both sets 1 and 2
# print(set3)

# merged_set = set1_countries.union(set2_names) #to merge two sets, it will merge them but do not duplicate values, in this case Israel will appear once
# print(merged_set)

# #to know which values in a specific variable are different and not duplicate from another variable, use .difference()
# diff_sets1 = set1_countries.difference(set2_names)
# print(diff_sets1)

# diff_sets2 = set2_names.difference(set1_countries)
# print(diff_sets2)

# fruits = ["banana", "kiwi", "pear", "orange"]

# for fruit in fruits:
#     print(fruit)


# LOOPS FOR STRINGS

# for char in "hello":
#     print(char)

# # LOOPS FOR LISTS, TUPLES, SETS

# fruits = ["banana", "apple", "kiwi"]
# for fruit in fruits:
#     print(fruit)

# # RANGES

# for i in range(10):
#     print("hellow", i) #to print hello 0, hello 1, hello 2.... until 10 excluding 10 meaning until 9


# # to indicate from where to START in the range then say (1, 10)

# for i in range(1, 11):
#     print(i)

#if you want to add STEP like step every 1 or 2, then say (1, 100, 10) steps every 10 numbers

# for i in range(0, 100, 10): # RANGE makes a sequence of NUMBERS
#     print(i)

fruits = ["banana", "apple", "pear"]

for i, fruit in enumerate(fruits):
    if fruit == "apple":
        fruits[1] = "HappyFruit"
    else:
        print(f"the fruit {i} is {fruit}")

print(fruits)
        