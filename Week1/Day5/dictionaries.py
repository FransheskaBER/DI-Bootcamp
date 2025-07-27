# DICTIONARIES are like list in the sense that can be mutable and is dynamic it can grow.

# D need to have a key and a value. The key is the name of the data, and the value is the data itself.

# HOW TO ACCESS THE DATA?
# in LISTS, since the data in lists are ordered in a sequence, we can access them with indexing. For example:

# names = ["John", "Mary"]
# print(f"My name is ", names[0]) #to print "My name is John"

# in DICTIONARIES, we access data via the KEY, no indexing. 

# DICTIONARY SYNTAX:
# my_dictionary = {
#    'KEY1':'VALUE',
#    'KEY2':'VALUE',
#    'KEY3':'VALUE',
#    'KEY4':'VALUE'
# }


# A key-value pair is called ENTRY


user1 = {
    'name': 'John',
    'age': 23,
    'email': 'john@example.com',
    'member': True
} 

# HOW TO ACCESS DATA(VALUES) IN DICTIONARIES:

# Instead of using the index like in list, we will do exactly the same but use the key and not the index number. EXAMPLE:

print(user1['email'])

# TO PRINT ALL THE ITEMS (KEYS-VALUES PAIRS/tuple pairs) IN ONE LINE OF A DICTIONARY USE .items()
print(user1.items())

# OUTPUT: dict_items([('name', 'John'), ('age', 23), ('email', 'john@example.com'), ('member', True)])



# TO UNPACK THE ITEMS OF THE DICTIONARY ONE BY ONE AFTER THE OTHER USE LOOP:
for key, value in user1.items():
    print(key, '-', value)

# OUTPUT:
# name - John
# age - 23
# email - john@example.com
# member - True


# YOU CAN STORE LISTS AND OTHER DICTIONARIES WITHIN A DICTIONARY

user1 = {
    'name': 'John',
    'age': 23,
    'email': 'john@example.com',
    'member': True,
    'best_friend': {
        'best_friend_name':'Carlos',
        'best_friend_email': 'carlos@example.com',
        'member': False
    },
    'fav_fruits': ['apple', 'orange', 'banana']
} 

print(user1.items())


# DICTIONARIES CAN BE USEFUL to store a list of multiple collections like if you want to store the types of products(shirts) you have in your store, for example:

shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

# EXERCISE:

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

# Access the value of key history
print(sample_dict['class']['student']['marks']['history'])


# TO MODIFY A VALUE OF A KEY USE:

user2 = {
    'name':'Mary'
}

user2['name'] = 'John'
print(user2['name'])


# TO ADD A VALUE TO AN EXISTING KEY:

user3 = {
    'name':'Juan',
    'fav_colors': ['blue', 'black']
}

user3['fav_fruits'] = ['apples', 'bananas']

print(user3.items())
# OUTPUT: dict_items([('name', 'Juan'), ('fav_colors', ['blue', 'black']), ('fav_fruits', ['apples', 'bananas'])])


# TO DELETE A KEY IN A DICTIONARY, USE del

del user3['fav_colors']
print(user3.items())
# OUTPUT: dict_items([('name', 'Juan'), ('fav_fruits', ['apples', 'bananas'])])



# KEYS have to be immutable (that cannot be changed), so they can be INT, FLOATS, STR, BOOL, TUPLES


# use the IN keyword to print specific items/values in your dictionary, for example:
shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

for shirt in shirts:
    print(shirt['size'])
#OUTPUT:
# S
# M
# L



# METHODS:

# .keys() to return all the keys in a dictionary
# for <keys> in <Dictionary>.keys():
#     print(<keys>)

# .values() to return all the values in a dictionary

# .items() to return tuples containing the key-value pairs of a dictionary

# .update('x')  to merge the keys/values of the dictionary 'x' into dictionary 'y' (NOTE: values of repetitive keys from the merged dictionary 'x'
# will replace the key/value of 'y' dictionary)


# EXERCISE:
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

#Delete set of keys from Python Dictionary
del sample_dict["name"]
del sample_dict["salary"]
print(sample_dict)


# In JavaScript dictionaries are called Objects

# CLASS:

student_info = {
    'name': 'Harry',
    'last_name': 'Potter',
    'age': 14,
    'address': 'privet drive 4',
    'pets': ['Hedwig', 'Buckbeak'], #List
    'houses':{ #dictionary
        'main': 'Griffyndor',
        'second':'Slythering'
    },
    'best_friends': ('Ron Weasley', 'Hermione Granger') #Tuple
}

# ACCESS DATA and USE METHODS on values:
print(student_info['last_name'])
print(student_info['pets'][0]) #you are using index because "pets" is a LIST

# to add a item to a list
student_info['pets'].append('Fenix') #because "Pets" is a LIST, you can use the list method of append

print(student_info['pets'])

# to print sth upper case
print(student_info['name'].upper())

# to change address
student_info['address'] = 'Howgarts'
print(student_info['address'])

# to delete a key
del student_info['age']
print(student_info)

# to create a new key-value pair to the dictionary (added to the last part of the dictionary)
student_info['teachers'] = {'dumbleadore', 'Snap'}
print(student_info)

# ANOTHER WAY TO CREATE OR ADD STH TO THE DICTIONARY IS: to add sth to the dictionary, use .update()
student_info.update({'patronum': 'stag'})
print(student_info)

# to print just keys:
for keys in student_info.keys():
    print(keys)

# to print values:
for values in student_info.values():
    print(values)

# to print key and value:
for key, value in student_info.items():
    print(f"{key} - {value}")
# the output will give you tuples, which you can unpack by having (key, value)

# EXERCISE 2:
pet_info = {
    'weight': 54,
    'age': 1,
    'name': 'pepper'
}

non_used = ['age', 'name']

print(pet_info)

#to delete keys we can use the del, but let's use a FOR loop. Loop over the list of items not used or to be removed, and then delete them if those items appear
# in the main dictionary.
for key in non_used:
    if key in pet_info:
        del pet_info[key]

print(pet_info)


# ZIP built-in function:
# Zip help you relate different lists, tuples, etc and from that you can make a dictionary

names = ["juliana", "fran", "alesa"]
addresses = ["ramat gan", "jerusalem", "tel aviv"]

zip(names, addresses) #then we need to convert it into a data structure, whether is a list, set, etc...
print(list(zip(names, addresses)))
# output: [('juliana', 'ramat gan'), ('fran', 'jerusalem'), ('alesa', 'tel aviv')]

subjects = ["math", "history", "english"]
grades = [85, 90, 100] #INT

print(dict(zip(subjects, grades)))
# output: {'math': 85, 'history': 90, 'english': 100}

# NOTE: if you have for example, more grades than subjects, the extra grades won't be recorded into the dictionary you are converting/creating it.