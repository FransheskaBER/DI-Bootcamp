# Daily challenge: Translator
# Last Updated: September 13th, 2024

# What You will learn :
# Modules


# Instructions :
# Consider this list

from googletrans import Translator

# create an instance(object) of the class Translator
translator = Translator()

# new dict
new_words = {}

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
for word in french_words:
    translated_word = translator.translate(word, src="fr", dest="en").text
    new_words[word] = translated_word

print(new_words)
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module. Take a look at the googletrans module