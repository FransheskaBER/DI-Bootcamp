# CHALLENGES

# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.
fruits = ["Orange", "Banana", "Apple", "Strawberry"]
print(fruits)

fruits.insert(4, "Kiwi")
print(fruits)


# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.
users = "I love python and coding"
spaces = users.count(" ")
print(spaces)


# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.
string = "I Love Python"

def upperLower(text):
    countUpper = 0
    countLower = 0
    for char in text:
        if char.isupper():
            countUpper += 1
        elif char.islower():
            countLower += 1
    print(f"Total upper case letters: {countUpper}")
    print(f"Total upper case letters: {countLower}")

upperLower(string)

# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:

# >>>my_sum([1,5,4,2])
# >>>12
array = [1, 2, 3, 4, 5]

def totalSum(array):
    total = 0
    for number in array:
        total += number
    return total

print(totalSum(array))


# Exercise 5
# Instructions
# Write a function to find the max number in a list

# >>>find_max([0,1,3,50])
# >>>50
listNum = [3, 46, 13, 678, 456, 3596, 999]

def findMax(array):
    maxNumber = array[0] 
    for number in array:
        if number > maxNumber:
            maxNumber = number
    return maxNumber

print(findMax(listNum))

# Exercise 6
# Instructions
# Write a function that returns factorial of a number

# >>>factorial(4)
# >>>24
def mathFac(number):
    result = 1
    for i in range(1, number+1):
        result *=i
    return result

print(mathFac(4))


# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):

# >>>list_count(['a','a','t','o'],'a')
# >>>2
def list_count(my_list, countItem):
    count = 0
    for item in my_list:
        if item == countItem:
            count += 1
    return count

print(list_count(['a','a','t','o'],'a'))


# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

# >>>norm([1,2,2])
# >>>3
def norm(my_list):
    total = 0
    for number in my_list:
        total += number ** 2 # add the square by using exponentiation  
    return total ** 0.5 # takes the square root by using exponentiation 0,5 (means take the square root of total)
        

print(norm([1,2,2]))


# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)

# >>>is_mono([7,6,5,5,2,0])
# >>>True

# >>>is_mono([2,3,3,3])
# >>>True

# >>>is_mono([1,2,0,4])
# >>>False

def isMono(myList):
    increasing = True
    decreasing = True
    
    for num in range(len(myList) - 1):
        if myList[num] > myList[num + 1]:
            increasing = False
        if myList[num] < myList[num + 1]:
            decreasing = False
    return increasing or decreasing
         
print(isMono([7,6,5,5,2,0]))
print(isMono([2,3,3,3]))
print(isMono([1,2,0,4]))



# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.
wordList = ["Hello", "Hi", "Goodbye", "welcome!", "How are you doing?"]

def longStr(mylist):
    longStr = ""    
    for string in mylist:
        if len(string) > len(longStr):
            longStr = string
    return longStr

print(longStr(wordList)) 



# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
allList = [3, 4, "hello", "hi", 7, 6, 5, "Bye", "Bless"]

def sortList(myList):
    integers = []
    strings = []

    for item in myList:
        if isinstance(item, int):
            integers.append(item)
        elif isinstance(item, str):
            strings.append(item)
    return integers, strings

print(sortList(allList))



# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:

def is_palindrome(word):
    if word == word[::-1]:
        return True
    else:
        return False
    
print(is_palindrome('radar'))
# >>>True
print(is_palindrome('John'))
# >>>False




# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:

sentence = 'Do or do not there is no try'
k=2

def sum_over_k(sentence,k):
    totalw = 0
    words = sentence.split()
    for word in words:
        if len(word) > k:
            totalw += 1
    return totalw

print(sum_over_k(sentence, k))
# >>>3


# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):

def dict_avg(dictionary):
    values = dictionary.values()
    return round(sum(values) / len(values))

print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))
# >>>3



# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:

# >>>common_div(10,20)
# >>>[2,5,10]
def divisor(num1, num2):
    result = []
    for num in range(1, min(num1, num2) + 1): # to include the number itself, so if 3 then is 1, 2, 3 and not just 1, 2
        if num1 % num == 0 and num2 % num == 0:
            result.append(num)
    return result

print(divisor(10, 20))



# Exercise 16
# Instructions
# Write a function that test if a number is prime:

# >>>is_prime(11)
# >>>True
def is_prime(num1):
    divisors = []
    for num in range(1, num1 + 1): # to include the number itself, so if 3 then is 1, 2, 3 and not just 1, 2
        if num1 % num == 0:
            divisors.append(num)
    if len(divisors) == 2:
        return True
    else:
        return False

print(is_prime(11))
print(is_prime(4))



# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:

# >>>weird_print([1,2,2,3,4,5])
# >>>[2,4]
def weird_print(mylist):
    evenNum = []
    for index, value in enumerate(mylist): # Use enumerate() If you need both the index and the value when looping
        if index % 2 == 0 and value % 2 == 0:
            evenNum.append(value)
    return evenNum

print(weird_print([1,2,2,3,4,5]))


# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
def type_count(**kwargs):
    count = {}
    for value in kwargs.values():
        typeVal = type(value).__name__ # get the type name of the value
        if typeVal in count:
            count[typeVal] += 1
        else:
            count[typeVal] = 1
    return count
            
print(type_count(a=1,b='string',c=1.0,d=True,e=False))
# >>>int: 1, str:1 , float:1, bool:2



# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.

# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
def manualSplit(string, delimiter=" "):
    newArr = []
    current = ""
    for char in string:
        if char == delimiter:
            if current:
                newArr.append(current)
                current = " "
        else:
            current += char # build the current word
    if current:
        newArr.append(current)
    return newArr

print(manualSplit("Hello, I am fransheska. Nice to meet you!"))



# Exercise 20
# Instructions
# Convert a string into password format.

# Example:
# input : "mypassword"
# output: ***********

def secretPass(string):
    return len(string)* "*"

print(secretPass("mypassword"))