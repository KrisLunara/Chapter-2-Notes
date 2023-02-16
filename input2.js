const readLine = require('readline-sync');

//1
let AddBase = Number(readLine.question("Input a number:  "));
let Add = Number(readLine.question("Input a number to add:  "));
let Sum = AddBase + Add;
console.log(`The sum of ${AddBase} + ${Add} is ${Sum}.`);

//2
let SubBase = Number(readLine.question("Input a number:  "));
let Sub = Number(readLine.question("Input a number to subtract:  "));
let Diff = SubBase - Sub;
console.log(`The difference of ${SubBase} - ${Sub} is ${Diff}.`);

//3
let MulBase = Number(readLine.question("Input a number:  "));
let Mul = Number(readLine.question("Input a number to multiply by:  "));
let Pro = MulBase * Mul;
console.log(`The product of ${MulBase} x ${Mul} is ${Pro}.`);

//4
let DivBase = Number(readLine.question("Input a number:  "));
let Div = Number(readLine.question("Input a number to divide by:  "));
let Quo = DivBase / Div;
console.log(`The quotient of ${DivBase} / ${Div} is ${Quo}.`);

//5
let ReBase = Number(readLine.question("Input a number:  "));
let ReDiv = Number(readLine.question("Input a number to divide by and find a remainder:  "));
let Re = ReBase % ReDiv;
console.log(`The remainder of ${ReBase} / ${ReDiv} is ${Re}.`);

//6
let Name = readLine.question("Enter your first name: ");
let Surname = readLine.question("Enter your surname: ");
console.log(`Welcome ${Surname}, ${Name}.`);

//7
let Title = readLine.question(`Enter your title\n(type "none" to skip): `);
let Suffix = readLine.question(`Enter your suffix\n(type "none" to skip): `);
if (Title === "none"){
    console.log(`Welcome ${Surname} ${Suffix}.`);
} else if (Suffix === "none"){
    console.log(`Welcome ${Title} ${Surname}.`);
} else {
    console.log(`Welcome ${Title} ${Surname} ${Suffix}.`);
}

//8
console.log(`Let's print your shipping address ${Title} ${Surname} ${Suffix}.`);
let StNum = readLine.question(`Enter your street number: `);
let StNam = readLine.question(`Enter your street name: `);
let StTy = readLine.question(`Enter your street type: `);
let City = readLine.question(`Enter your city: `);
let State = readLine.question(`Enter your state (ex. CA, AZ, TX): `);
let Zip = readLine.question(`Enter your zip code: `);
console.log(`Mailing Label:
\n${Name} ${Surname}\n${StNum} ${StNam} ${StTy}\n${City}, ${State} ${Zip}`);

//10+11
let Num1 = Number(readLine.question("Input a number:  "));
let Num2 = Number(readLine.question("Input a number:  "));
if (Num1 > Num2){
    console.log(`${Num1} is bigger than ${Num2}, and ${Num2} is smaller than ${Num1}.`)
} else if (Num1 < Num2){
    console.log(`${Num1} is smaller than ${Num2}, and ${Num2} is bigger than ${Num1}.`)
}else if (Num1 === Num2){
    console.log(`${Num1} and ${Num2} are equal.`)
}