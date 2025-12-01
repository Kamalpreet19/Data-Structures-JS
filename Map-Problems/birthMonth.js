/*Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print.*/




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let birthdays = [];

for (let i = 0; i < 50; i++) {
    let year = getRandomInt(1992, 1993);
    let month = getRandomInt(1, 12);   
    let day = getRandomInt(1, 28);     
    birthdays.push({ year, month, day });
}


let birthMonthMap = new Map();

for (let i = 0; i < birthdays.length; i++) {
    let month = birthdays[i].month;
    
    if (!birthMonthMap.has(month)) {
        birthMonthMap.set(month, []);
    }
    birthMonthMap.get(month).push(`Person${i+1} (${birthdays[i].day}/${birthdays[i].month}/${birthdays[i].year})`);
}


console.log("Individuals grouped by birth month:\n");
for (let [month, persons] of birthMonthMap) {
    console.log(`Month ${month}:`, persons);
}
