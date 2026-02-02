//math operations//

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); // Modulus operator; Remainder: 2
console.log(10 + 3 - 5 * 10);

let result = (10 + 3 - 5) * 10;
result = 10 * 4;

//math shortcuts//

result++; // result = result + 1;
result--; // result = result - 1;

result += 5; // result = result + 5;
result -= 5; // result = result - 5;
result /= 5; // result = result / 5;
result *= 5; // result = result * 5;
console.log(result);


//////////////////////////
let myName = 'Noidacka';
let myAge = 19;
console.log(myName, myAge);
let myFriends;
myFriends = ['salma', 'reem'];
console.log(myFriends);
console.log(myFriends[0]);

let myOccupation = {
  title: 'developer',
  education: 'LSC',
};
console.log(myOccupation);
console.log(myOccupation.title);


function myFunc(){
  console.log('My name is ' + myName + 'and I am ' + myAge);
  
};

myFunc();
myFunc();
myFunc();