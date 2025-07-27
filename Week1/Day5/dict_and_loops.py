
# LOOPS (FOR/IN)
# we can iterate and create loops for both the keys and the values.

my_books = {
    'title': 'Harry Potter',
    'author': 'JK Rowling'
}

for key, value in my_books.items():
    print("the " + key + " is " + value)


# LOOPS (RANGE)

# To print a list with a range of numbers, stepping every 2 numbers:
print(list(range(1, 11, 2)))
# Output: [1, 3, 5, 7, 9]


# To enumerate a string "hello", meaning print the char and its index, use FOR/IN:
for char in enumerate('hello'):
    print(char)
#Output:
# (0, 'h')
# (1, 'e')
# (2, 'l')
# (3, 'l')
# (4, 'o')

# You can also add .format() to print in a specific format and order.
for (index, char) in enumerate('WORLD'):
    print('The character {} has an index of {}'.format(char, index))
#Output:
# The character W has an index of 0
# The character O has an index of 1
# The character R has an index of 2
# The character L has an index of 3
# The character D has an index of 4

