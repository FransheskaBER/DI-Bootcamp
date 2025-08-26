# Daily challenge GOLD: Caesar Cypher

# What You will learn :
# Python Basics
# Conditionals
# Loops

# Instructions
# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given
# message and a given shift.

# You take each letter of your message and shift it by a fixed number in the alphabet
# So you can have your alphabet shifted by 3:
# A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
# So letter A becomes D, B → E, C → F, X → A, Y → B, Z → C

# Example: you want to encryp word CAT, by using the shifted by 3, your encrypted message for CAT is:
# FDW

action = input("Do you want to encrypt or decrypt? Type E for encrypt or D for decrypt = ").upper()
text = input("Enter a word: ").upper()

cypher_text = " "
for letter in text:
    if action == "E":
        unicode = ord(letter) + 3
        cypher_text += chr(unicode - 26 if unicode > ord("Z") else unicode) # The alphabet is 26 numbers so to start again from letter A -26
    elif action == "D":
        unicode = ord(letter) - 3
        cypher_text += chr(unicode - 26 if unicode > ord("Z") else unicode)
print(cypher_text)

#  ord() gives the UNICODE number of a character, for example the unicode of "A" is 65 and "a" is 97
#  chr() turns a number back into a character, so 65 > "A"
#  % wraparound, meaning after Z goes back to A