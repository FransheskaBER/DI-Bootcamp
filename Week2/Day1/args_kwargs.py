
# ARGS stand for ARGUMENTS like lists, tuples, sets

students = ['john', 'mary', 'louise', 'ron']

def welcome_students(*args): # means that I can pass here any list and not just students
    if args:
        for student in args:
            print(f"Welcome to Python, {student}!")
    else:
        print("you didn't pass names")

welcome_students('Cami', 'Josh', 'Matteo')



# KWARGS stand for KEY-WORD ARGUMENTS like dictionaries

def user_info(**kwargs):
    print(kwargs)
    for value in kwargs.values():
        print(value)

user_info(name = 'Fran', email = 'fran@gmail.com', age = 33, online = True, pets = ['cats', 'dogs'])

