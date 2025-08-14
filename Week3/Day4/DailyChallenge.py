import math

# Daily Challenge - Circle

""" Instructions :
The goal is to create a class that represents a simple circle.
A Circle can be defined by either specifying the radius or the diameter.
The user can query the circle for either its radius or diameter.

Other abilities of a Circle instance:

Compute the circle’s area
Print the attributes of the circle - use a dunder method
Be able to add two circles together, and return a new circle with the new radius - use a dunder method
Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
Be able to put them in a list and sort them
Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles """

class Circle:
    def __init__(self, name, radius=None, diameter=None):
        self.name = name
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = self.diameter / 2
    
    def circle_area(self):
        return math.pi * (self.radius ** 2)
    
    def __str__(self):
        return f"The circle attributes for {self.name} are:\n Radius: {self.radius}\nDiameter: {self.diameter}\nArea:{self.circle_area()}"
    
    def __add__(self, other):
        if isinstance (other, Circle):
            new_radius = self.radius + other.radius
            return Circle("NEW CIRCLE", radius=new_radius)
        elif isinstance(other, (int, float)):
            new_radius = self.radius + other
            return Circle("NEW CIRCLE", radius=new_radius)
    
    def __gt__(self, other):
        if isinstance (other, Circle):
            return self.radius > other.radius
        elif isinstance(other, (int, float)):
            return self.radius > other
    
    def __eq__(self, other):
        if isinstance (other, Circle):
            return self.radius == other.radius
        elif isinstance(other, (int, float)):
            return self.radius == other
        
    def __lt__(self, other):
        if isinstance (other, Circle):
            return self.radius < other.radius
        elif isinstance(other, (int, float)):
            return self.radius < other

# --- Create circles in different ways ---
c1 = Circle("C1", radius=5)         # radius given
c2 = Circle("C2", diameter=10)      # diameter given
c3 = Circle("C3", radius=7)         # another radius
c4 = Circle("C4", diameter=20)      # another diameter

# --- Test __str__ and area ---
print("=== Printing Circles ===")
print(c1)
print(c2)
print(c3)
print(c4)
print()

# --- Test area method directly ---
print("=== Areas ===")
print("Area of c1:", c1.circle_area())
print("Area of c2:", c2.circle_area())
print()

# --- Test __add__ ---
print("=== Adding Circles ===")
c5 = c1 + c3
print("c1 + c3:", c5)
c6 = c2 + 4
print("c2 + 4:", c6)

# --- Test __gt__ ---
print("=== Greater Than ===")
print("c1 > c2?", c1 > c2)
print("c3 > 6?", c3 > 6)
print()

# --- Test __eq__ ---
print("=== Equality ===")
print("c1 == c2?", c1 == c2)
print("c1 == 5?", c1 == 5)
print()

# --- Test __lt__ and sorting ---
print("=== Sorting Circles ===")
circle_list = [c1, c2, c3, c4, c5, c6]
circle_list.sort()
for c in circle_list:
    print(c)



    



