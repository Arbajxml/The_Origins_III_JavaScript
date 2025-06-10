const randomNumber = Math.floor(Math.random() * 9) + 1;

let question = "Is Cristiano Ronaldo goat?";
let answer = " ";

if(randomNumber === 1) {
    answer = ("Yes - definitely.");
}
else if(randomNumber === 2) {
    answer = ("My sources say no.");
}
else if(randomNumber === 3) {
    answer = ("It is decidedly so.");
}
else if(randomNumber === 4) {
    answer = ("Without a doubt.")
}
else if(randomNumber === 5) {
    answer = ("Reply hazy, try again.");
}
else if(randomNumber === 6) {
    answer = ("Ask again later");
}
else if(randomNumber === 7) {
    answer = ("Better not tell you now.");
}
else {
    answer = ("Outlook not so good");
}

console.log("Question : ", question);
console.log("Answer = ", answer)