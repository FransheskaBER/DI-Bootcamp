from datetime import datetime, date

class Person:
  number_of_persons = 0 # This is an attribute of the class Person
  def __init__(self, first_name, last_name, birthdate):
    self.first_name = self.format_name(first_name)
    self.last_name = last_name
    self.birthdate = self.parse_birthdate(birthdate) # call the static method to automatically convert the birthdate into an object and not string
    Person.number_of_persons += 1 # here you keep track of how many instances of persons you have created
    
  @staticmethod # this is a static method to convert the birthdate string into an object
  def parse_birthdate(date_str):
    return datetime.strptime(date_str, "%d,%m,%Y").date()
  
  @staticmethod
  def format_name(name):
     if not name[0].isupper():
        return name.capitalize()
     else:
       return name
  
  @classmethod
  def from_age(cls, first_name, last_name, age):
    current_year = datetime.today().year
    birth_year = current_year - age
    birthdate = f"01,01,{birth_year}"
    return cls(first_name, last_name, birthdate)
  
  @property
  def age(self): # Here you use the name of the attribute/property as the name of the function
    today = date.today()
    age = today.year - self.birthdate.year
    return age
  
  def __str__(self):#USE THIS METHOD to print the values when using the instance itself in a print like print(person1). otherwise you will get <__main__.Person object at 0x000....>
    return f"\n {self.first_name} \n {self.last_name} \n {self.birthdate}" 

  #You can also use __repr__ like:
  def __repr__(self):
    return f"{self.__dict__}"

# the difference is that __str__ is to displayed info in the UI and the __repr__ is to display the info to the dveloper
# so the data will be displayed in a dictionary format (an object) for the dev like {"name": "Jon", "last_name", "Snow"....}

  def __lt__(self, other): #Less Then
    return self.age < other.age #here you want to check if two instances/objects, if one of them is bigger or smaller in age than each other
  
  def __eq__(self, other): #Equal
    return self.age == other.age #here you want to check if two instances/objects, if one of them is bigger or smaller in age than each other


person1 = Person("fran", "echevarria", "20,06,1992")
print(person1.age)
print(repr(person1))

person2 = Person.from_age("steff", "rojas", 60) # call the method from the class and not object like person1.birthdate
print(person2.birthdate)

print(person2.age) # when calling the age, you call like a property and not like a function with the parentehesis ()

print(person1 < person2)

person3 = Person("MOLLY", "SALAZAR", "20,06,1992")
print(person3.age)

print(person1 == person3)