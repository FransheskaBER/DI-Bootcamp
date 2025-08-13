
# Exercises XP:

"""🌟Exercise 1: Cats

Key Python Topics:
Classes and objects
Object instantiation
Attributes
Functions

Instructions:
Use the provided Cat class to create three cat objects. Then, create a function to find the oldest cat and print its details.

Step 1: Create Cat Objects
Use the Cat class to create three cat objects with different names and ages.

Step 2: Create a Function to Find the Oldest Cat
Create a function that takes the three cat objects as input.
Inside the function, compare the ages of the cats to find the oldest one.
Return the oldest cat object.

Step 3: Print the Oldest Cat’s Details
Call the function to get the oldest cat.
Print a formatted string: “The oldest cat is <cat_name>, and is <cat_age> years old.”
Replace <cat_name> and <cat_age> with the oldest cat’s name and age.""" 

class Cat:
    def __init__(self, cat_name, cat_age):
        self.cat_name = cat_name
        self.cat_age = cat_age
        
# Step 1: Create cat objects
cat1 = Cat("Lokki", 2)
cat2 = Cat("Toppi", 4)
cat3 = Cat("Mila", 7)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1
    for cat in [cat2, cat3]:
        if cat.cat_age > oldest.cat_age:
            oldest = cat
    return oldest

oldest_cat = find_oldest_cat(cat1, cat2, cat3)

# Step 3: Print the oldest cat's details
print(f"The oldest cat is {oldest_cat.cat_name} with {oldest_cat.cat_age} years old.")





"""🌟Exercise 2 : Dogs
Goal: Create a Dog class, instantiate objects, call methods, and compare dog sizes.

Key Python Topics:
Classes and objects
Object instantiation
Methods
Attributes
Conditional statements (if)

Instructions: Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, and compare their sizes.

Step 1: Create the Dog Class
Create a class called Dog.
In the __init__ method, take name and height as parameters and create corresponding attributes.
Create a bark() method that prints “ goes woof!”.
Create a jump() method that prints “ jumps cm high!”, where x is height * 2.

Step 2: Create Dog Objects
Create davids_dog and sarahs_dog objects with their respective names and heights.

Step 3: Print Dog Details and Call Methods
Print the name and height of each dog.
Call the bark() and jump() methods for each dog.

Step 4: Compare Dog Sizes"""

class Dog:
    def __init__(self, dog_name, dog_height):
        self.dog_name = dog_name
        self.dog_height = dog_height
    
    def bark(self):
        print(f"{self.dog_name} goes WOOF!")

    def jump(self):
        print(f"{self.dog_name} jumps {self.dog_height * 2} cm high!")

david_dog = Dog("Barnie", 85)
sarah_dog = Dog("Lola", 60)

print(f"David's dog name is {david_dog.dog_name} and the heigh of his dog is {david_dog.dog_height}cm.")
print(f"Sarah's dog name is {sarah_dog.dog_name} and the heigh of her dog is {sarah_dog.dog_height}cm.")

david_dog.bark()
sarah_dog.bark()

david_dog.jump()
sarah_dog.jump()

def bigger_dog(dog1, dog2):
    if dog1.dog_height > dog2.dog_height:
        bigger, smaller = dog1, dog2
        print(f"{dog1.dog_name} is bigger than {dog2.dog_name}")
    elif dog2.dog_height > dog1.dog_height:
        bigger, smaller = dog2, dog1
        print(f"{dog2.dog_name} is bigger than {dog1.dog_name}")
    else:
        None
        print(f"None of the two dogs is bigger, they both have the same size.")

bigger_dog(david_dog, sarah_dog)















"""🌟 Exercise 3 : Who’s the song producer?
Goal: Create a Song class to represent song lyrics and print them.

Key Python Topics:
Classes and objects
Object instantiation
Methods
Lists

Instructions: Create a Song class with a method to print song lyrics line by line.

Step 1: Create the Song Class
Create a class called Song.
In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
Create a sing_me_a_song() method that prints each element of the lyrics list on a new line."""

class Song:
    def __init__(self, song_name:str, lyrics: list[str]):
        if not isinstance(lyrics, list) or not all(isinstance(x, str) for x in lyrics):
            raise TypeError("Your lyrics must be a list of strings")
        self.song_name = song_name
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

song1 = Song("stairway", ["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

print(song1.song_name)
print(song1.lyrics)
song1.sing_me_a_song()














"""🌟Exercise 4 : Afternoon at the Zoo

Goal: Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.

Key Python Topics:
Classes and objects
Object instantiation
Methods
Lists
Dictionaries (for grouping)
String manipulation

Instructions:

Step 1: Define the Zoo Class

1. Create a class called Zoo.
2. Implement the __init__() method:
It takes a string parameter zoo_name, representing the name of the zoo.
Initialize an empty list called animals to keep track of animal names.
3. Add a method add_animal(new_animal):
This method adds a new animal to the animals list.
Do not add the animal if it is already in the list.
4. Add a method get_animals():
This method prints all animals currently in the zoo.
5. Add a method sell_animal(animal_sold):
This method checks if a specified animal exists on the animals list and if so, remove from it.
6. Add a method sort_animals():
This method sorts the animals alphabetically.
It also groups them by the first letter of their name.
The result should be a dictionary where:
Each key is a letter.
Each value is a list of animals that start with that letter.
7. Add a method get_groups():
This method prints the grouped animals as created by sort_animals()."""

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals: list[str] = []
        print(f"A new list of animals have been initialized for {self.zoo_name}.")

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} was added to the list of animals.")
        else:
            print(f"{new_animal} is already in the list of animals.")
        return self.animals
    
    def get_animals(self):
        print(f'The current animals in the zoo {self.zoo_name} are: {self.animals}')
        
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} was just sold.")
        else:
            self.animals.append(animal_sold)
    
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        result = {}
        for name in sorted_animals:
            first_letter = name[0]
            if first_letter not in result:
                result[first_letter] = []
            result[first_letter].append(name)
        return result
        
    
    def get_groups(self):
        groups = self.sort_animals()
        print(groups)
        return groups


"""Step 2: Create a Zoo Object
Create an instance of the Zoo class and pass a name for the zoo."""
berlin_zoo = Zoo("Zoological Garden")

"""Step 3: Call the Zoo Methods
Use the methods of your Zoo object to test adding, selling, displaying, sorting, and grouping animals."""
berlin_zoo.add_animal("Giraffe")
berlin_zoo.add_animal("Bear")
berlin_zoo.add_animal("Baboon")
berlin_zoo.get_animals()
berlin_zoo.sell_animal("Bear")
berlin_zoo.get_animals()
print(berlin_zoo.sort_animals())
berlin_zoo.get_groups()