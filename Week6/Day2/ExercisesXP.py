import psycopg2

connection = psycopg2.connect(
    database = "bootcamp",
    user = 'postgres',
    password = 'Franshsk19',
    host = 'localhost',
    port = '5432'
)
cursor = connection.cursor()

# Exercises XP

# What we will learn:
# Python and Database

# Exercise 1 : Restaurant Menu Manager
# Instructions
# Description: Create a restaurant menu management system for a manager. The program should allow the manager
# to view the menu, add an item and delete an item.

# PART 1 - In this exercise we will use PostgreSQL and Python.
# Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns
# item_id : SERIAL PRIMARY KEY
# item_name : VARCHAR(30) NOT NULL
# item_price : SMALLINT DEFAULT 0
# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table.
# The update method can update the name as well as the price of an item.
# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name,
# if an object is not found (there is no item matching the name in the get_by_name method) return None.
# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

# cursor.execute('''CREATE TABLE menu_items(
#                item_id SERIAL PRIMARY KEY,
#                item_name VARCHAR(30) UNIQUE NOT NULL,
#                item_price SMALLINT DEFAULT 0)
#                ''')
# connection.commit()

# cursor.execute('''INSERT INTO menu_items(item_name, item_price) VALUES
#                ('Margherita Pizza', 8.99),
#                ('Pepperoni Pizza', 10.49),
#                ('Cheeseburger', 9.25),
#                ('Veggie Burger', 8.75),
#                ('Caesar Salad', 7.50),
#                ('Greek Salad', 7.95),
#                ('Spaghetti Bolognese', 11.20),
#                ('Grilled Chicken Sandwich', 9.80),
#                ('French Fries', 3.99),
#                ('Chocolate Cake', 4.50);
#                ''')
# connection.commit()

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def save(self):
        query = f'''INSERT INTO menu_items(item_name, item_price) VALUES (%s, %s)'''
        cursor.execute(query, (self.name, self.price))
        connection.commit()
    
    def delete(self):
        query = "DELETE FROM menu_items WHERE item_name = %s"
        cursor.execute(query, (self.name,))
        connection.commit()
    
    def update(self, new_name, new_price):
        query = "UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s and item_price = %s"
        cursor.execute(query, (new_name, new_price, self.name, self.price))
        connection.commit()
        self.name = new_name
        self.price = new_price

class MenuManager:
    def __init__(self, name):
        self.name = name

    @classmethod
    def get_by_name(cls, name):
        query = "SELECT item_name, item_price FROM menu_items WHERE item_name = %s"
        cursor.execute(query, (name,))
        row = cursor.fetchone()
        if row:
            print(row[0], row[1])
            return MenuItem(row[0], row[1]) 
        else:
            print(None)
            return None
    
    @classmethod
    def all_items(cls):
        cursor.execute("SELECT * FROM menu_items")
        rows = cursor.fetchall()
        for id, name, price in rows:
            print(id, name, price)

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Mushroom Burger', 37)
# item2 = MenuManager.get_by_name('Veggie Burger')
# items = MenuManager.all_items()


# Part 2
# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself,
# but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu.
# This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s
# menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply
# create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# show_restaurant_menu() - print the restaurant’s menu.

# When the user chooses to exit the program, display the restaurant menu and exit the program.

def show_user_menu():
    while True:
        user_input = input("Choose the first letter of what you want to do, view, add, delete, update or show menu: ").upper()
        if user_input == "A":
            add_item_to_menu()
        elif user_input == "D":
            remove_item_from_menu()
        elif user_input == "U":
            update_item_from_menu()
        elif user_input == "V":
            view_item_from_menu()
        elif user_input == "S":
            show_restaurant_menu()
        elif user_input == "QUIT":
            break

def add_item_to_menu():
    name = input("Enter the new item name to add: ")
    price = int(input("Enter its price: "))
    item1 = MenuItem(name, price)
    item1.save()
    print(f"{name} added with price {price}")

def remove_item_from_menu():
    name = input("Enter the item name to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"Deleted {name}.")
    else:
        print(f"{name} not found.")

def update_item_from_menu():
    current_name = input("Enter the item name to update: ")
    item = MenuManager.get_by_name(current_name)
    new_name = input("Enter the new name of the item to update: ")
    new_price = int(input("Enter its new price: "))
    if item:
        item.update(new_name, new_price)
        print(f"Updated {current_name} -> {new_name} ({new_price}).")
    else:
        print(f"{current_name} not found.")

def view_item_from_menu():
    name = input("Enter the item name to view: ")
    MenuManager.get_by_name(name)

def show_restaurant_menu():
    MenuManager.all_items()
        

show_user_menu()