
# What is class inheritance in Python?

# A subclass can inherit the attributes and methods of another class


# Types of inheritance:

# 1. Single inherit > meaning that one subclass can be inherit by one single base class, the syntax is:
#    class BaseClass:
#       Base class Body
#    class DerivedClass(BaseClass):
#       Derived class Body

# 2. Multiple inheritances > the subclass is derived from more than one Base class
#   class BaseClass1:
#       Base class1 body
#   class BaseClass2:
#       Base class2 body
#   class DerivedClass(BaseClass1, BaseClass2):
#       Derived class body

# 3. Multi-level inheritance > the subclass is derived from another subclass
#   class BaseClass:
#       Base class body
#   class DerivedClass(BaseClass):
#       Derived class body
#   class DerivedClass1(DerivedClass):
#       Derived class1 body

# BENEFITS OF INHERITANCE:
# We can re-use our code which makes it more scalable and we can use classes to structure our code so we divide functionality into classes


# HOW TO DEFINE CLASSES:

# A difference betwee class and function is that a class contains both:
# data (the variables themselves) and the properties and methods (the functions themselves defined inside the class)

# # LET'S DEFINE A CLASS:
# class Shape:
#     #here we will add properties
#     name = "square"
#     sides = 4
#     #here we will add a method
#     def description(a):
#         return("A square with 4 sides")
    
# # NOW LET'S CREATE AN INSTANCE OR OBJECT OF THE CLASS "SHAPE"
# s1 = Shape()
# # here we will print the properties in a string (use parenthesos)
# print("The name of the shape is:", (s1.name))
# print("The sides of the shape is:", (s1.sides))
# print(s1.description())

# EXAMPLE OF SINGLE INHERITANCE:
class Animal:
    def __init__(self, name):
        self.name = name
class Dog(Animal):
    def bark(self):
        print(f"{self.name} barked WAF!")

my_dog = Dog(name="Pepper")
my_dog.bark()

# MORE EXAMPLES OF INHERITANCE WITH MORE THAN ONE PROPERTIE:
class Animal:
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound
    
    def make_sound(self):
        print(f"I'm a {self.type} and I love saying {self.sound}")

class Dog(Animal):
    pass

pepper = Dog("dog", 4, "WAF")
print(f"This animal is a {pepper.type}")
print(f"This dog has {pepper.number_legs} legs")
print(f"This dog likes to say {pepper.sound}")
pepper.make_sound()

# You can use super() to access a method and its arguments that have been overwritten in a subclass like:
#       super().__init__(self, type, number_legs, sound) 
#       Here we want to bring the content of the method init from the parent class into the child subclass

class ParentClass1(object):
    def func(self):
        print("I'm being called from the parent class")

class ChildClass(ParentClass1):
    def func(self):
        print("I'm actually being class from the child class")
        print("but...")
        # call the func method from the parent class
        super(ChildClass, self).func()

instance1 = ChildClass()
instance1.func()

# ENCAPSULATION:
# Use to have private attributes or methods that cannot be accessed or cannot be changed. The syntax is a double underscore
#   before the attribute or method name. Example:
# class Computer:
#     def __init__(self):
#         self.name = "Apple Computer" # Public attribute
#         self.__price = 900       # Private attribute
    
#     def sell(self): # Public method 
#         print(f"The selling price is {self.__price}") #private attribute

#     def __sell(self): # Private method
#         print("This is a private method") 

# c = Computer()
# c.sell()
# c.__sell()

# Polymorphism:
# It means when two classes have the same function names. You can call those functions with another function outside of both classes,
# Example:

class Parrot:
    def fly(self):
        print("The parrot can fly")

class Pinguin:
    def fly(self):
        print("The pinguin cannot fly")

def flying_test(bird):
    bird.fly()

rex = Parrot()
peggy = Pinguin()

# rex.fly()
# peggy.fly()
# The above have the same output as:
flying_test(rex)
flying_test(peggy)

# EXECTIONS:
# Use TRY and EXCEPT to protect code and isntead of getting an error, try sth else. Example:
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage = int(userage)
        valid_flag = True
    except:
        print("Please enter a real age")

print("Next year, your age will be",userage+1)

valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage    = int(userage)
        valid_flag = True
    except:
        pass #Here the pass means do nothing and do not print anything like the example above, instead continue and ask age again
             # since valid_flag is still False

print("Next year, your age will be",userage+1)


# MODULE
# You can store your functions into a separate file called "Module" - then you can reuse those function in a separate program
# using the "import" statement. 

# How to create your own module:
# A module is a .py file.
# let's say you create a file called pizza.py and inside that file you have the function make_pizza:
# def make_pizza(size, *toppings):
#     """
#     Summarize the pizza we are about to make.
#     """    
#     print(f"\n Making a {size}-inch pizza with the following toppings:")   
#     for topping in toppings:        
#         print("- " + topping)

# You can use that funciton in a new file you have created called making_pizzas.py
# To bring that module you just use the word import and the name of the file without .py like:
# Import pizza
# to call a function of that module you just use the module name, plus dot, plus the function name, like:
# pizza.make_pizza(16, 'pepperoni') 
# pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')

# You can also import specific functions from a specific module like:
# from module_name import function_name
# OR
# from module_name import function_0, function_1, function_2

# you can also use a nickname/alias (known as keyword) to a specific module or function name. Syntax:
# from module_name import function_name as alias_name
# import module_name as alias_name



    


    
    
