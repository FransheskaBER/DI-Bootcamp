# Exercises XP Ninja
# Last Updated: September 13th, 2024

# What you will learn
# Dunder Methods
# Classes/Objects


# Exercise 1 : Temperature
# Instructions
# Write a base class called Temperature.
# Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
# Each of the subclasses should have a method which can convert the temperture to another type.
# You must consider different designs and pick the best one according to the SOLID Principle.

class Temperature:
    def __init__(self, value_in_celsius):
        self.value_in_celsius = value_in_celsius
    
    def to(self, unit_cls):
        return unit_cls.from_celsius(self.value_in_celsius)
    
class Celsius(Temperature):
    def __init__(self, value):
        super().__init__(value)
    
    @staticmethod
    def from_celsius(value):
        return Celsius(value)

class Fahrenheit(Temperature):
    def __init__(self, value):
        celsius_value = (value - 32) * 5/9
        super().__init__(celsius_value)

    @staticmethod
    def from_celsius(value):
        return Fahrenheit(value * 9/5 + 32)
    
f = Fahrenheit(212)   # boiling water
c = f.to(Celsius)
print(c.value_in_celsius)  # → 100

# Exercise 2: In the Quantum Realm
# Instructions
# Write a class called QuantumParticle and implement the following:
# The attributes - The particle has an initial position (x), momentum (y) and spin (p)

# The method position() - Position measurement: generate a random position (integer between 1 and 10,000)

# The method momentum() - Momentum measurement: generate a random momentum (float - a number between 0 and 1)

# The method spin() - Spin measurement: can randomly be 1/2 or -1/2

# Create a method that implements a disturbance. A disturbance occurs each time a measurement is made (e.g. one of the measurements method is called). Disturbance changes the position and the momentum of the particle (randomly generated) and then prints ‘Quantum Interferences!!’

# Implement a meaningful representation of the particle (repr)

# Quantum Entanglement: two particle can be entangled, meaning that if I measure the spin of one of them the second one is automatically set to the opposite value. A quantum particle can only be entangled to another quantum particle (check that when you run the method !!)
# Modify as you see fit the attributes and methods of your class to fit the previous definition
# When two particles are entangled print: ‘Spooky Action at a Distance !!’
# >>>p1 = QuantumParticle(x=1,p=5.0)
# >>>p2 = QuantumParticle(x=2,p=5.0)
# >>>p1.entangle(p2)
# >>>'Particle p1 is now in quantum entanglement with Particle p2'
# >>>p1 = QuantumParticle()
# >>>p2 = QuantumParticle()
# >>>p1.entangle(p2)
# >>>'Spooky Action at a Distance'
import random

class QuantumParticle:
    def __init__(self, p=None, m=None):
        # initialize random values if not provided
        self.position_value = p or random.randint(1, 10000) # random integer
        self.momentum_value = m or random.random()
        self.spin_value = random.choice([0.5, -0.5])
        self.entangled_with = None

    def disturbance(self):
        # reset pos & momentum
        self.position_value = random.randint(1, 10000)
        self.momentum_value = random.random()
        print("Quantum Interferences!!")

    def position(self):
        self.disturbance()
        return self.position_value

    def momentum(self):
        self.disturbance()
        return self.momentum_value

    def spin(self):
        self.disturbance()
        if self.entangled_with:
            # opposite spin
            self.entangled_with.spin_value = -self.spin_value
            print("Spooky Action at a Distance !!")
        return self.spin_value

    def entangle(self, other):
        if not isinstance(other, QuantumParticle):
            raise TypeError("Can only entangle with another QuantumParticle")
        self.entangled_with = other
        other.entangled_with = self
        print("Particle entanglement established!")

p1 = QuantumParticle(p=1, m=5.0)
p2 = QuantumParticle(p=2, m=5.0)
p1.entangle(p2)  
# → "Particle entanglement established!"
p1.spin()  
# → sets p2.spin opposite + "Spooky Action at a Distance !!"


