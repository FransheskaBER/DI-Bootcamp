# STRINGS (str) - is a sequence of characters define with single or double '' ""

# To store data/values in your code, you need to use the symbol = with a variable(key) and its value, so you have "variable = value" then you can refer just to variable itself since the value of that variable is already store and everytime youuse the variable, the code knows what value that variable have.

greetings = 'hello world'
print(greetings.capitalize()) #so the phrase will start with upper case, only the first letter of the sentence

# # By adding a string method like .capitalize() are functions that you can apply into a string
# # More functions that you can apply to Strings: .upper() .lower() 

print(greetings.upper())
print(greetings.lower())
print(greetings[0])
print(greetings[1])
print(greetings[2])
print(greetings[3])
print(greetings[4])
print(greetings[5:11])

description = "strings are..."

print(description.upper())
print(description[:7]) #from O to 7 ":7" to print fom 7 to the edn then "7:" 
print(description[0:7])
print(description.replace("are", "is")) #Use replace() to replace a string and add the first string you want to replace in "" comma and the the string you want to replace it with in ""
# # what is inside the  purple () is called "arguments" - it means what and to what instead

#NUMBERS - integers (whole numbers), floats (decimals), complex numbers (numbers with letters).

products = 13
print(type(products)) #to test the type of data. The output will say <class 'int'>

kilometers = 4.5
print(type(kilometers)) #<class 'float'>

#You can do math operations:
print(5 + 3)
print(10 - 4)

addition = 15 + 5
print(f"the result is {addition}")
print(type(addition))

multiplication = 5 * 3
print(multiplication)

division = 100/3
print(division) #the output of a division will become a float
print(type(division))

#if you don't want to get a float and instead a whole number that is possible to divide then use //
division = 100//3
print(division)
print(type(division))

#to find the rest of that division above, you can use %
division = 100%3
print(division)
print(type(division))

#you can multiply number and also strings like:
print("Fransheska " * 5)

#to print the output multiple time in a vertical line use \n

print("Fransheska\n" *5)

#think about what really numbers like for example IDs ar strings, age are classes, numbers are objects you do operations with.

print("fransheska" + "echevarria") #the output would be fransheskaechevarria
print("fransheska " + "echevarria") #to add a space

#Comparison operations

print(5 > 4)
print(4 < 5)
print(3 >= 5)
print(6 <= 8)
print(4 == 4)
print(5 == 6)

#you can convert strings to number and viceversa and any other type of data using TYPE CASTING

age = "35"
#print(age + 2345) #this will give you an error, because age is a string not a number
#correct format:
print(int(age) + 2345)
print(age + str(2345))

#BOOLEAN are also numbers true is 1 and false is 0










