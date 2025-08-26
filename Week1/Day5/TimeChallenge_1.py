# Timed Challenge #1

# Reverse the Sentence
# Write a program to reverse the sentence wordwise.

# TO HO USE THE REVERSE() FUNCTION
numbers = [1, 2, 3, 4]
numbers.reverse()
print(numbers)
# Output: [4, 3, 2, 1]


# Exercise:

sent = "You have entered a wrong domain"
words = sent.split()
print(words) 
# Output: ['You', 'have', 'entered', 'a', 'wrong', 'domain']

words.reverse()
print(words)
# Output: ['domain', 'wrong', 'a', 'entered', 'have', 'You']

new_sent = " ".join(words)
print(new_sent)
# Output: domain wrong a entered have You