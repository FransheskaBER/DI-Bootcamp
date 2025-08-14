from ExercisesXP import Dog
import random

class PetDog(Dog):
    
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
         return self.bark()
         self.trained = True

    def play(self, *args):
         names = ", ".join(args[:-1]) + " and " + args[-1] 
         print(f"{names} all play together")

    def do_a_trick(self):
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        if self.trained:
            print(f"{self.name} {random.choice(tricks)}")

my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max", "Pepper")
my_dog.do_a_trick()