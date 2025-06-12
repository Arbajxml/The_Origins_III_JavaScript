// Write code below 💖

// Leap Year Calendar

for (let i = 2000; i < 3000; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        console.log("Leap Year : " , i);
    }
}
