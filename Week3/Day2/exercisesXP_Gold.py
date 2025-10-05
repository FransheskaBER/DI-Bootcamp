# Exercises XP Gold

# What you will learn
# Inheritance

# Exercise 1: Bank Account
# Instructions

# Part I:
# Create a class called BankAccount that contains the following attributes and methods:
# balance - (an attribute)
# __init__ : initialize the attribute
# deposit : - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
# withdraw : - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive

# Part III: Expand the bank account class
# Add the following attributes to the BankAccount class:
# username
# password
# authenticated (False by default)
# Create a method called authenticate. This method should accept 2 strings : a username and a password.
# If the username and password match the attributes username and password the method should set the authenticated boolean to True.
# Edit withdraw and deposit to only work if authenticated is set to True, if someone tries an action
# without being authenticated raise an Exception

class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.authenticated = False
        self.balance = int(balance)
    
    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
            print("Authentication successful")
            return True
        self.authenticated = False
        raise Exception("Invalid username or password")
    
    def deposit(self, value):
        if not self.authenticated:
            raise Exception("You must be authenticated to deposit")
        amount = int(value)
        if int(amount) <= 0:
            raise Exception("Deposit amount must be more than 0")
        self.balance += amount
        return self.balance
    
    def withdraw(self, value):
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw")
        amount = int(value)
        if amount <=0:
            raise Exception("Withdrawal amount must be more than 0")
        self.balance -= amount
        return self.balance

# Part II : Minimum balance account
# Create a MinimumBalanceAccount that inherits from BankAccount.
# Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.
# Override the withdraw method so it only allows the user to withdraw money if the balance remains
# higher than the minimum_balance, raise an Exception if not.

class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimumBalance=0):
        super().__init__(username, password, balance)
        self.minimumBalance = int(minimumBalance)
    
    def withdraw(self, value):
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw")
        amount = int(value)
        if amount <=0:
            raise Exception("Withdrawal amount must be more than 0")
        if self.balance - amount < self.minimumBalance:
            raise Exception("Cannot go below the minimum balance")
        self.balance -= amount
        return self.balance
     
# Part IV: BONUS Create an ATM class
# __init__:
# Accepts the following parameters: account_list and try_limit.
# Validates that account_list contains a list of BankAccount or MinimumBalanceAccount instances.
# Hint: isinstance()
# Validates that try_limit is a positive number, if you get an invalid input raise an Exception,
# then move along and set try_limit to 2.
# Hint: Check out this tutorial
# Sets attribute current_tries = 0
# Call the method show_main_menu (see below)

# Methods:
# show_main_menu:
# This method will start a while loop to display a menu letting a user select:
# Log in : Will ask for the users username and password and call the log_in method with the username and password (see below).
# Exit.

# log_in:
# Accepts a username and a password.
# Checks the username and the password against all accounts in account_list.
# If there is a match (ie. use the authenticate method), call the method show_account_menu.
# If there is no match with any existing accounts, increment the current tries by 1.
# Continue asking the user for a username and a password, until the limit is reached (ie. try_limit attribute). Once reached display a message saying they reached max tries and shutdown the program.

# show_account_menu:
# Accepts an instance of BankAccount or MinimumBalanceAccount.
# The method will start a loop giving the user the option to deposit, withdraw or exit.

class ATM:
    def __init__(self, account_list, try_limit):
        # validate accounts list (contains a list of bankaccount or minimumbalanaceaccount instances)
        self.account_list = self.validate_accounts(account_list)
        self.try_limit = self.validate_try_limit(try_limit)
        self.current_tries = 0
    
    def validate_accounts(self, account_list):
        # is it a list?
        if not isinstance(account_list, list):
            raise Exception("Your account list must be a LIST")
        # are all items bankaccount or minimumbalanaceaccount?
        for account in account_list:
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):
                raise Exception("Account list must contain only BankAccount or MinimumBalanceAccount objects")
        return account_list
    
    def validate_try_limit(self, value):
        number = int(value)
        if number <= 0:
            print("Invalid try_limit; defaulting to 2.")
            number = 2
        return number
    
    def show_main_menu(self):
        while True:
            print("ATM")
            print("1) Log in")
            print("2) Exit")
            choice = input("Choose 1 or 2: ")

            if choice == "1":
                return self.log_in()
            elif choice == "2":
                print("Goodbye")
                break
            else:
                print("Invalid choice. Try 1 or 2")
    
    def log_in(self):
        self.current_tries = 0
        while self.current_tries < self.try_limit:
            username = input("Username: ")
            password = input("Password: ")

            matched = None            
            for account in self.account_list:
                try:
                    if account.authenticate(username, password):
                        matched = account
                        break
                except Exception: # “If any error happens here, just ignore it and move on. in the authenticate() we are raising an exception hence this except so python wont crush
                    pass
            
            if matched:
                return self.show_account_menu(matched)
            else:
                print("wrong username or password")
                self.current_tries += 1
        print("Max tries reached. Shutting down")

    def show_account_menu(self, account: BankAccount):
        while True:
            print(f"Account: {account.username} | balanace: {account.balance}")
            print("1) Deposit")
            print("2) Withdraw")
            print("3) Exit")
            choice = input("Choose an option: ")

            if choice == "1":
                amount = int(input("Enter the amount you want to deposit: "))
                new_balance = account.deposit(amount)
            elif choice == "2":
                amount = int(input("Enter the amount you want to withdraw: "))
                new_balance = account.withdraw(amount)
            elif choice == "3":
                print("Goodbye")
                break
            else:
                print("Invalid choice. Try 1, 2 or 3")


account1 = BankAccount("fran", "1234", 100)
account2 = BankAccount("yot", "4321", 50)
# print(account1.balance) 
# print(account2.balance)

account2.authenticate("yot", "4321")
account2.deposit(150)
# print(account2.balance)

account1.authenticate("fran", "1234")
account1.withdraw(30)
# print(account1.balance)

acc1 = MinimumBalanceAccount("yuri", "1111", balance=200, minimumBalance=100)
acc2 = MinimumBalanceAccount("Davi", "2222", balance=100, minimumBalance=50)
acc2.authenticate("Davi", "2222")
acc2.withdraw(50)
# print(acc2.balance)

atm = ATM([acc1], 2)
atm.show_main_menu()









