/* Stacks in JavaScript 01*/ 

// Array as a stack

let letters = []; 

let word = "racecar";

let reverseWord = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse oder
for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
}

if (reverseWord === word) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not palindrome");
}


