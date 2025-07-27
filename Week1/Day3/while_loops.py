# when to use WHILE LOOP instead of a FOR LOOP:

# Use WHILE LOOP to create a loop until a specific condition is met, then it stops. We don't know when to stop and includes some condition to stop.

# FOR LOOP we already have a clear way to when we want to stop.

# WHILE LOOP SYNTAX:

# while <condition>:
#     <Execute loop until condition is false or until there is a 'break' keyword>

fruits = ['apple', 'orange', 'banana']
i = 0

while i < len(fruits):
    print(i)
    i += 1
# Output:
# 0
# 1
# 2 

# EXERCISE:

ticket_cost = 0

while True: #the true means that the code will continue happening until we break
    input_age = input("Enter the age of the person or enter 'done' to finish): ")
    if input_age == 'done': #keep it as it is STR to work, then convert to INT
        break
    age = int(input_age) #convert the input to int to do the conditional math operation/comparison
    if age < 3:
        print("This age does not pay anything. They can watch the movie for FREE.")
        price = 0
        continue
    elif age >=3 and age <= 12:
        print("For this age, you will pay 10 dollars")
        price = 10
    else:
        print("For this age, you will pay 15 dollars")
        price = 15

    ticket_cost += price #the += symbol means to incremet by.. 

print(f"the total cost of all of your tickets is $", ticket_cost)


# use FLAG to set a variable to TRUE or FALSE
#flag example in a game:
winner = False

while not winner:
    position = input("Enter the position between 1 to 9") #while we don't have a winner, keep asking for the input











