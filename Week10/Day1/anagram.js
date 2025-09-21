
    // Daily challenge: Anagram

    // What You will learn :
    // Functions
    // Array methods

    // Instructions
    // Create a function that:
    // takes in two strings as two parameters
    // and returns a boolean that indicates whether or not the first string is an anagram of the second string.

    // Some Help
    // What is an anagram?
    // An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

    // Example of anagrams
    // "Astronomer" is an anagram of "Moon starer"
    // "School master" is an anagram of "The classroom"
    // "The Morse Code" is an anagram of "Here come dots"

    // Do we need to consider whitespace?
    // Trim whitespace prior to comparison.

    function AnagramWord(str1, str2){
        let cleanStr1 = str1.toLowerCase().split(" ").join("");
        let cleanStr2 = str2.toLowerCase().split(" ").join("");
        
        let strArr1 = Object.values(cleanStr1).sort().join("");
        let strArr2 = Object.values(cleanStr2).sort().join("");

        if (strArr1 === strArr2){
            return true
        } else {
            return false
        }
    }

    console.log(AnagramWord("Astronomer", "Moon starer")); // true
    console.log(AnagramWord("School master", "The classroom")); //true
    console.log(AnagramWord("The Morse Code", "Here come dots")); //true
    console.log(AnagramWord("Silence", "Listen")); // false
    console.log(AnagramWord("Word", "Hello")); //false
    console.log(AnagramWord("Javascript", "Python")); // false