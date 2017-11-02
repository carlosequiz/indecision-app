var nameVar = 'Carlos';
var nameVar = 'Pedro';
console.log('nameVar', nameVar)

let nameLet = 'Susana';
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Coco';
console.log('nameConst', nameConst)

// Block scoping

const fullName = 'Carlos Equiz';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)