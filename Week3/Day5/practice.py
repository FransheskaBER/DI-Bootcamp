#Read the file line by line


with open("name.txt", "r") as f:
    for i in f.readlines():
        print(i)



#Read only the 5th line of the file
with open("name.txt", "r") as f:
    print(f.readlines(5))

#Read only the 5 first characters of the file
with open("name.txt", "r") as f:
    text = f.read()[0:5]
    print(text)


#Read all the file and return it as a list of strings. Then split each word into letters

#Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
new_dict = {"Darth":0, "Luke":0, "Lea":0}
with open("name.txt", "r") as f:
    for i in f.readlines():
        new_dict[i.rstrip()] += 1
print(new_dict)


#Append your first name at the end of the file
#with open("name.txt", "a") as f:
#    f.write("\nFransheska")

#Append "SkyWalker" next to each first name "Luke" (first reading, then transforming, then writing - overwrite file)
with open("name.txt", "r") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    text = line.rstrip("\n") #remove only newline but keep spaces
    if text == "Luke":
        new_lines.append("Luke Skywalker\n")
    else:
        new_lines.append(line)

with open("name.txt", "w") as f:
    f.writelines(new_lines)