const readLine = require('readline-sync');

//#1
// let x =0;
// while (x<=20){
//     console.log(x);
//      x++;
// }

//#2
// let y =0;
// while (y<=50){
//     console.log(y);
//     y++;
// }

//#3
// let z =-10;
// while (z<=10){
//     console.log(z);
//     z++;
// }

//#4
// let a =0;
// while (a>=-50){
//     console.log(a);
//     a--;
// }

//#5
// let b =0;
// while (b<=100){
//     if (b%2===0){
//         console.log(b);
//     }
//     b++;
// }

//#6
// let c =100;
// while (c>=0){
//     if (c%2!==0){
//         console.log(c);
//     }
//     c--;
// }

//#7
// let d =0;
// while (d<=100){
//     if (d%3===0){
//         console.log(d);
//     }
//     d++;
// }

//#8
// let e =0;
// while (e<=1000){
//     if (e%5===0){
//         console.log(e);
//     }
//     e++;
// }

//#9
// let f=0;
// while(f  <= 100) {
//     if(f<= 9){
//         console.log(f);
//     }else if (f >= 25){
//         console.log(f);
//     }
//     f++;
// }

//#10
// let g=0;
// while(g  <= 100) {
//     if(g<= 10){
//         console.log(g);
//     }else if (g >= 20 && g<=40){
//         console.log(g);
//     }else if (g >= 50){
//         console.log(g);
//     }
//     g++;
// }

//11
// let answer = readLine.question("Enter Y or N:");
// while (answer !== "Y" && answer !== "N"){
//     console.log("Invalid choice.");
//     answer = readLine.question(`Try again.\nEnter Y or N:`);
// }
// if (answer === "N"){
//     console.log("end of program");
// } else {
//     console.log("rest of program")
// }

//12
let answer = readLine.question("Enter y or n:");
while (answer !== "y" && answer !=="Y" && answer !== "n" && answer !=="N"){
    console.log("Invalid choice.");
    answer = readLine.question(`Try again.\nEnter y or n:`);
}
if (answer === "n" && answer === "N"){
    console.log("end of program");
} else {
    console.log("rest of program")
}