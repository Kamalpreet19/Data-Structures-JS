/*Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times*/



function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
}

let diceMap = new Map();


for (let i = 1; i <= 6; i++) {
    diceMap.set(i, 0);
}

let reachedTen = false;


while (!reachedTen) {
    let num = rollDice();
    let count = diceMap.get(num);

    diceMap.set(num, count + 1);

    if (diceMap.get(num) === 10) {
        reachedTen = true; 
    }
}


console.log("Dice Roll Results:");
console.log(diceMap);


let maxNum = null, minNum = null;
let maxCount = -Infinity, minCount = Infinity;

for (let [key, value] of diceMap) {

    if (value > maxCount) {
        maxCount = value;
        maxNum = key;
    }

    if (value < minCount) {
        minCount = value;
        minNum = key;
    }
}

console.log("\nNumber that reached MAX times:", maxNum, "→", maxCount);
console.log("Number that reached MIN times:", minNum, "→", minCount);
