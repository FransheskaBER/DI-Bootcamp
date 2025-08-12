# HTTP > HyperText Transfer Protocol

# it determines how your browser and web server should communicate

# HTTP METHODS:

#1: GET 
# retrieve data
# pass the data in the url request
# displayes the data so use this for non-sensitive data
# example:

# /action_page.html?firstname=Mickey&lastname=Mouse
# This is a request to action_page.html, where firstname is equal to Mickey and lastname is equal to Mouse.


#2: POST 
# sends the data in the body of the http request - the body is encrypted, it is never cached or saved in history
# sends data to a server to create/update a resource
# doesn't display data, it is used mostly for sesntitive info


# TYPES OF HTTP:
#A: Requests
#B: Responses


# A: The HTTP REQUEST == cLIENT > SERVER

# an HTTP requests containes 3 elements: Start line, header, and body

#1: START LINE:
#   the first line that says what you want.#
# The format is:
# "Method(space)path-and-query(space)HTTP-version"
#   GET /products?category=shoes HTTP/1.1

# Key pieces:

# METHOD (action you want):

#GET (fetch data—no body needed)
#POST (create something—usually has a body)
#PUT (replace something)
#PATCH (update part of something)
#DELETE (remove something)
#PATH + query: the location and any filters, like ?page=2.
#HTTP version: e.g., HTTP/1.1 (older), HTTP/2 (newer, faster under the hood).

#When to use:

#Use GET for reading.
#Use POST when sending new data (forms, JSON) to create.
#Use PUT/PATCH to update.
#Use DELETE to remove.

#Why it matters:
#The method tells the server how to treat your request (read vs write). The path/query tells which resource.




#2: HEADER
# What they are: Key–value lines with extra info about the request.

#Format: Header-Name: value

#Common request headers:

#Host: api.example.com (which site you’re talking to—required in HTTP/1.1)
#User-Agent: ... (who’s asking—browser/app identity)
#Accept: application/json (what response formats you can handle)
#Authorization: Bearer <token> (credentials)
#Content-Type: application/json (the format of your body)
#Cookie: session=abc123 (session data)

#When/why to use:
# Tell the server how to parse your body (Content-Type).
# Ask for a specific response format (Accept).
# Send auth (Authorization) or session (Cookie).



#3: BODY
#What it is: The actual data you send (form fields, JSON, file upload).

#When used: Mostly with POST, PUT, PATCH.

#Why it matters: It carries the content to create/update resources.

#Examples:

#JSON: {"title":"New Post","content":"Hello"} with Content-Type: application/json
#Form: name=Sam&age=33 with Content-Type: application/x-www-form-urlencoded



# B: The HTTP RESPONSE == SERVER > CLIENT

# an HTTP response containes 3 elements: Status line, header, and body

#1: Status line:

#What it is: First line that says how it went.

#Format:
#HTTP-VERSION SP STATUS-CODE SP REASON-PHRASE
#Example: HTTP/1.1 200 OK

#Common status codes:

# 200 OK (worked)
# 201 Created (new thing made)
# 204 No Content (worked, nothing to return)
# 301/302 (redirect somewhere else)
# 400 Bad Request (your request was malformed)
# 401 Unauthorized (no/invalid credentials)
# 403 Forbidden (not allowed)
# 404 Not Found (doesn’t exist)
# 500 Internal Server Error (server bug)


# 2: Headers
#What they are: Extra info about the response.

#Common response headers:

# Content-Type: application/json (format of the body)
# Content-Length: 123 (size)
# Set-Cookie: session=abc123; HttpOnly (server setting cookies)
# Cache-Control: max-age=3600 (caching rules)
# Location: /items/42 (where the new resource lives—often with 201)

# Why it matters:
# Your client knows how to read the body, how long to cache, and where to look next.

# 3: Body
#What it is: The actual data back (HTML, JSON, image bytes).

#When present: Usually with 200, 201, errors with details, etc.

#Why it matters: It’s the content your app shows or uses.


