# THE 6 MOST COMMON COLLECTION MODULES THAT HAVE MOST COMMON DATA STRUCTURES

# 1. DEFAULT DICT
from collections import defaultdict  
nums = defaultdict(int)  
nums['one'] = 1  
nums['two'] = 2
nums['three'] = 3 
print(nums['four']) # it returns 0 (for non-existent keys) instead of an exception or key error 

# 2. COUNTER (Count the occurance of a value in a list or array)
from collections import Counter  
list = [1,2,3,4,1,2,6,7,3,8,1,2,2]  
answer=Counter()
answer = Counter(list)  
print(answer[2]) # it will print the number of times the number 2 appears in the list

# 3. DEQUE (you can add or remove items from the start/end of a list)
from collections import deque  
#initialization
list = ["a","b","c"]  
deq = deque(list)  
print(deq)  

#insertion
deq.append("z")  
deq.appendleft("g")  # to add at the start
print(deq)
#removal
deq.pop()  
deq.popleft() # to remove from the start
print(deq)

# 4. NUMEDTUPLE (don't need to remember the index/position of each item in a tuple, it can just return with names the positions)
from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.fname) 

# 5. CHAIN MAP (combines many dictionaries and return a list of dictionaries)
import collections
dictionary1 = { 'a' : 1, 'b' : 2 }  
dictionary2 = { 'c' : 3, 'b' : 4 }  
chain_Map = collections.ChainMap(dictionary1, dictionary2)  
print(chain_Map.maps) 

# 4. ORDERED DICT (make sures that the order of keys/items are mantained)
from collections import OrderedDict  
order = OrderedDict()  
order['a'] = 1  
order['b'] = 2  
order['c'] = 3  
print(order)  

#unordered dictionary
unordered=dict()
unordered['a'] = 1  
unordered['b'] = 2  
unordered['c'] = 3 
print("Default dictionary", unordered)