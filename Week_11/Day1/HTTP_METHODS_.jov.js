/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
**What's HTTP?**

\- it stands for hypertext transfer protocol

\- it's the set of rules (a protocol) that the web browsers and servers use to talk to each other.

\- Everytime you visit a website, your browser uses HTTP or HTTPS (its secure version) to request pages, images, data from a server.

**What types of things can be carried by HTTPS?**

\- Web pages (HTML, CSS, JS files): e.g., GET https//example.com/index.html (browser asks for a page > server sends back an HTML file)

\- Statis assets (imgaes, videos, PDFs, fonts, etc): e.g., GET https://example.com/images/logo.png (you’re just fetching a file)

\- APIs (structured data, usually JSON or XML). e.g., GET https://api.weather.com/v3/weather/today (used by apps/websites to request/update data (not whole pages)).
 */

/**
 * @type markdown
 * @content
**How does the internet work?**

*TERMS:*

\- Browser can be chrome, your phone, etc..

\- Server is a machine that when connecting to the internet creates an IP address.

\- Your computer also has an IP address.

\- HTTP is the language our computers use to communicate with other computers, for example our browser with the server.

\- HTTP and DNS manage the sending and receiving of web files (images, html, js, css, etc)

*PROCESS:*

\- when you type in your browser google.com, the browser will use the ISP which is the provider charter that does an DNS lookup, it converts the URL into an IP adress and find the right server in which that IP adress is connected to. Once, it found it will tell your browser which server to send the requests to. Then, the server will communicate with you in an HTTP language and send you the files you need in a text/file type context (files can be HTML, CSS and JS).

\- When you type *https://example.com*:

Browser sends an HTTP GET request → “Give me the homepage.”

Server replies with an HTTP response → Status 200 OK, plus the HTML page.

Browser then makes more GET requests for CSS, JavaScript, and images referenced in that page.
 */

/**
 * @type markdown
 * @content
**HTTP METHODS:**

GET > use it to ask the server some information (like reading data)- It's often catched (browser remembers responses).

\- all the data of the GET request is passed to the URL. because of this, it can be bookmarked and it should NEVER be used to pass sensitive data. 

\- the data is pased as argument like: */path/to/page.html**?**arg1=val1&arg2=val2 (the data is passed after the "?" then firstname=Miche&lastname=Mouse as the arguments ar the first name and last name and the values mick, mouse)*

POST > use it to create sth new so you will send new data to the server (like creating sth, like posting a tweet, creating a new blog, etc.). When creating a POST request, you need a body which its like a form.

\- this method is never cached or saved in history, the body request is encrypted. because of this, this method is much safer to pass sensitive data like passwords or credit card.

\- post means the data is pushed to the server.

PUT > use it to update or replace existing data on the server (like editing your password or username, etc.)

DELETE > use it to remove data from the server (like deleting a tweet ID for example)
 */

/**
 * @type markdown
 * @content
**HTTP METHODS EXAMPLE:**

1\. Get user info of user id 123:

GET /users/123

2\. Create a new user:

POST /users BODY {name: "Alice"}

3\. Update user's name of user id 123:

PUT /users/123 BODY {name: "Bob"}

4\. delete user's id 123:

DELETE /users/123
 */

/**
 * @type code
 */
// USE FETCH() in JS to manipulate data from the server. Example with tasks:


// GET - see all tasks
fetch("/tasks")
  .then(response => response.json()) // converst response to JSON
  .then(data => console.log("Tasks:", data))
  .catch (error +> console.error(error));


// POST - add a new task
fetch("/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ task: "Learn JS" }) // sending new task data called LEARN JS
})
  .then(response => response.json())
  .then(data => console.log("New task created:", data))
  .catch(err => console.error(err));


// PUT - update task #5
fetch("/tasks/5", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ complete: true }) // updating completion status
})
  .then(response => response.json())
  .then(data => console.log("Task updated:", data))
  .catch(err => console.error(err));


// DELETE - remove task #3
fetch("/tasks/3", {
  method: "DELETE"
})
  .then(response => response.json())
  .then(data => console.log("Task deleted:", data))
  .catch(err => console.error(err));





/**
 * @type markdown
 * @content
**HTTP REQUESTS:**

*- REQUESTS: When you send a request, requests contains:*

1\. Start line (provides crucial info about the message request and helps the receiver understadn the request message: GET /background.png HTTP/1.0)

```
- HTTP method: GET

- Request-target: /background.png (the path of the file the sender wants to receive)

- HTTP version: HTTP/1.0
```

2\. Header (are key-value pairs in the syntax of JSON: header_name: value)

```
- Example:

    Host: net.tutsplus.com 

    User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729) 

    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,\*/\*;q=0.8 

    Accept-Language: en-us,en;q=0.5 

    Accept-Encoding: gzip,deflate 

    Accept-Charset: ISO-8859-1,utf-8;q=0.7,\*;q=0.7 

    Keep-Alive: 300 

    Connection: keep-alive 

    Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120 

    Pragma: no-cache 

    Cache-Control: no-cache
```

3\. Body (is the content of the request. it is not required for every method, there are some methods that require body other not)

```
- Bodys needs to have content-type and content-lenght
```
 */

/**
 * @type markdown
 * @content
**HTTP RESPONSES:**

*- RESPONSES: when you get a response from the server, the response also has HEADERS and BODY:*

e.g.:

content-type: text/html

status: 200 ok

*types of status:*

200s > means its ok

300s > means you got redirected

400s > means there was an error,  cannot be found, you cannot login

500s > means there is a block error in the server side

**Example of an HTTP response:**

```
HTTP/1.1 400 Bad Request 
Date: Sun, 18 Oct 2012 10:36:20 GMT 
Server: Apache/2.2.14 (Win32) 
Content-Length: 230 
Content-Type: text/html; 
charset=iso-8859-1 
Connection: Closed
```
 */

/**
 * @type code
 */

