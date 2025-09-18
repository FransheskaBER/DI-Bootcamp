/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
The **Date object** in JavaScript is a built-in tool for working with time and dates. It lets you create, read, and change values like year, month, day, hour, minute, second, and milliseconds.

### Analogy

Think of the Date object as a **calendar + clock combined in one box** 📅🕒. You can open it to check today’s date and time, or set it to show a different date/time (like “Jan 1, 2000 at 12:00”).

### Key ideas

* You create a date with `new Date()`.

* By default, it stores the current date and time from your computer’s system.

* You can also pass a specific string or numbers to set the date/time.

* It has methods to **get parts** (like `.getFullYear()` → 2025) and to **set parts** (like `.setFullYear(2030)`).

* Internally, JS stores dates as the number of **milliseconds since Jan 1, 1970 UTC** (called the Unix epoch).
 */

/**
 * @type code
 * @executionCount 2
 * @executingLine 23
 * @lastExecutionTime 8
 * @output
@log
Wed Sep 17 2025 16:31:47 GMT+0300 (Israel Daylight Time)
@log
Fri Jun 15 1990 03:00:00 GMT+0300 (Israel Daylight Time)
@log
2025
@log
8
@log
17
@log
3
@log
2000
 */
// Current date and time
const now = new Date();
console.log(now.toString());  // e.g. Wed Sep 17 2025 15:45:12 GMT+0300

// Specific date
const birthday = new Date("1990-06-15");
console.log(birthday.toString());  // Fri Jun 15 1990 ...


// Getting parts of the date
console.log(now.getFullYear()); // 2025

console.log(now.getMonth());    // 8 (September, because months are 0–11)

console.log(now.getDate());     // 17 (day of the month)

console.log(now.getDay());      // 3 (Wednesday, where 0 = Sunday)


// Setting parts
birthday.setFullYear(2000);

console.log(birthday.getFullYear()); // 2000


/**
 * @type markdown
 * @content
**NOTE:** Days and Months are ZERO-BASED so january is 0 and sunday is 0

**getDay** gives day of week > 0= Sunday, 1=Monday, etc...

**getMonth** gives you > 0=January, 1=February, etc...
 */

/**
 * @type code
 * @executionCount 12
 * @executingLine 16
 * @lastExecutionTime 6
 * @output
@log
Today is: 2025-9-17
@log
The date in one week from now will be: 2025-9-24
 */
const now = new Date();

const day = now.getDate(); // this gives you the date and not which day is it
const month = now.getMonth()+1;
const year = now.getFullYear();

console.log(`Today is: ${year}-${month}-${day}`);

const nextWeek = new Date(now);
nextWeek.setDate(now.getDate() + 7);

const nextDay = nextWeek.getDate();
const nextMonth = nextWeek.getMonth()+1;
const nextYear = nextWeek.getFullYear();

console.log(`The date in one week from now will be: ${nextYear}-${nextMonth}-${nextDay}`);
