# REGULAR EXPRESSION (RegEX)

# it is a mini-language, a pattern of sequences, that let's Python quickly find, check, or replace text that follows certain rules.

# the pattern = a rule I or someone writes.  for example: "\d+" it means "one or more digits"

# match = means that that text that someone enters fits my rule, in this case "\d+" or can be alone "+" or "\" or "d"

# how to start using RegEx:

#1. Start by importing it with: Import re

#2:  Start searching for a simple word

#3: Swap the word with a pattern like "\d+" to grab numbers

import re

text = "Call me at 555-123 or 777-888 tomorrow. Price: 1200 NIS."
print(re.findall(r"\d{3}-\d{3}", text))
# it means: Find all 3 digits together with a dash - in the text given above and print it
 # Expect: ['555-123', '777-888']

print(re.findall(r"\d{3}", text))
# find all 3 digists together and print them
# output: ['555', '123', '777', '888', '120']

print(re.findall(r"\d+", text))
# Find all number chunks in the text and print them
# output: ['555', '123', '777', '888', '1200']

print(re.sub(r"\s+", " ", "Too    many   spaces"))
# Find and Replace: Look for one or more whitespace characters, then with " " means replace that matched chunk with a single space, and the last string is the input text
# \s means any whitespace (space, tab, newline) and + means one or more in a row.
# output: "Too many spaces"



string = "at what time?"
match = re.findall('at',string)
print (match)
#find all the "at" in the string given



string = "at what time?"
match = re.search('w',string)

if (match):
    print ("String found at: " ,match.start()) # the first occurrance is return the index 0 because at is 0-1 but it return 0 because it matches at 0
else:
    print ("String not found!")


string = "at what time?"
match = re.split('a',string) # this will remove "a" and split it with the following letter or space and continue until it encounter another "a" and split again
print (match)
#output: ['', 't wh', 't time?']

string = "at what time?"
match = re.sub("\s","!!!",string) # re.sub(find, replace, from this text)
#find any whitespace, replace with !!!, in the text given in the string variable
print (match)