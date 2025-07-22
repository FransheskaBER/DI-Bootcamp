#CONDITIONALS

#SYNTAX
#IF <CONDITION>:
#   ACTION

# if 5 < 3:
#     print("hello world")
# else:
#     print("not hello to you")

user_name = input("Enter your name? ")
# print("Nice to meet you", user_name)

if len(user_name) > 5: #the len function converts eveything to an integer
    print("Nice name")
elif len(user_name) < 5:
    print("Your name is too short")
else:
    print("you need to enter your name")

#to add more confitionals use "and"
#example: if len(user_name) > 5 and user_name[0] == "R":

