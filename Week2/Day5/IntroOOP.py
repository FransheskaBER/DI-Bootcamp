
# OOP = Object-Oriented Programming

# Uses OBJECTS to represent data and methods

# In objects, we have two types: CLASSES AND OBJECTS

# CLASSES = help you mold/shape data (like a shaped bucket to create a specific shape of sand like a castlle)

# OBJECTS = the result, the molded/shaped data (in this case would be the castle, because it has all the shaped, size, etc from the plastic bucket you used)

# PRINCIPLES OF OOP:

# 1. ABSTRACTION - think of it like a espresso machine, we don't know what is happening inside, we just know that we will get coffee in 5 min

# 2. ENCAPSULATION - holds all properties and actions of an item. E.g., characters of a video game, start with a set of properties before starting the game (like skillset, health, weapon, etc.), then you can use method to active actions like doing sth, moving, attacking and these actions use and also influente its properties.

# 3. INHERITANCE - is like a baby acquiring features/traits from his parents but also the object (a baby) can posses his own properties outside the ones inherited (like playing football).

# 4. POLYMORPHISM - it can return many forms or styles of output. for example, you can have 4 different animals that do one specific thing (e.g., "speak").

# EVERYTHING IN PYTHON IS AN OBJECT WITH ITS PROPERTIES AND METHODS

# A CLASS creates objects, it is like an object constructor or a "blueprint" for creating objects


# OOP is a class, structuring objects with PROPERTIES and BEHAVIOURS.
#e.g.:
# object = user_one
# properties = name, age, adresss
# behaviour =. dancing, jumping, talking, running

# Classes create user-defined data structures
# Classes provide STRUCTURE
# Classes if the idea and OBJECTS is the idea itself in real time, reality

# Object is an instance of class printed for you to see it, you just need to fill out "a form" that defines what you need and then the class will print a copy, and that copy is the object.

# How to define/create a class:
class NewUser(): # "class" indicates you're creating a class, and the name of that class you are creating in this case "NewUser" (in CamelCase)
    pass

# How to create an onject (instance):
class NewUser():
    pass

user_one = NewUser() # user_one is the object you are creating in the class NewUser

# How to create an attribute
class NewUser():
    pass
user_one = NewUser()
user_one.name = "John" #Object = user_one / Attribute = name / Value = John
# Attributes are like variables with values

# How to target/call an attributes
user_one.name # all objects in the same class have same attributes, tho not the same values
# in this case attribute "name" is a variable



# METHOD INIT:
# When you create a new object "user_one" python automatically runs the __init__ method.
# and this method pass one argument, the object itself with "self"
class NewUser():
    # Initializer / Instance Attributes
    def __init__(self):
        print("A new user has been iniatilized!")
user_one = NewUser()

# the "self" arguments will be passed automatically but
# you can pass more argumnets if you want:
class NewUser():
    # Initializer / Instance Attributes
    def __init__(self, name):
        print("A new user has been iniatilized!")
        print("The name of the user one is John")
user_one = NewUser(name="John")
# OR
user_one = NewUser("John")
# it looks like we are passing one argument, but python pass also automatically the
# object iself so like user_one = NewUser(user_one, "John")

#to define the attribute self you use the same, self.attribute = value

self.name = user_one

# EXAMPLE:

# Create a class named person and use INIT function to assign values for name an age.

class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age

first_person = Person("John", 36)
print(first_person.name)
print(first_person.age)

# you don't need the () in defining a class
class Dog: #cLASSES NAMESa are always capitalized
    #you put attributes for instances here
    # with the init method (initializer)
    def __init__(self, name): #here you can add attributes (name, age, etc..)
        print("The dog has been initialized")
        #It will initialized the instances so if we
        # run this code, it will print both my_dog and your_dog
        self.name = name #this is an attribute that belong to all "dog"
        # instances below (my_dog and your_dog). and you can add the value
        # of the "name" attribute to the 2 instances below
        # like my_dog = Dog("Pepper")




# to create an instance of dog:
my_dog = Dog()
your_dog = Dog()

