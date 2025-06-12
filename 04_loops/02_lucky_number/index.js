// Write code below 💖

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

while(guess !== luckyNumber) {
  console.log("Nope, it isn't", guess);
  guess = guess + 1;
}
  console.log("My lucky number is ", luckyNumber)