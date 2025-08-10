# EXERCISES

picture = [
    [0,0,0,1,0,0,0]
    [0,0,1,1,1,0,0]
    [0,1,1,1,1,1,0]
    [1,1,1,1,1,1,1]
    [0,0,0,1,0,0,0]
    [0,0,0,1,0,0,0]
]

for row in picture:
    for number in row:
        if number == 0:
            print(" ", end="") # The end="" tells python not to add a new line
        if number == 1:
            print("*", end="")
    print()