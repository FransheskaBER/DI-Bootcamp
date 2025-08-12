# PYTHON File I/O

# OPEN A FILE:
f = open('secrets.txt')
# OR 
f = open("C:/Python33/secrets.txt")  # specifying full path

# When we open a file we specify whether we want to read 'r', write 'w' or append 'a' to the file.

# SYNTAX: file_object = open(file_name, access_mode)

# file_name : the name of a file including its path.
# access_mode : an optional parameter which decides the purpose of opening a file, e.g. read, write, append




# WRITE A FILE:
# Add a second argument to the function, 'w' which stands for write.
# Passing 'w+' lets us read and write to the file

f = open('secrets.txt','w+')

#Opening a file with 'w' or 'w+' truncates the original, meaning that anything that was in the original file is deleted!
# Write to the file
f.write('This is a new line')




#APPEND TO A FILE:f = open('secrets.txt','a+')
f = open('secrets.txt','a+')
f.write('\nThis is text being appended to test.txt')
f.write('\nAnd another line here.')



#CLOSE A FILE:
#When we are done with operations to the file, we need to properly close the file.
#Closing a file will free up the resources that were tied with the file and is done using Python close() method.
f = open('secrets.txt')
f.close()

#another safer way to close file:
f = open('output.txt', 'w')
for i in range(10):
    f.write("this is line: %i\n"%i)
f.close()

# Same as
with open('output.txt', 'w') as f:
# perform file operations
# Out of the with : the file is closed
# f.closed is True
    for i in range(10):
       f.write("this is line: %i\n"%i)