/*Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.*/


let arr = [];

for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    arr.push(num);
}

console.log("Random 3-digit numbers:", arr);



let largest = -Infinity;
let secondLargest = -Infinity;

let smallest = Infinity;
let secondSmallest = Infinity;

for (let n of arr) {

 
    if (n > largest) {
        secondLargest = largest;
        largest = n;
    } else if (n > secondLargest && n !== largest) {
        secondLargest = n;
    }

   
    if (n < smallest) {
        secondSmallest = smallest;
        smallest = n;
    } else if (n < secondSmallest && n !== smallest) {
        secondSmallest = n;
    }
}

console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
