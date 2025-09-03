import random
# Mini-Project #2 - Hangman

# What you will learn
# Conditionals
# Loops
# Functions
# Modules

# What you will create
# Use python to create a Hangman game.

# Instructions
# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
placeholder = ["_"]*len(word) # create a placeholder list
body_part = ["head", "body", "left arm", "right arm", "left leg", "right leg"]
guessed_letter = []

print(f"This is your secret word {placeholder}")

def play():
    wrong = 0
    while wrong < len(body_part) and "_" in placeholder:
        user_guess = input("Enter a letter: ").lower()

        if user_guess in guessed_letter:
            print("Already guessed!.")
            continue

        if user_guess in word:
            for position, letter in enumerate(word): # use enumerate() to get position and letter
                if letter == user_guess:
                    placeholder[position] = user_guess
                    print(f"Great guess: {placeholder}")
                guessed_letter.append(user_guess)
        
        else:
            print(f"Wrong! Adding {body_part[wrong]}")
            wrong += 1
    
    if "_" not in placeholder:
        print(f"🎉 You won! The word was: {word}")
    else:
        print(f"💀 Game over. The man is dead. The word was: {word}")

play()
        
    


            
        
        







