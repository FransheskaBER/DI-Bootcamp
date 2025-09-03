# CREATE A FUNCTION

def say_hello():
    print("Hello")
# To run the function, call the function:
# say_hello()


# ARGUMENTS VS PARAMETERS

#  you give parameters inside the brackets () like name, age, etc.. which are variables or parameters, which means that the fucntion receives two
# variables/parameters. These para allows to give fucntions arguments like arguments are the actual VALUE
#  so parameter are variable inside the () when a function is being defined
# and arguments are values inside the () when calling that function

def say_bye(name, emoji): # NAME and EMOJI are call positional PARAMETERS becuse they are required to be in the same position
    print(f"hello {name} {emoji}")

# say_bye("Fransheska",":)") # "Fransheska" and ":)" are call positional ARGUMENTS becuse they are required to be in the same position

# If you dont want to use positional parameters/arguments, then use default parameters use: def say_bye(name="Fransheska" and emoji = ":D"):
#  also to not care about the position when passing values, use keyword arguments like say_bye(name="Fransheska", emoji = ":D")


# RETURN

def sum(num1, num2):
    return num1 + num2
total = sum(4, 5)
# becayse the sum function return that sum then total will be that sum which is 9
# print(sum(10,total)) # 19

def highest_even(li):
    evens = []
    for i in li:
        if i % 2 == 0:
            evens.append(i)
    return max(evens)
    
# print(highest_even([10, 2, 3, 4, 8, 11]))


# METHODS VS FUNCTIONS

# functions:
def some_random_suff():
    pass
some_random_suff()

# Methods have dot .format()

# the string on the left owns the method "capitalize()" such as:
"hello".capitalize()

# Built-in functions like:

# list()
# print()
# max()
# min()
# input()

# len()
print(len("HELLO")) # 5

greet = "HELLO"
print(greet[:]) # HELLO
print(greet[0:]) # HELLO
print(greet[0]) # H
print(greet[-1]) # O
print(greet[0:2]) # HE
print(greet[2:5]) # LLO

string = "to be or not to be"
print(string.upper()) # TO BE OR NOT TO BE
print(string.capitalize()) # To be or not to be

# .lower()
# .find("be") - find the first occurance of a piece of text
# .replace("be", "me") - replace be with me


# DOCSTRINGS
def test(a):
    '''
    Info: This function tests and prints param a
    '''
    print(a)

test("!!!")
help(test)
print(test.__doc__)

# CLEAN CODE

# 1
def is_even(num):
    if num % 2 == 0:
        return True
    elif num % 2 != 0:
        return False   

# 2
def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False  

# 3
def is_even(num):
    if num % 2 == 0:
        return True
    return False  

# 4
def is_even(num):
    return num % 2 == 0

# print(is_even(50)) # True
# print(is_even(51)) # False



# *ARGS and **KWARGS

def super_func(*args):
    print(args)
super_func(1,2, 3, 4) # Output "Tuple" > (1, 2, 3, 4)

def super_func2(**kwargs):
    print(kwargs)
super_func2(num1=5, num2=10) # output "dict" > {'num1': 5, 'num2': 10}

def another_func(**kwargs):
    total = 0
    for item in kwargs.values():
        total += item
    return total
print(another_func(num1=5, num2=10)) # 15


# MATRIX
# It's an arrar or list with another array or list inside it, like:

matrix = [
    [1, 5, 1],
    [0, 1, 8],
    [10, 0, 1]
]

print(matrix[0][1]) # 5
print(matrix[1][2]) # 8
print(matrix[2][0]) # 10


#  LAMBDA FUNCTION

# return an object which it is asigned to a variable or used as part of other bigger functions
# instead of "def" to create a function, use "lambda"

sub = lambda x,y : x-y
print(sub(5, 3)) # 2

mylist = [10, 24, 35, 67, 4, 67]
mylist2 = map(lambda n : n*2, mylist) # returns a map object
print(list(mylist2)) # turn the map into a list

def upper_strings(s):
    return s.upper()

fruits = ["banana", "apple", "kiwi"]
map_object = map(upper_strings, fruits)
print(list(map_object)) 
# ['BANANA', 'APPLE', 'KIWI']


# FILTER (filter objects with a certain criteria, it creates a new list with the filtered items)

def filter_by_A(s):
    return s[0] == "a"

fruits = ["apricot", "banana", "apple", "kiwi"]
filtered_object = filter(filter_by_A, fruits)
print(list(filtered_object)) 
# ['apricot', 'apple']

