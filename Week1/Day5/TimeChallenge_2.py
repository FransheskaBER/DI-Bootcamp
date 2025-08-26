# Timed Challenge #2

# Perfect number
# A perfect number is a positive integer that is equal to the sum of its divisors.
# However, the number itself is not included in the sum.

# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.
# Hint: Google perfect numbers

n = int(input('Enter a Number: ')) 
total_sum = 0

for i in range(1, n):
    if n % i == 0:
        total_sum += i
if total_sum == n:
    print(True)
else:
    print(False)

# Input -- Enter the number:6
# Output -- True

# Input -- Enter the number:10
# Output --  False