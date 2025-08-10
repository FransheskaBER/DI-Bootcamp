
# # Analyse the code below. What will be the ouput ?
# # Explain the goal of the __init__() method

# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

# # ## create an instance of the class
# p = Point(3,4)

# # ## access the attributes
# print("p.x is:", p.x)
# print("p.y is:", p.y)

# # You use INIT to assign values to two arguments:
# class dog():
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

# first_dog = dog("Pepper", 3)

# print(first_dog.name)
# print(first_dog.age)

# # Analyse the code below. What will be the output ?
# # Explain the goal of the methods
# # Create a method that modifies the name of the person
# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def show_details(self):
#     print("Hello my name is " + self.name)

# first_person = Person("John", 36)
# first_person.show_details()
# # Output: Hello my name is John

# # Analyse the code below. What will be the output ?
class Computer():
    def description(self, name):
        """
        This is a totally useless function
        """
        print("I am a computer, my name is", name)
        #Analyse the line below
        print(self)

mac_computer = Computer()
mac_computer.brand = "Apple" # You can set attributes like this also
print(mac_computer.brand)

dell_computer = Computer()
Computer.description(dell_computer, "Mark")
# IS THE SAME AS:
dell_computer.description("Mark")
#Output: Apple - Mark




# class Person():
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show_details(self):
#         print("Hello my name is " + self.name)

#     def rename(self, new_name):
#         self.name = new_name

# first_person = Person("John", 36)
# first_person.show_details()

# first_person.rename("Peter")
# first_person.show_details()
