# JSON DATABASES > JavaScript Object Notation

# it is a text file that stores a python dictionary

import json

# CONVERSION BETWEEN PY AND JSON:

# dict              > object
# list, tuple       > array
# str               > string
# int, long, float  > number
# True              > true
# False             > false
# None              > null

#let's import a python dictionary to a json file
my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = "my_file.json" #this is my json object

with open(json_file, 'w') as file_obj: #let's open the json file and add the json object
    json.dump(my_family, file_obj) # save my ptyhon dictionarry in my json object
   #json.dump(obj2save , destination_file)


# CONVERT A PYTHON DICT INTO A JSON STRING:
my_family = {
    "parents" :['Beth', 'Jerry'],
    "children" :['Summer', 'Morty']
}

json_my_family = json.dumps(my_family)
print(json_my_family)
# >> {"parents": ["Beth", "Jerry"], "children": ["Summer", "Morty"]}