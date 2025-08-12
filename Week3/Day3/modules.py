# Modules

# IMPORT statement: are single python files than can be imported to be used in other python files
# we import python files by using the statement:
# import


# FROM statement: you can call specific methods or functions from a module by using FROM statement like:
# from mymodule import myfunction


# AS statement: you can use the AS statement to change the name of your module like:
# import mymodule as mochi


# PIP statament: it a manager of python packages. this statement can downlownd and install packages alone. you can use the package from the terminal.

# PACKAGE: a package is made up of multiple python files (in other words, multiple modules you can say) and it can include libraries like C or C++,
# it is an entire folder

# some MODULES examples:

# 1: time
# 2: random
# 3: requests
# 4: os


#from faker import Faker
#fake = Faker()
#print(fake.date())

# OS module
#create directories(folders) and files within each directory

import os

os.mkdir("Week4") # to create a folder

os.mksir(os.path.join("Week4", "Day1")) # to create another sub-folder within a folder

# to create a file within a sub-folder, use the pathlib function from module path
from pathlib import Path

base = Path("week 3")
base.mkdir(parents=True, exist_ok=True)
file = base / "notes.py"
file.touch(exist_ok=True)

#parents=True: also create any missing parent folders.
#exist_ok=True: don’t error if it already exists.
#touch makes an empty file if it’s missing (or just updates its timestamp if it exists).




# TO MEASURE HOW MUCH TIME YOUR CODE TAKES TO EXECUTE USE THE TIME MODULE, example:
import time

before = time.time()
#your code block
after = time.time()

print(f"It took {after - before} seconds to execute my code in comment")



#To know the date of today or later, use:
import datetime

today_date = datetime.date.today()
actual_datetime = datetime.datetime.now()
in_15_hours = actual_datetime + datetime.timedelta(hours=15, minutes=10)

print(f"Today is the {today_date.day}/{today_date.month}")
print(f"In 15 hours and 10 minutes it will be the {in_15_hours.day}/{in_15_hours.month}")

# to change the format of the date, use "strftime":
import datetime

today_date = datetime.date.today()
actual_datetime = datetime.datetime.now()
in_15_hours = actual_datetime + datetime.timdelta(hours=15, minutes=10)

print(f"Today is the {today_date.strftime("%d/%m")}")
print(f"In 15 hours and 10 minutes it will be the {in_15_hours.strftime("%d/%m")}")
