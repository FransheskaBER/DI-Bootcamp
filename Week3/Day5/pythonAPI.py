# to do requests in python we need to use the library or package REQUESTS

# to instal a package or library, we use pip

import requests

# THE GET REQUEST
requests.get("API_LINK")

# THE RESPONSE
response = requests.get("API_LINK")

# Print the status code of the response.
print(response.status_code)
# 200 

response = requests.get("http://api.open-notify.org/iss-now.json")

# Print the content of the response.
print(response.text)
# {"message": "success", "iss_position": {"longitude": "-32.3037", "latitude": "-12.7147"}, "timestamp": 1588684375} 

# To print that content of the response in Python dictionary, use .json():
print(response.json())
# {'message': 'success', 'iss_position': {'longitude': '-29.3427', 'latitude': '-16.5135'}, 'timestamp': 1588684451}  



# To access the content type, print the header like "print(response.header)"



# QUERY STRING PARAMETER:

# Query string parameters are the little ?key=value&key2=value2 bits added to a URL to filter/sort/paginate what you’re asking for with a GET.

# Analogy > Ordering coffee online: the path is /coffee, and the options you choose (size=large, milk=oat, sugar=0) are the query parameters.

#2) When to use them

# Filtering/searching: ?q=shoes&color=black
# Pagination: ?page=2&limit=20
# Sorting/fields: ?sort=price&order=asc&fields=name,price
# Feature toggles: ?preview=true
# Sometimes auth: ?api_key=... (only if the API forces it—prefer headers)
# Use GET + query params when you’re reading data and not changing server state.

#EXAMPLE:
import requests

url = "https://example.com/products"
params = {"q": "boots", "page": 2, "sort": "price"}  # your filters/options
resp = requests.get(url, params=params, timeout=10)

print(resp.request.url)   # see the final URL with ?q=...&page=...&sort=...
print(resp.status_code)   # 200?
# print(resp.json())      # if the API returns JSON

#more examples of parameters:
params = {"in_stock": "true"}          # if API expects lowercase strings
# or
params = {"in_stock": 1}               # if API expects 1/0

#repeated keys:
params = {"tag": ["winter", "waterproof"], "limit": 20}
# → ...?tag=winter&tag=waterproof&limit=20
requests.get(url, params=params)
