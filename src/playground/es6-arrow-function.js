// const square = function (x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// // More concise arrow function expression syntax
// const squareArrow = (x) => x * x

// console.log(squareArrow(8));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));
console.log(getFirstNameArrow('Mike Smith'))