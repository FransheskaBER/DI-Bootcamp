import string
import re

# Daily challenge : Text Analysis

# Key Python Topics:
# OOP (Classes, Class Methods, Inheritance)
# File handling (open())
# String manipulation (split(), join(), translate(), regular expressions)
# Dictionaries
# Sets
# Lists
# string module
# re module (regular expressions)

# Instructions:
# Create a Text class to analyze text data, either from a string or a file. Then, create a TextModification class to perform text cleaning.

# Part I: Analyzing a Simple String

# Step 1: Create the Text Class
# Create a class called Text.
# The __init__ method should take a string as an argument and store it in an attribute (e.g., self.text).

# Step 2: Implement word_frequency Method
# Create a method called word_frequency(word).
# Split the text attribute into a list of words.
# Count the occurrences of the given word in the list.
# Return the count.
# If the word is not found, return None or a meaningful message.

# Step 3: Implement most_common_word Method
# Create a method called most_common_word().
# Split the text into a list of words.
# Use a dictionary to store word frequencies.
# Find the word with the highest frequency.
# Return the most common word.

# Step 4: Implement unique_words Method
# Create a method called unique_words().
# Split the text into a list of words.
# Use a set to store unique words.
# Return the unique words as a list.

# Step 5: Implement from_file Class Method
# Create a class method called from_file(file_path).
# Open the file at file_path in read mode.
# Read the file content.
# Create and return a Text instance with the file content as the text.

# Bonus: Text Modification

# Step 6: Create the TextModification Class
# Create a class called TextModification that inherits from Text.
      
# Step 7: Implement remove_punctuation Method
# Create a method called remove_punctuation().
# Use the string module to get a string of punctuation characters.
# Use a string method or regular expressions to remove punctuation from the text attribute.
# Return the modified text.

# Step 8: Implement remove_stop_words Method
# Create a method called remove_stop_words().
# Search online for a list of English stop words (common words like “a”, “the”, “is”).
# Split the text into a list of words.
# Filter out stop words from the list.
# Join the remaining words back into a string.
# Return the modified text.

# Step 9: Implement remove_special_characters Method
# Create a method called remove_special_characters().
# Use regular expressions to remove special characters from the text attribute.
# Return the modified text.

class Text:
    def __init__(self, text):
        self.text = text
    
    def word_frequency(self, word):
        new_list = self.text.split()
        count = new_list.count(word)
        if count > 0:
            return count
        else:
            return None
    
    def most_common_word(self):
        new_list = self.text.split()
        freq_dict = {}
        for word in new_list:
            if word in freq_dict:
                freq_dict[word] += 1
            else:
                freq_dict[word] = 1
        common_w = max(freq_dict, key=freq_dict.get) # max(dictionary, key=dictionary.get) → gives the key with the highest value.
        return common_w
    
    def unique_words(self):
        new_list = self.text.split()
        unique_w = set(new_list)
        return list(unique_w)
    
    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as f:
            file_content = f.read()
            return cls(file_content) # cls is class so Text and what goes into () is the instance

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def remove_punctuation(self):
        cleaned_text = self.text.translate(str.maketrans("", "", string.punctuation))
        return cleaned_text
    
    def remove_stop_words(self):
        stop_words = ["a", "the", "is", "for", "from", "in", "on", "or", "with", "without"]
        new_list = self.text.split()
        filtered_words = []
        for word in new_list:
            if word not in stop_words:
                filtered_words.append(word)
        modified_text = " ".join(filtered_words)
        return modified_text
    
    def remove_special_characters(self):
        cleaned_text = re.sub(r"[^A-Za-z0-9\s]", "", self.text)
        return cleaned_text

my_text = Text("the cat in the hat knows a lot about the cat")
print(my_text.word_frequency("cat"))    # Expect 2
print(my_text.word_frequency("hat"))    # Expect 1
print(my_text.word_frequency("dog"))    # Expect None
print(my_text.most_common_word())       # Expect "the" (it appears 3 times, more than others)
print(my_text.unique_words())           # Expect a list like ['in', 'lot', 'the', 'knows', 'cat', 'about', 'a', 'hat']

# create an object from file
my_text = Text.from_file("exampletext.txt")

# now test it
print("Class type:", type(my_text))       # Expect: <class '__main__.Text'>
print("Text content:", my_text.text)      # Expect: "the cat in the hat knows the cat"

mod = TextModification("Hello, world! This is a test -- with punctuation!!!")

print(mod.remove_punctuation())
# Expected: "Hello world This is a test  with punctuation"

print(mod.remove_stop_words())
# With your stop words list → "Hello, world! This test -- punctuation!!!"

print(mod.remove_special_characters())
# Expected: "Hello world This is a test  with punctuation"
