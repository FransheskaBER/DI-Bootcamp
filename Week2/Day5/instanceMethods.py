# INSTANCE METHODS:

# instance methods are defined inside a class and they are used to
#   describe a function that belongs to class:
# for example, a function "bark" that belongs to class "dog"

# TO DEFINE A METHOD, USE "def" and the first argument to pass is "self" (this allows to play with the object itself inside the method)

# Let's say we have a "Bark" method (remember methods are defined inside the class):

class Dog(): #Created a DOG class
    # Initializer / Instance Attributes
    def __init__(self, name_of_dog): # Define attributes(args) self and name
        print("A new dog has been initialized")
        print("His name is", name_of_dog)
        self.name = name_of_dog

    def bark(self): #Created a bark function
        print(f"{self.name} barks WAF!")

first_dog = Dog("Rex") # Created a "Dog" object
first_dog.bark() # call the bark function

# Methods (functions) can also receive arguments 
# For example: 
# You can have the method "walk" with two arguments, self and number of meters"
def walk (self, number_of_meters):
    print(f"{self.name} walked {number_of_meters} meters")

first_dog = Dog("Rex")
first_dog.walk(10) # call the 'walk' function with the argument

# you can use METHODS to modify object's attributes:

def rename(self, new_name):
    self.name = new_name
first_dog = Dog("Rex")
first_dog.rename("Paul")


