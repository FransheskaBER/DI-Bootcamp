# BUILT-IN DECORATORS


# DECORATOR 1: @ STATIC METHOD
# It doesn't get the object itslef the __init__ you can use this decorator to have a cleaner code because you don't need to have or print the object self
# in other words is a helper function to keep code organize and clean (nothing is injected automatically like the self function)
# if you need the class or the object, then do not use this decorator
# use this decorator to just check a number or a math operation, etc.
# so the code would look like:
class MyClass:
  @staticmethod # here you skip the function def __innit__()...
  def add(a, b): 
    return a + b

print(MyClass.add(3, 6))
# >> 9

# DECORATOR 2: @ CLASS METHOD
# here the methods are not bound to object but to the class itself
#if you call the method "add" for the class "MyClass" then the operation within the method "add" applies, but if you call that same
# method for an instance of the MyClass class, then the operation within the method "add" won't apply, see example:
class MyClass:
  __counter = 0

  @classmethod
  def add(cls,a): 
    return cls.__counter + a

my_class_add = MyClass.add(3)
print(my_class_add)
# >> 3

new_class = MyClass()
new_class.__counter = 1

print(new_class.add(3)) # Here you are calling the method "add" for the instance "new_class" which won't do anything and still print 3
# >> 3




# DECORATOR 3: @ PROPERTY
# treats functions/methods as attributes, pieces of data that are named and belong to an object or class.
#  you don;t need to call a method/function attribute with () if using this decorator. example:
class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return f"{self.__first_name}.{self.__last_name}@gmail.com"

newClass = MyClass("John", "Doe")

print(newClass.email()) # you don;t need to call this atribute (function/method) with parenthesis
# >> TypeError: 'str' object is not callable

print(newClass.email)
# >> John.Doe@gmail.com




# DECORATOR 3: @ SETTER
# add the write behavior for a property and inside a setter, you decide how to store that data like you can validate a data, 
# or parse a data, or update a data, etc.

class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return f"{self.__first_name}.{self.__last_name}@gmail.com"

  @email.setter # so in this setter you are updating a piece of data from the property which it's the attribute "__first_name"
  def email(self, name): 
    self.__first_name = name

newClass = MyClass("John", "Doe")
newClass.email = "Sarah"
print(newClass.email)
# >> Sarah.Doe@gmail.com