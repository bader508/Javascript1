var welcome = "Welcome to my page :).Please open the console";
alert(welcome);
console.log("First week of JS");

console.log("\nTask 1\n");
let x = 508;
console.log("Value of x = " + x);

console.log("\nTask 2\n");
var number = 7.25;
console.log(Math.floor(number));

console.log("\nTask 3\n");

let colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("\nTask 4\n");
console.log("length of array \"colors\" = " + colors.length);

console.log("\nTask 5\n");
let a = 9;
let b = 'Hello';

if (typeof(a) === typeof(b)) {
    console.log('Same type');
} else {
    console.log('Different type');
}

console.log("\nTask 6\n");
x = 7;
x = x % 3;
console.log("New value of x = " + x);


console.log("\nTask 7a\n");
let array = [4, 6, 8, 'car', 'hack your future'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("\nTask 7b\n");
task7b();
console.log("\nThat's it for now :)...!!!\n");

function task7b() {
    var var1 = 6 / 0;
    var var2 = 10 / 0;

    if (var1 > var2) {
        console.log("6/0 > 10/0");
    } else if (var1 == var2) {
        console.log("6/0 = 10/0");
        console.log("Means infinity is equal to infinty...!!!");
    } else {
        console.log("6/0 < 10/0");
    }

}