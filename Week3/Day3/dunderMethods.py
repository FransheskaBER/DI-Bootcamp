# DUNDER METHODS
# Are methods that are with Double UNDERscore methods such as:
# __init__
#__str__



#1
# The __str__ is a dumber method that python uses to convert an object to a string, like:
mylist = [1, 3, 5]
print(str(mylist)) # uses STR to convert the list into a string
#same as
print(mylist.__str__())


#2: the __len__method returns the lenght of the object, same as len(object)

#3: the __call__method when you calling an object, is like when you use the parenthesis ()at the end of calling a specific method

#4: __repr__
# Called by the repr() built-in function to compute the official string representation of an object.
# __repr__ can be a more “behind the scenes” look at the object.

