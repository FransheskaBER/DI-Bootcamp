# Instructions:
# 1. Ask for User Input:
# The string must be exactly 10 characters long.

user_password = input("What's your password? ")

# 2. Check the Length of the String:
# If the string is less than 10 characters, print: "String not long enough."
# If the string is more than 10 characters, print: "String too long."
# If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps.

password_length = int(len(user_password))

if password_length < 10:
    print("Password is not long enough")
elif password_length > 10:
    print("Password is too long")
elif password_length == 10:
    print("Perfect password")

# 3. Print the First and Last Characters:
# Once the string is validated, print the first and last characters.

print(user_password[0])
print(user_password[-1])

# 4. Build the String Character by Character:
# Using a for loop, construct and print the string character by character. Start with the first character, then the first two characters, and so on, until the entire string is printed.
# Hint: You can create a loop that goes through the string, adding one character at a time, and print it progressively.

progress = ""

for letter in user_password:
    progress += letter
    print(progress)

# 5. Bonus: Jumble the String (Optional)
# As a bonus, try shuffling the characters in the string and print the newly jumbled string.
# Hint: You can use the random.shuffle function to shuffle a list of characters.

import random
word = "orange"
print(word)

list_word = list(word) #shuffle function works only with lists

random.shuffle(list_word)

new_word = list_word

print(new_word)


