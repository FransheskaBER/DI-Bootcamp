// Daily challenge: Not Bad

// What You will learn :
// Use Javascript string and array methods
// Use conditionals statement

// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// let sentence = "The movie is not that bad, I like it"
// let sentence = "This dinner is not that bad ! You cook well"
// let sentence = "This movie is not so bad !"
let sentence = "This dinner is bad !"

let words = sentence.split(" ")

let cleanW = words.map(word => {
    // does the word have letters followed by non-letters at the end?
    if (/[a-zA-Z]+[^a-zA-Z]+$/.test(word)) {
        return word.replace(/[^a-zA-Z]+$/, ""); // strip the trailing symbols
    } else {
        return word; // leave it unchanged
    }
});

console.log(cleanW)

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = cleanW.indexOf("not")
console.log(wordNot)

// // // Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = cleanW.indexOf("bad")
console.log(wordBad)

// // // // If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// // // // For example, the result here should be : “The movie is good, I like it”
// // // // If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad){
    let trailing = (words[wordBad].match(/[^a-zA-Z]+$/) || [""])[0];
    cleanW.splice(wordNot, wordBad - wordNot + 1, "good" + trailing);
    console.log(cleanW.join(" "))
} else {
    console.log(cleanW.join(" "))
}


//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'

