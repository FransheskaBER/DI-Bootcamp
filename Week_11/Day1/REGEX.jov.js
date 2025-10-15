/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
**REGULAR EXPRESSION**

A **regular expression** is a *pattern* you write to **search, match, or validate text**.\
Think of it like a very smart search tool: instead of just looking for `"cat"`, you can say:

* “Find all words that start with C and end with T.”

* “Make sure this is a valid email address.”

* “Replace all numbers with X.”
 */

/**
 * @type markdown
 * @content
## 3. Syntax basics (don’t panic)

Regex uses symbols:

* `.` → any character

* `*` → repeat (zero or more times)

* `+` → repeat (one or more times)

* `\d` → a digit (0–9)

* `\w` → a word character (letters, numbers, underscore)

* `^` → start of text

* `$` → end of text

Example regex:

```
^\d{3}-\d{2}-\d{4}$
```

This matches something like: `123-45-6789` (U.S. social security number format).
 */

/**
 * @type code
 */
// EXAMPLE: FIND IF TEXT CONTAINS THE WORD "cat"

const regex = /cat/;
console.log(regex.test("I love my cat"));  // true
console.log(regex.test("I love my dog"));  // false

/**
 * @type code
 */
// VALIDATE THIS EMAIL ADDRESS:

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
console.log(emailRegex.test("me@example.com")); // true
console.log(emailRegex.test("me@com"));         // false

/**
 * @type code
 */
// REPLACE ALL THESE DIGITS WITH X:

const msg = "My phone number is 123-456-7890";
console.log(msg.replace(/\d/g, "X"));
// "My phone number is XXX-XXX-XXXX"

/**
 * @type code
 */
// SPLIT THIS TEXT BY SPACES:

const sentence = "I love learning JS";
console.log(sentence.split(/\s+/));
// ["I", "love", "learning", "JS"]

/**
 * @type code
 */
// CHECK IS THESE STRINGS START WITH "hello"

const regex = /^Hello/;
console.log(regex.test("Hello world"));  // true
console.log(regex.test("world Hello"));  // false

/**
 * @type markdown
 * @content
## 5. Why regex matters in real apps

* **Form validation** → check if an email, phone number, or password is valid.

* **Search & replace** → find/clean data in text (like removing extra spaces).

* **Log analysis** → find all errors in a log file.

* **Scraping** → extract specific patterns from web pages.
 */
