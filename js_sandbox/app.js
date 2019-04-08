// function reverse(str){
//  return str.split("").reverse().join("");
// // let splitStr = str.split("");
// // let revStr = splitStr.reverse();
// // let joinStr = revStr.join("");
// // return joinStr;
// }
// console.log(reverse('hello'));

const form = document.querySelector('.form');
const UName = document.querySelector('[name="name"]');
const Uage = document.querySelector('[name="age"]');
const Ushoe = document.querySelector('[name="shoe"]');
// console.log(fName);
form.addEventListener('submit', getData);

// CONSTRUCTOR FUNCTION
function Person (firnme, age, shoe) {
  this.firnme = firnme;
  this.age = age;
  this.shoe = shoe;
}

Person.prototype.color = '';
// console.log(Person);

// function getData(e) {
//   e.preventDefault();
//   let name = UName.value;
//   let age = Uage.value;
//   let shoe = Ushoe.value;
//   let Person2 = new Person(name, age, shoe);
//   console.log(Person2);
  
// }

function getData(e) {
  e.preventDefault();
  let Person2 = new Person(UName.value, Uage.value, Ushoe.value);
  Person2.color = 'red';
  console.log(Person2);
  
}

 