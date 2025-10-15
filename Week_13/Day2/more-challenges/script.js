// Exercise 1: Date #1
// In a new file called date.js, create a function that returns the amount of time left from now until January 1st. Export this function.

// In the file script.js display the result of the function created in date.js.
// (Example: the 1st January is in 10 days and 10:34:01 hours)

import { calculateTime, lifeSpan, nextHoliday } from "./date.js";

calculateTime();

// Exercise 2 : Date #2
// In a new file called date.js, create a function that accepts a birthdate as an argument (in the format of your choice), and then return the number of minutes the user lived in his life. Export this function.
// Hint: Hardcode the value of the argument, don’t ask a user for it.

// In the file script.js display the result of the function created in date.js.

// Bonus: Try to find a node module that allows to prompt the user for his birthdate.
console.log(lifeSpan());


// Exercise 3: Date #3
// In a new file called date.js, write a function that returns today’s date and the amount of time left from now until the next holiday, additionally display what holiday that is. Export this function.
// Hint: Start with hardcoding the datetime and name of the holiday.

// In the file script.js display the result of the function created in date.js.
// (Example: the next holiday is in 30 days and 12:03:45 hours)

// Bonus : Try to find a node module to get the date of the holidays instead of hardcoding it.
nextHoliday("US");