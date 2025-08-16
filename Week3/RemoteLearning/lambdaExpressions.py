#  Lambda Expressions

# It is useful for functions that will be used only once
#  they are anonyms functions so they don't have name, they dont need to be store anywhere, just run once and then throw away

# Syntax:

lambda parameter: action(parameter)

my_list = [1, 2, 3]

def multplyby2(item):
    return item*2
# SAME AS 
print(list(map(lambda item: item*2, my_list))) # syntax: lamba - the parameter = the action you want to take on that parameter

