import random 
# Daily challenge GOLD: DNA
# Last Updated: September 13th, 2024

# What You will learn :
# OOP
# Inheritance


# Instructions :
# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and polymorphism.

# Build a DNA object. DNA is composed of chromosomes which is itself composed of Genes.
# A Gene is a single value 0 or 1, it can mutate (flip).
# A Chromosome is a series of 10 Genes. It also can mutate, meaning a random number of genes can randomly flip (1/2 chance to flip).
# A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

# Implement these classes as you see fit.

# Create a new class called Organism that accepts a DNA object and an environment parameter that sets the probability for its DNA to mutate.

# Instantiate a number of Organism and let them mutate until one gets to a DNA which is only made of 1s. Then stop and record the number of generations (iterations) it took.
# Write your results in you personal biology research notebook and tell us your conclusion :).

class Gene:
    def __init__(self, value: int):
        self.value = value
    
    def flip(self):
        self.value = 1 - self.value # A Gene is a single value 0 or 1

    def mutate(self, flip_chance=0.5):
        if random.random() < flip_chance: # random.random() gives you a number between 0.0 and 1.0 so everytime random is 0.5 u flip (the lengh of 0.0 to 0.5 is 50% chance)
            self.flip()
    
    def __repr__(self):
        return str(self.value) # show gene as "0" or "1" when printed

class Chromosome:
    def __init__(self, genes: list[Gene]): # A Chromosome is a series of 10 Genes.
        self.genes = genes # list of 10 Gene objects

    def mutate(self, flip_chance=0.5):
        # Chromosome manages its own genes:
        for g in self.genes:        # visit each gene
            if random.random() < flip_chance:  # independent coin toss
                g.flip()            # ask that gene to flip
    
    @classmethod
    def random(cls, length: int = 10):
        # Build a Chromosome with `length` random Genes (0/1)
        return cls([Gene(random.randint(0, 1)) for _ in range(length)])

    def __repr__(self):
        # Show chromosome as a string like "1011001101"
        return ''.join(str(g) for g in self.genes)
    

class DNA:
    def __init__(self, chromosomes: list[Chromosome]):
        self.chromosomes = chromosomes  # DNA is a list of 10 Chromosomes

    @classmethod
    def random(cls, num_chromosomes: int = 10, chromosome_length: int = 10):
        # create a chromosome with random 0/1 genes
        # Build DNA with `num_chromosomes`, each is a random Chromosome of length `chromosome_length`
        chromosomes = [Chromosome.random(length=chromosome_length) for _ in range(num_chromosomes)]
        return cls(chromosomes)

    def is_all_ones(self):                 # check if every gene is 1
        return all(g.value == 1 for g in self.genes)


    def mutate(self, flip_chance=0.5):
        # Ask each chromosome to mutate its genes independently
        for chrom in self.chromosomes:
            chrom.mutate(flip_chance=flip_chance)

    def is_all_ones(self): # True only if all chromosomes are all 1s
        return all(chrom.is_all_ones() for chrom in self.chromosomes)

    def __repr__(self):
        # Show DNA as 10 lines, one per chromosome
        return '\n'.join(str(chrom) for chrom in self.chromosomes)

    
class Organism:
    def __init__(self, dna:DNA, environment: float): # the environment probability should be in decimals hence float 
        self.dna = dna # Each organism owns a DNA instance
        self.environment = environment # Probability the organism *attempts* to mutate this generation (0.0–1.0)

    def maybe_mutate(self, flip_chance=0.5):
        # Decides whether to mutate this generation based on the environment probability
        if random.random() < self.environment:
            # If "environment triggers" mutation this turn, mutate the DNA
            self.dna.mutate(flip_chance=flip_chance)
    
    def __repr__(self):
        # Helpful printout for debugging/visualizing the organism's DNA
        return f"Organism(env_p={self.environment}):\n{self.dna}"
    

mygene = Gene(0)

mychrom = Chromosome([Gene(0) for _ in range(10)]) # start with all zeros (easy to see flips)
print(mychrom) # 0000000000

mychrom.mutate(flip_chance=1.0)
print(mychrom) # 1111111111

mychrom.mutate(flip_chance=0.0)
print(mychrom) # 1111111111


mydna = DNA.random(num_chromosomes=10, chromosome_length=10)
print(mydna)
# 1111001100
# 0100101000
# 0001111011
# 0011101011
# 1100101000
# 1010000011
# 1001100001
# 0010100011
# 1011000100
# 1101101001

mydna.mutate(flip_chance=1.0)
print(mydna)
# 0000110011
# 1011010111
# 1110000100
# 1100010100
# 0011010111
# 0101111100
# 0110011110
# 1101011100
# 0100111011
# 0010010110

myorg = Organism(dna=mydna, environment=0.0)
print(myorg)
    
    


