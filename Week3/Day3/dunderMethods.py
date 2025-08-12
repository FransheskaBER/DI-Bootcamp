# DUNDER METHODS
# Are methods that are with Double UNDERscore methods such as:
# __init__
#__str__

# the __str__ is a dumber method that python uses to convert an object to a string, like:
mylist = [1, 3, 5]
print(str(mylist)) # uses STR to convert the list into a string
#same as
print(mylist.__str__())