# pURE FUNCTION

# iF given the SAME imput THE FUNCTION always return the SAME output - No self

# example:

def multiply_by2(li):
    new_list = []
    for item in li:
        new_list.append(item*2)
    return new_list 

# If you add a print inside the function, then it interacts with the outout side - if you want zero side effects then just "return"
#  whatever is outside the function, interacts with the outside world and have side effects

#  PURE FUNCTION = less buggy code

print(multiply_by2([1, 2, 3]))

