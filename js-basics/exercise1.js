// 
// 1) Declarations (use const for values that won't change; use let if you will reassign)
const name = 'Celine';
const age = 20;
const isStudent = true; // boolean — NOT the string 'true'
const address = {
  city: 'Kigali',
  country: 'Rwanda'
};
const hobbies = ['Travelling', 'Reading'];
let undefinedVariable; // declared but not initialized -> undefined
const nullVariable = null; // explicitly null

// 2) Print value and type for each variable
console.log(`name: ${name} (type: ${typeof name})`);
console.log(`age: ${age} (type: ${typeof age})`);
console.log(`isStudent: ${isStudent} (type: ${typeof isStudent})`);
// address: show the object and its type; JSON.stringify makes it readable
console.log('address (raw):', address, `(type: ${typeof address})`);
console.log('address (formatted):', JSON.stringify(address, null, 2));

// hobbies: note typeof returns "object" for arrays; use Array.isArray to check
console.log(`hobbies (value): ${hobbies} (type: ${typeof hobbies})`);
console.log('Is hobbies an Array?', Array.isArray(hobbies));
console.log('hobbies (joined):', hobbies.join(', '));

// undefined and null
console.log(`undefinedVariable: ${undefinedVariable} (type: ${typeof undefinedVariable})`);
console.log(`nullVariable: ${nullVariable} (type: ${typeof nullVariable})`);

// Extra: one-line sentence using template literals
console.log(`My name is ${name}. I am ${age} years old, I live in ${address.city}, ${address.country}. My hobbies: ${hobbies.join(', ')}. Student? ${isStudent}.`);

// Optional: pretty table for objects
console.table(address);