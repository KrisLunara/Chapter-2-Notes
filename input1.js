const readLine = require('readline-sync');

//1
let jokeAsk = readLine.question("Do you want to hear a joke? (y/n):  ");
if (jokeAsk === "Y") {
    console.log(`.<.`);
}else {
    console.log(":(");
}

//2
let base = Number(readLine.question("Enter a number: "));
if (base % 2 ===0){
    console.log(`${base} is divisible by 2`);
} else {
    console.log(`${base} is not divisible by 2`);
}

//3
if (base % 3 ===0){
    console.log(`${base} is divisible by 3`);
} else{
    console.log(`${base} is not divisible by 3`);
}
if (base % 4 ===0){
    console.log(`${base} is divisible by 4`);
} else {
    console.log(`${base} is not divisible by 4`);
}
if (base % 5 ===0){
    console.log(`${base} is divisible by 5`);
} else{
    console.log(`${base} is not divisible by 5`);
}
if (base % 6 ===0){
    console.log(`${base} is divisible by 6`);
} else{
    console.log(`${base} is not divisible by 6`);
}

//4
let guess = Number(readLine.question("Guess the secret number: "));
let secret = 24;
if (guess === secret){
    console.log("You got it :)");
}else if (guess > secret){
    console.log("Too high");
}else if (guess < secret){
    console.log("Too low");
}

//5+6
let price =Number(readLine.question("What is the price of the meal: $ "));
if (price > 0){
    let tax = Number((price*0.08)).toFixed(2)
    let total = Number((price+tax));
    console.log(`The price is $${total} when taxed.`);
} else if(price <= 0){
    console.log("ERROR\n Please input a valid price");
}

//7 + 8
let cost =Number(readLine.question(`Meal Tip calculator\nCost of your meal: $`));
let Review =Number(readLine.question(`How was your service from a scale of 1-4\n(1 Bad, 4 Great): `));
if(price <= 0){
    console.log("ERROR\n Please input a valid price");
}else if (Review === 1){
    console.log(`You shouldn't leave a tip then. So just pay $${cost.toFixed(2)}.`);
}else if (Review === 2) {
    let Average = Number((cost * 0.10));
    let AvTip = Number((cost+Average));
    console.log(`You should leave a $${Average.toFixed(2)} tip! You'll pay $${AvTip.toFixed(2)} total.`);
}else if (Review === 3) {
    let Good = Number((cost*0.15));
    let MidTip = Number((cost+Good));
    console.log(`You should leave a $${Good.toFixed(2)} tip! You'll pay $${MidTip.toFixed(2)} total.`);
}else if (Review === 4) {
    let Best = Number((cost*0.20));
    let BesTip = Number((cost+Best));
    console.log(`You should leave a $${Best.toFixed(2)} tip! You'll pay $${BesTip.toFixed(2)} total.`);
}