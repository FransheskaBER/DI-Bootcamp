import datetime

today_date = datetime.date.today()
actual_datetime = datetime.datetime.now()
in_15_hours = actual_datetime + datetime.timedelta(hours=15, minutes=10)

print(f"Today is {today_date.strftime('%a %d %b %Y')}")
print(f"In 15 hours and 10 minutes it will be {in_15_hours.strftime('%a %d %b %Y')}")