#naming variable best practices
#we dont use cameleon like thisMyAge that is more common for Java
#in python use underscore for naming variables like:
#this_my_age

#INPUT is a function that will ask user for an input that the user has to enter/type input() - INPUT is always a string, the output is always a string.cle

print("hello world")
user_name = input("what's your name:")
print(user_name)
user_age = int(input("how old are you?"))
print(user_age)
print("in 450 years, you will be", int(user_age) + 450, "years old")
#you need to convert age to a number in order to to the math operation. you can also convert it in the valua itself like user_age = int(input(...))

#a better way to print wihtout the commas, use F string
print(f"in 450 years, you will be {user_age + 450} years old") #you will get an erro unless you convert the input to a int

