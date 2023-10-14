//! UNIT TESTS:
//? 1. A function called "multiplication" that returns the product
//? of the two input numbers.
//* a. Expect multiplication(x, y) to return the product of (x * y)
//*     i. Expect multiplication(2, 10) to return 20.
//*     ii. Expect that when the multiplication function is called
//*     with parameters(x, y) it will return
//* the product of those two parameters.
//* b. Tests:
//*     i. Ensure that parameters are both number via typeof validation
//*     ii. Ensure that null value displays alert of missing value.
//*     iii. Ensure that known vairables are defined and available
//*     (i.e. - Euler's number e = 2.71828....)
//*

// Constant Variables:
const e = 2.81828;
const pi = 3.14;
const tau = 6.28318;
const yEulerMasch = 0.577;
//TODO INPUT TEST VALUES:
//TODO Test Set 1:
let x = 9;
let y = 5;
//TODO Test Set 2:
// let x = 9;
// let y = 0;
//TODO Test Set 3:
// let x = 1;
// let y = e;
//TODO Test Set 4:
// let x = 'word';
// let y = 5;
//TODO Test Set 5:
// let x = 1;
// let y = true;
//TODO Test Set 6:
// let x = 1;
// let y = null;

//* 1st Iteration:

// function multiplication() {
//     if (typeof x != 'number' || typeof y != 'number') {
//         console.log('Inavlid value, please enter numeric value(s)');
//     }
//     if (typeof x === null) {
//         x = 0;
//     }
//     if (typeof y === null) {
//         y = 0;
//     }
//     console.log(x * y);
// };

//* 2nd Iteration:
/*
function multiplication() {
  typeof x === null || typeof y === null
    ? console.log(0)
    : typeof x != "number" || typeof y != "number"
    ? console.log("Invalid value, please enter valid numeric value(s)")
    : console.log(x * y);
}
multiplication();
*/

//? 2. A function called "concatOdds" takes two arrays of integers as
//? parameters.It should return a single array that only contains the
//? odd numbers, in ascending order, contained in either of the two arrays.
//* a. Expect that concatOdds([9, -5, 3,], [2, 4, 6, 7, -5],
//* [82, 56, 55, -103,],) will return [9, -5, 3, 7, 55, -103,]
//*     i. Expect the concatOdds to pull all valid number type data that
//*     are odd from the array and then concatenate them together into
//*     a single array.
//*     ii. The code will verify that the numbers are odd and add them to
//*     the newArray.
//*     iii. The code will ignore the the numbers that are not equal to
//*     odd number values.
//*     iv. The code will eliminate duplicate numValues from the newArray
//* b. Tests:
//*     i. Validate that all array values added to the newArray are typeof
//*     number
//*     ii. If array values are not equal to typeof number, throw alert
//*     stating data specific data in the array will be ignored.
//*         i.e. - Not valid data types: string, boolean, undefined, null,
//*         symbol, object, BigInt,)

// TODO INPUT TEST VALUES:
// TODO Test Array Set 1:
const arr1 = [93, -5, 31];
const arr2 = [2, 4, 6986, 67, -5];
const arr3 = [82, 56, 55, -103, 999];
const rejectsArray = [];
const finalArray = [];
// TODO Test Array Set 2:
// const arr1 = [9, -5, 'shrink'];
// const arr2 = [2, 4, BigInt(6986), tru, -5];
// const arr3 = [82, 56, null, -103, BigInt(999)];
// const finalArray = [];

// 1st Iteration:
/*
function concatOdds(arr1, arr2, arr3) {
  for (i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "number" || typeof arr1[i] === BigInt) {
      if (arr1[i] % 2 !== 0) {
        newArray.push(arr1[i]);
      }
    }
  }
  for (i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === "number" || typeof arr2[i] === BigInt) {
      if (arr2[i] % 2 !== 0) {
        newArray.push(arr2[i]);
      }
    }
  }
  for (i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === "number" || typeof arr3[i] === BigInt) {
      if (arr3[i] % 2 !== 0) {
        newArray.push(arr3[i]);
      }
    }
  }
}
*/
// 2nd Iteration:
/*
function concatOdds(arr1, arr2, arr3) {
  let holdingArray = arr1.concat(arr2, arr3);
  const concatinatedArray = [];
  //*CONCATINATION && DATA TYPE VALIDATION:
  for (i = 0; i < holdingArray.length; i++) {
    if (typeof holdingArray[i] === "number") {
      if (holdingArray[i] % 2 !== 0) {
        concatinatedArray.push(holdingArray[i]);
      }
    } else {
        //*ADDING REJECTED VALUES TO NEW ARRAY:
        rejectsArray.push(holdingArray[i]);
    }
  }
    console.log(`Concatination result: ${concatinatedArray}`);
        //*REMOVING DUPLICATE VALUES FROM FINAL ARRAY:
        finalArray = concatinatedArray.filter(
            (value, index) => concatinatedArray.indexOf(value) === index
    );
    //*DISPLAYING FINAL RESULT AND REJECTED ARRAY VALUES:
    console.log(`Removal of Duplicate Value result: ${finalArray}`);
    console.log(rejectsArray);
}

concatOdds(arr1, arr2, arr3);
*/

//! FUNCTIONAL TESTS:
//? 1. A shopping cart checkout feature that allows a user to
//? check out as a guest(without an account), or as a logged -in
//? user. They should be allowed to do either, but should be
//? asked if hey want to create an account or log in if they
//? check out as a guest.

//* a. Functional Test:
//*     i. The client can input their membership id and the discount is
//*         applied to the cart values.
//*     ii. The client can input the phone number associated with their
//*         membership and the discount is applied to the cart values.
//*     iii. If the cart is empty the screen will display "Please start
//*         scanning items."
//*     iv. When an item is scanned with a verified membership the
//*     discounted price will display and the amount saved and the total
//*         is updated.
//*     v. When an item is scanned without a verified membership, the
//*     price will displayed and the total amount will display as well as
//*         how much would be saved if the shopper had a membership.
//*     vi. Items on sale will be discounted for non-members and the screen
//*         will display the discounted price of the item(s).
//*     vii. Items on sale will be discounted on top of the shopper's
//*         membership discounts.
//*     viii.

// Members Info Array

const membershipInfo = [
  {
    id: 1779,
    fname: "Thomas",
    lname: "Jefferson",
    phoneNum: 9876509876,
    membership: true,
  },
  {
    id: 1777,
    fname: "John",
    lname: "Adams",
    phoneNum: 1098765432,
    membership: false,
  },
  {
    id: 1778,
    fname: "Samuel",
    lname: "Adams",
    phoneNum: 5432154321,
    membership: true,
  },
  {
    id: 1776,
    fname: "Benjamin",
    lname: "Franklin",
    phoneNum: 1234567891,
    membership: true,
  },
  {
    id: 1780,
    fname: "Alexander",
    lname: "Hamilton",
    phoneNum: 6789054321,
    membership: true,
  },
];

//TODO INPUT TEST VALUES:
//TODO Test Set 1:
let shopperEntry = 1098765432;
let memDiscount = 0;
//Food Item Arrays:
const purchaseItems = [
  { itemName: "Apple", idNum: 123, price: 0.45 },
  { itemName: "Orange", idNum: 456, price: 0.35 },
  { itemName: "Pear", idNum: 789, price: 0.7 },
  { itemName: "Dragon Fruit", idNum: 1012, price: 2.31 },
];

// Validate Membership by member id || phoneNum
function memValidation(shopperInput, array) {
  for (i = 0; i < membershipInfo.length; i++) {
    if (membershipInfo[i].phoneNum === shopperEntry) {
      return (memDiscount = 0.25);
    } else {
      //(membershipInfo[i].phoneNum !== shopperEntry){
      console.log(
        "No membership found.Please go to our website to sign up and find out about more deals."
      );
      return (memDiscount = 0);
    }
  }
  return memDiscountl;
};

console.log(memValidation(shopperEntry, membershipInfo));
