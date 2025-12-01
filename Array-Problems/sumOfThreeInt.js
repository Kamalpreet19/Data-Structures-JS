/*Write a Program to show Sum of three Integer adds to ZERO*/ 
// Program to find all triplets whose sum is ZERO

function findTriplets(arr) {
    let result = [];

    
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {

                if (arr[i] + arr[j] + arr[k] === 0) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return result;
}


let numbers = [0, -1, 2, -3, 1, 4, -4];

let triplets = findTriplets(numbers);

console.log("Array:", numbers);
console.log("Triplets whose sum is ZERO:", triplets);
