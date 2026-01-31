// let age = 19;
// let greetingText = "hi, I'm nonosha!!!!";
// alert(greetingText);
// greetingText = "HI, i am REALLY nonosha!!";
// alert(greetingText);
// alert(age);

let age = 19;
let userName = "Nonosha";
let hobbies = ["Drawing", "Singing", "Writing", "Farting in da Cah"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log("my adult years " + "= " + totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: "Nonosha", //Property
  greet() {
    //Method
    console.log("haiii");
  }
};

person.greet();

// // (papas code :) /////////////////////////////////////////////////////////
// let infoUser = { fName: "Nohid", lName: "Akhmed", age: 12 };

// let fName = 'Nohid';
// let lName = 'Akhmed';
// // let fullName = fName + ' ' + lName;
// let fullName = `${fName} ${lName}`;
// // alert(fullName)

// function myCalc(x, y) {
//   let z;
//   z = x + y;
//   return z ;
// }

// let outputCalc = myCalc(9, 17);
// alert(outputCalc);
