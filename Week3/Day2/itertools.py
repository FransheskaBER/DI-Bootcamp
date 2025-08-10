# ITERATORS:
# infinate (run forever)
# finite (stop at a certain condition)

# INFINATE ITERATORS:
# these iterators include functions like Count, Cycle, and Repeat.

# 1. COUNT:
#to print the first four even numbers:
import itertools

result = itertools.count(start = 0, step = 2) #Count function takes 2 arguments (if they're not given, defaul: start 0 / setp 1)
# the count function returns this iterator:
for number in result: 
# termination condition
    if number < 8:
        print (number)
    else:
        break

# 2. CYCLE:
# print 2 three times
import itertools

result = itertools.cycle('12345') #Cycle takes an iterable and goes over it one element at a time indefinitely
counter = 0

for number in result:
# termination condition
    if counter < 10 :
        print (number)
        counter = counter + 1
    else:
        break

# 3. REPEAT:
# print hello two times
import itertools

result = itertools.repeat('hello', times = 2) #Repeat takes an iterable and goes over it as a whole indefinitely

for word in result:
    print (word)


# FINITE ITERATORS:

# 1. CHAIN
# iterate over three lists
import itertools

list_one = ['a', 'b', 'c']
list_two =['d', 'e', 'f']
list_three = ['1', '2', '3']

result = itertools.chain(list_one, list_two, list_three) # Chain accepts a variable number of iterables and goes thro each of them one by one

for element in result:
  print (element)
# output:
# a
# b
# c
# d
# e
# f
# 1
# 2
# 3

# 2. COMPRESS
#find the names of people who have the flu
import itertools

names = ['Alice', 'James', 'Matt']
have_flu = [True, True, False]

result = itertools.compress(names, have_flu) #Compress takes an iterable and selector and returns the iterables with TRUE as selector values

for element in result:
  print (element)
# output:
# Alice
# James



# 3. DROPWHILE
import itertools

my_list = [0, 0, 1, 2, 0]

result = itertools.dropwhile(lambda x: x == 0, my_list)

for elements in result:
  print (elements)