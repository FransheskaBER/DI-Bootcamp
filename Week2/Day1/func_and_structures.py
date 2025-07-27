# FUNCTIONS AND DATA STRUCTURES

students = ['john', 'mary', 'louise', 'ron']

# Create a function that says welcome to python to each student

def welcome_students():
    for student in students:
        print(f"Welcome to Python, {student}!")

welcome_students()


# modify the list and add a value to each item, in this case add the same house to all students

def get_house():
    for i, student in enumerate(students):
        students[i] = f'{student} - Griffyndor' #we are defining by index, so we don't need to pass the argumnet, students within ()

get_house()

print(students)



