# Exercises XP Ninja
# Last Updated: May 28th, 2025

# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Classes and Object


# Exercise 1 : Call History
# Instructions
# Create a class called Phone. This class takes a parameter called phone_number.
# When instantiating an object create an attribute called call_history which value is an empty list.

# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters.
# The method should print a string stating who called who, and add this string to the phone’s call_history.

# Add a method called show_call_history. This method should print the call_history.

# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method.
# Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    
    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)
    
    def show_call_history(self):
        for call in self.call_history:
            print(call)
    
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)

    def show_outgoing_messages(self):
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, number):
        for msg in self.messages:
            if msg["from"] == number:
                print(msg)

p1 = Phone("1234")
p2 = Phone("5678")

p1.call(p2)  
p1.show_call_history()

p1.send_message(p2, "Hey!")
p1.send_message(p2, "What’s up?")
p1.show_outgoing_messages()

    


