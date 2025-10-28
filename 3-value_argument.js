const arg = process.argv.slice(2);

if (arg[0] === undefined) {
    console.log('No argument');
} else if (arg[1] === undefined) { // exactly one argument
    console.log(arg[0]);
} else { // two or more arguments
    console.log(arg.join(' '));
}
