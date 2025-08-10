class Circle:
    color = "red"

class NewCircle(Circle):
    color = "blue"

nc = NewCircle
print(nc.color)

# Output:
# blue



class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()
print(nc.diameter)

# Output:
# 1
# 4

# Try to recreate the class explained below:
# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
# We can create a class called BlockedDoor that inherits from the base class Door.
# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor
#   version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

class Door:
    def __init__(self, is_opened = False):
        self.is_opened = is_opened
    
    def open_door(self):
        self.is_opened = True
        print("The door is now open")
    def close_door(self):
        self.is_opened = False
        print("the door is now closed")

class BlockedDoor(Door):
    def open_door(self):
        self.is_opened = False
        print("A blocked door cannot be open")
    def close_door(self):
        self.is_opened = False
        print("A blocked door cannot be closed")
        print("but..")
        super(BlockedDoor, self).open_door()
        super(BlockedDoor, self).close_door()

my_door = BlockedDoor()
my_door.open_door()
my_door.close_door()



#More exercises:

class A():

    def dothis(self):
        print("doing this in A")

class B(A):
    pass

class C():
    def dothis(self):
        print("doing this in C")

class D(B, C):
    pass

d_instance = D()
d_instance.dothis() 

#output:
#"doing this in A"


class Book():
    def __init__(self, title, author, publication_date, price):
        self.title = title
        self.author = author
        self.publication = publication_date
        self.price = price

    def present(self):
        print(f'Title: {self.title}')

class Fiction(Book):
    def __init__(self, title, author, publication_date, price, is_awesome):
        super().__init__(title, author, publication_date, price)
        self.genre = 'Fiction'
        self.is_awesome = is_awesome
        if self.is_awesome:
            self.bored = False
            print('Woow this is an awesome book')
        else:
            self.bored = True
            print('I am very bored')

if __name__ == '__main__':
    foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
    foundation.present()
    print(foundation.price)
    print(foundation.bored)
    boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False)
    print(boring_book.bored)

# Output:
# title: Asimov
# 5£
# False
# I am very bored
# True




# Exercise
# Given a list of numbers, write a function that returns the sum of every number.
# BUT you can have a malicious string inside the list.

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

def sum_total_number(my_list):
    total_sum = 0
    for number in my_list:
        try:
            total_sum += number
        except TypeError:
            pass
    return total_sum

print(f"the total sum of all valid numbers is {sum_total_number(my_list)}")

# EXAMPLE WITH ELSE STATEMENT:
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:    # TRY THIS
        userage = int(userage)
    except: # IF YOU GOT AN ERROR
        print("Wrong age!")
    else:   # ELSE
        valid_flag = True

print("Next year, your age will be",userage+1)




