// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500

let x = 0;
for (let num = 0; num <= 5000; num++) {
    if (num % 4 === 0) {
        x += num;
    }
}
console.log(`The sum is ${x}`);