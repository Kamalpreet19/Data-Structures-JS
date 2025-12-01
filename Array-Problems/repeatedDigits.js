/*Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array */



let repeatedDigits = [];

for (let i = 0; i <= 100; i++) {
    if (i >= 10 && (i % 11 === 0)) {  
        repeatedDigits.push(i);
    }
}

console.log("Numbers with repeated digits:", repeatedDigits);
