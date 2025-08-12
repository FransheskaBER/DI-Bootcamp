# you can also add objects within the class itiself and not after
# for example you have a class and the you create an instance/object of that class with:
# create an instance MY DOG for class DOG and the value pepper:
# my_dog = Dog("pepper")
# but you can create that instance within the class after creating the class like:
# class Dog():
# my_dog = Pepper
# and then after outside the class you can call t=hat instance and variable with the class name and your instance:
# print("my dog is", Dog.my_dog)

class Dog():
    number_of_dogs = 0 # you can add a counter when you can increment by the number of dogs instances you create outside the class
    dogs_king = "Bernie IV"

    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog
        # Increment the number of dogs
        Dog.number_of_dogs += 1

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters")

    def rename(self, new_name):
        self.name = new_name

my_dog = Dog("Rex")
my_dog2 = Dog("Bernie V")
print(f"Curently, there are {Dog.number_of_dogs} dogs")