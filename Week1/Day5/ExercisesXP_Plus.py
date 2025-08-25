# Exercises XP +

# 🌟 Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that
# calculates the average grade for each student, assigns a letter grade, and determines the class average.

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
    }

# Requirements:
# Calculate the average grade for each student and store the results in a new dictionary called student_averages.
student_averages = {}

for name, grade in student_grades.items():
    avg = sum(grade) / len(grade)
    student_averages[name] = round(avg)

print(student_averages)

# Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in
# a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60
student_letter_grades = {}

for name, avg in student_averages.items():
    if avg >= 90:
        grade = "A"
    elif avg >= 80:
        grade = "B"
    elif avg >= 70:
        grade = "C"
    elif avg >= 60:
        grade = "D"
    else:
        grade = "F"
    student_letter_grades[name] = grade
    
print(student_letter_grades)

# Calculate the class average (the average of all students’ averages) and print it.

total_avg = sum(student_averages.values())
class_size = len(student_averages)

total = total_avg / class_size
print(f"The average of all students' grades is: {round(total)}")

# Print the name of each student, their average grade, and their letter grade.
for name in student_averages.keys():
    print(f"{name}:\n  Average Grade = {student_averages[name]} - Letter Grade = {student_letter_grades[name]}")

# Hints:
# Use loops to iterate through the student_grades dictionary.
# You may use sum() and len() functions to help calculate averages.
# Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.




# 🌟 Exercise 2 : Advanced Data Manipulation and Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior.
# The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# Tasks:
# Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product).
# Use a loop to iterate through the data and a dictionary to store the total sales for each product.
total_sales = {}
for row in sales_data:
    product = row["product"]
    sale = row["price"] * row["quantity"]
    if product in total_sales:
        total_sales[product] += sale
    else:
        total_sales[product] = sale
print(total_sales)

# Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.
expenses = {}
for row in sales_data:
    customer = row["customer_id"]
    spent = row["price"] * row["quantity"] 
    if customer in expenses:
        expenses[customer] += spent
    else:
        expenses[customer] = spent
print(expenses)


# Sales Data Enhancement:
# Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
# Use a loop to modify the sales_data list with this new information.
# High-Value Transactions:
for row in sales_data:
    row["total_price"] = row["price"] * row["quantity"]
print(sales_data)

# Using list comprehension, create a list of all transactions where the total price is greater than $500.
# Sort this list by the total price in descending order.
all_trans = []
for row in sales_data:
    total_price = row["total_price"]
    if total_price > 500:
        all_trans.append(total_price)
sorted = sorted(all_trans, reverse=True)
print(sorted)

# Customer Loyalty Identification:
# Identify any customer who has made more than one purchase, suggesting potential loyalty.
# Use a dictionary to count purchases per customer, then use a loop or comprehension to identify
# customers meeting the loyalty criterion.
loyals = {}
for row in sales_data:
    cid = row["customer_id"]
    if cid in loyals:
        loyals[cid] += 1
    else:
        loyals[cid] = 1
print(loyals)

for cid, count in loyals.items():
    if count > 2:
        print(f"Customer {cid} is the most loyal with {count} purchases")

# Bonus: Insights and Analysis:
# Calculate the average transaction value for each product category.
# Identify the most popular product based on the quantity sold.
# Provide insights into how these analyses could inform the company’s marketing strategies.
stats = {}
for row in sales_data:
    product = row["product"]
    value = row["price"] * row["quantity"] 
    if product in stats:
        stats[product]["sum"] += value
        stats[product]["count"] += 1
    else:
        stats[product] = {"sum": value, "count": 1}
print(stats)

average = {}
for product, data in stats.items():
    average[product] = round(data["sum"] / data["count"])
print(average)

popular_prod = {}
for row in sales_data:
    product = row["product"]
    quantity = row["quantity"]
    if product in popular_prod:
        popular_prod[product] += quantity
    else:
        popular_prod[product] = quantity
print(popular_prod)

max_quantity = 0
for key, value in popular_prod.items():
    if value > max_quantity:
        max_quantity = value
        max_prod = key
print(f"The most popular product is {max_prod} which it was sold {max_quantity} times")



