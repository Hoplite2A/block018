//! UNIT TESTS:
//? 1. A function called "multiplication" that returns the product of the two input numbers.
    //* a. Expect multiplication(x, y) to return the product of (x * y)
        //* i.    Expect multiplication(2, 10) to return 20.
        //* ii.   Expect that when the multiplication function is called with parameters(x, y) it will return 
        //* the product of those two parameters.
    //* b. Tests:
        //* i. Ensure that parameters are both number via typeof validation
        //* ii. Ensure that null value displays alert of missing value.
        //* iii. Ensure that known vairables are defined and available (i.e. - Euler's number e = 2.71828....)
//*




//? 2. A function called "concatOdds" takes two arrays of integers as parameters. It should return a single array that  
//? only contains the odd numbers, in ascending order, contained in either of the two arrays.
    //* a. Expect that concatOdds([9, -5, 3,], [2, 4, 6, 7, -5], [82, 56, 55, -103,],) will return [9, -5, 3, 7, 55, -103,]
        //* i. Expect the concatOdds to pull all valid number type data that are odd from the array and then concatenate  
        //* them together into a single array.
        //* ii. The code will verify that the numbers are odd and add them to the newArray.
        //* iii. The code will ignore the the numbers that are not equal to odd number values.
        //* iv. The code will eliminate duplicate numValues from the newArray
    //* b. Tests:
        //* i. Validate that all array values added to the newArray are typeof number
        //* ii. If array values are not equal to typeof number, throw alert stating data specific data in the
        //* array will be ignored.
            //* i.e. - Not valid data types: string, boolean, undefined, null, symbol, object, BigInt,)

const arr1 = [9, -5, 3,];
const arr2 = [2, 4, BigInt(6986), 7, -5];
const arr3 = [82, 56, 55, -103, BigInt(999),];
const finalArray = [];

// 1st Iteration:

function concatOdds(arr1, arr2, arr3) {
    for (i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] === 'number' || typeof arr1[i] === BigInt) {
            if (arr1[i] % 2 !== 0) {
                newArray.push(arr1[i]);
            }
        }
    }
    for (i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] === 'number' || typeof arr2[i] === BigInt) {
            if (arr2[i] % 2 !== 0) {
                newArray.push(arr2[i]);
            }
        }
    }
    for (i = 0; i < arr3.length; i++) {
        if (typeof arr3[i] === 'number' || typeof arr3[i] === BigInt) {
            if (arr3[i] % 2 !== 0) {
                newArray.push(arr3[i]);
            }
        }
    }
};


// 2nd Iteration:
function concatOdds(arr1, arr2, arr3) {
    let holdingArray = arr1.concat(arr2, arr3);
    const concatinatedArray = [];
        //*CONCATINATION && DATA TYPE VALIDATION:
        for (i = 0; i < holdingArray.length; i++) {
            if (typeof holdingArray[i] === 'number'){
                if (holdingArray[i] % 2 !== 0) {
                    concatinatedArray.push(holdingArray[i]);
                }
            }
        }
        console.log(`Concatination result: ${concatinatedArray}`);
    finalArray = concatinatedArray.filter((value, index) => concatinatedArray.indexOf(value) === index);
        console.log(`Removal of Duplicate Value result: ${finalArray}`);
};

concatOdds(arr1, arr2, arr3);


//!
//?
//?
