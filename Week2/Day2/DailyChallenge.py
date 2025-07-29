# DAILY CHALLENGE : FUNCTIONS

# Instructions:
# You are given a “Matrix” string:
# MATRIX_STR = '''
# 7ii
# Tsx
# h%?
# i #
# sM 
# $a 
# #t%'''       

# This represents a grid of characters, and your task is to decode the hidden message within.
# Understanding the Matrix:
# Imagine this string arranged in rows and columns, forming a grid.
# To work with it in Python, you’ll need to transform this string into a 2D list (a list of lists), where each inner list represents a row.

# Step 1: Transforming the String into a 2D List
matrix_str = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''  

# To remove any blank lines or spaces at the beginning or end of a string, use .strip()
# To have a long vertical string instead of multi-lines one after the another horizontally, you can use .split('\n')  - the \n breaks a new line
# Once, you have clean the elements in that string, you need to convert it into a real matrix with a FOR LOOP, to go through each row in rows and then create a list.
# you append the rows to the matrix with empty list you create.
rows = matrix_str.strip().split('\n')
print(rows)
# Output: ['7ii', 'Tsx', 'h%?', 'i #', 'sM ', '$a ', '#t%']

matrix = []
for row in rows:
    matrix.append(list(row)) # Append but convert to a list
print(matrix)
print(type(matrix))


# Step 2: Processing Columns
# Neo reads the matrix column by column, from top to bottom, starting from the leftmost column.
# You’ll need to write code that iterates through the columns of your 2D list.
# Think about how you can access the elements of a 2D list by column.

print(matrix[3][2])
# Output: i (row 1, column 2)
print(type(matrix[3][2]))

# Step 3: Filtering Alpha Characters
# only select alpha characters (a letter from the alphabet, either uppercase or lowercase).
# For each character in a column, check if it’s an alpha character.
# If it is, add it to a temporary string.
# Think about how you can check if a character is an alphabet letter.
# Step 4: Replacing Symbols with Spaces
# Replace every group of symbols (non-alpha characters) between two alpha characters with a space.
# After you have gathered the alpha characters, you will need to iterate through them, and where there are non alpha characters between them, you will insert a space.
# Think about how you can keep track of when you encounter an alphabet character, and when you encounter a non alphabet character.

# To check if a character is an alpha character, use .isalpha()
print('A'.isalpha())
print('9'.isalpha())

clean_matrix = []
for row in matrix:
    alpha_col = []
    for column in row:
        if column.isalpha():
            alpha_col.append(column)
        else:
            alpha_col.append(" ")
    clean_matrix.append(alpha_col)
print(clean_matrix)
# Output: [[' ', 'i', 'i'], ['T', 's', 'x'], ['h', ' ', ' '], ['i', ' ', ' '], ['s', 'M', ' '], [' ', 'a', ' '], [' ', 't', ' ']]



# Step 5: Constructing the Secret Message
# Combine the filtered and processed characters to form the decoded message.
# Print the decoded message.
secret_message = ""
for row in clean_matrix:
    for column in row:
        if column.strip(): # If the column is not empty (.strip() means is going to remove an empty space)
            secret_message += column.strip()
print(secret_message)


