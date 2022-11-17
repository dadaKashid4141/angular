console.log("****************************Array Assign1*************************");

const array1=['J&J','Pfizer','Sputnik'];
console.log("---------main array---------");
console.log(array1);

array1.push('Covaxin');   //adding element in array using push
console.log(`----------After adding element "Covaxin"---------`);
console.log(array1);

console.log(`----------Traversing Array-------`);
for (const iterator of array1) {
    console.log(iterator);                   //for traversing array for of loop used
}
console.log(`--------Array Destructuring--------`);
let[first, second, third,fourth]=array1;
console.log(`${first} ${second} ${third} ${fourth}`);