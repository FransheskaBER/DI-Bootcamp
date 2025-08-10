# API - is the way different applications connect and exchange data with one another

# API - stands for Aplication Programming Interface

# it is a set of protocols that allows exchange in a json format

# we SEND A REQUEST
# and
# we take a RESPONSE

# We need to install a package (a module) by requesting
import requests
import json
import os

response = requests.get("https://api.chucknorris.io/jokes/random") # the "random" is called END POINT (it can changed and varied depending on what you want to requests)

