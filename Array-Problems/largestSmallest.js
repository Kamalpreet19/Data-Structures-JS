/*Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element.*/


let arr = [];
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100; 
    arr.push(num);
}

console.log("Array:", arr);


let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

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
