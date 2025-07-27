
# FUNCTION - a program that does some process with some info we give it.

# You can use function to AVOID creating the same actions, loops, or lines of code that we need to repeat and run all the time. We can just create a function
#  and we can use that function whenever we need it.

# for example, you can call MORNING_function because it automates your rutine for the morning.

# Function is a reusable set of operations like print(), len(), append(), update()

# WHY TO USE FUNCTION? to avoid repeting yourself, makes code more useful

# We can think of functions like variables that store functionality in a form of a code block.


# FUNCTIONS SYNTAX:

def morning_routine():
    '''prints a string on the console'''
    print('This is an action of what the function mornig_routine should do') #this won't print because the function needs to be calling
# To call a function, we need the name of the function and ()
# morning_routine()


# DOCUMENTATION - we write code and explain it

# DOC STRINGS = they are strings that explain the functionality of the code with 6 quoates '''...''' (this is a doc string that can be visible when hovering over the function)

# EXERCISE: create a function that prints "hello there!", add a doc string, and then call the function to see the output

def greetings():
    '''Prints a greeting in English'''
    print("Hello there!")

# greetings()

# HOW TO PASS AN ARGUMENT TO THE FUNCTION

# In this example, in which you create function greetings_adv and add the argument is "language":
def greetings_adv(language):
    '''Print a greeting depending on the language'''
    if language == 'PT':
        print('Ola, tudo bem?')
    elif language == 'ES':
        print('Hola, que tal?')
    else:
        print('Unkown language')

# to pass the argument, print:
# greetings_adv('ES')


# PASS 2 ARGUMENTS TO THE FUNCTION:
def greetings_adv(language, name):
    '''Print a greeting to a name depending on the language'''
    if language == 'PT':
        print(f'Ola {name}, tudo bem?')
    elif language == 'ES':
        print(f'Hola {name}, que tal?')
    else:
        print('Unkown language')

# to pass the arguments, print:
# greetings_adv('ES', 'Dolores') #the order of the argument matters, if you put first lang and then name - so you need to call them as it is. 


# KEY WORD ARGUMENTS:

def greetings_adv(language, name):
    '''Print a greeting to a name depending on the language'''
    if language == 'PT':
        print(f'Ola {name}, tudo bem?')
    elif language == 'ES':
        print(f'Hola {name}, que tal?')
    else:
        print('Unkown language')

# greetings_adv(language ='PT', name = 'Pedro') #when you add the KEY in the calling, then the order of the argument no matter.


# DEFAULT VALUE: (to avoid having an error when you are calling the function with no argument when the function has argument)
def greetings_adv(language = 'EN', name = 'John'): #With = to define the default value
    '''Print a greeting to a name depending on the language'''
    if language == 'PT':
        print(f'Ola {name}, tudo bem?')
    elif language == 'ES':
        print(f'Hola {name}, que tal?')
    elif language == 'EN':
        print(f'Hola {name}, que tal?')
    else:
        print('Unkown language')

# greetings_adv('ES') OUTPUT: GET AN ERROR or unknown language
# greetings_adv()


# RETURN VALUES - to ask the function to return sth

def calculation(num1, num2):
    '''Sums two input numbers'''
    result = num1 + num2
    return result
# To see the calculation, you need to print it. Otherwise the calculation will be done and return its value.
print(calculation(5, 3)) 


# USE TWO FUNCTIONS AND PRINT THAT LAST RESULT OF THE SECOND FUNCTION:

def calculation(num1, num2)-> int: #to return an INT add -> int
    result = num1 + num2
    return result

def multiple(calc):
    '''takes a number and multiply by 5'''
    result = calc * 5
    return result

calc = calculation(5, 3)
print(multiple(calc))


# EXERCISES:

# Create a function called country_info that receives a country name as argument and prints the capital of that country. Make the country name argument default Naboo with capital Theed.
def country_info(country = 'Naboo') -> str:
    '''Returns the capital of a given country'''
    if country == 'Peru':
        return 'Lima'
    elif country == 'Iceland':
        return 'Reykjavik'
    elif country == 'Naboo':
        return 'Theed'
    else:
        return 'Unknown Country'

print(country_info()) #print the default
print(country_info('Peru')) #prints first IF condition
print(country_info('Colombia')) #prints ELSE condition



# GLOBAL AND LOCAL SCOPE:

# GLOBAL SCOPE are unindented blocks of code within this file
# LOCAL SCOPE are indentented blocks of code within this file

# We can access code from the global scope anywhere, and call code in the global scope within a local scope code. For example:

age = 25

def age_function():
    print(age)

age_function()

def happy_birthday():
    global age #you need to use global and the variable if you want to modify the global variable
    age += 1
    print(age)

happy_birthday()