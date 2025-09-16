const args = process.argv.slice(2);      // get user arguments
const num = Number(args[0]);             // try to convert first argument to a number

if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}