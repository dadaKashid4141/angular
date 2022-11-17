console.log("*********************************Assignment on Calculator**********************************");
var num1 = Number(prompt('Enter your maths marks '));
console.log("Maths marks:", num1);

var num2 = Number(prompt('Enter your physics marks '));
console.log("Physics marks:", num2);

var num3 = Number(prompt('Enter your chemestry marks'))

console.log("Chemistry marks:", num3);

var sum = num1 + num2 + num3;
//console.log(sum);
var avg = sum / 3;
console.log("---------------------------------");

console.log('Average marks :', avg);
console.log("---------------------------------");

if (avg < 70) {
    console.log("Your grade: C");

}
else if (avg > 70 && avg < 90) {
    console.log("Your grade: B");
}
else {
    console.log("Your grade: A");

}

