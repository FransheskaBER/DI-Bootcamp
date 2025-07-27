# students = ['john', 'mary', 'louise', 'ron']

# def welcome_students():
#     for student in students:
#         print(f"Welcome to Python, {student}!")

# welcome_students()





# def welcome_students(*args):
#     if args:
#         for student in args:
#             print(f"Welcome to Python, {student}!")
#     else:
#         print("you didn't pass names")

# welcome_students('Cami', 'Josh', 'Matteo')



def country_info(country = 'Naboo') -> str:
    '''Returns the capital of a given country'''
    if country == 'Peru':
        capital = 'Lima'
        population = 1438000000
        return capital, population
    
    elif country == 'Iceland':
        capital = 'Reykjavik'
        population = 300000
        return capital, population
    
    elif country == 'Naboo':
        capital = 'Theed'
        population = 2000
        return capital, population
    
    else:
        return 'Unknown Country'

# print(country_info()) #print the default
# print(country_info('Peru')) #prints first IF condition
# print(country_info('Colombia')) #prints ELSE condition
