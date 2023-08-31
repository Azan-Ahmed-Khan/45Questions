"use strict";
let ordinal_number = [1, 2, 7, 8, 9, 4, 5, 6, 3];
for (let i = 0; i < ordinal_number.length; i++) {
    if (ordinal_number.sort()[i] === 1) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 1st`);
    }
    else if (ordinal_number.sort()[i] === 2) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 2nd`);
    }
    else if (ordinal_number.sort()[i] === 3) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 3rd`);
    }
    else if (ordinal_number.sort()[i] === 4) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 4th`);
    }
    else if (ordinal_number.sort()[i] === 5) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 5th`);
    }
    else if (ordinal_number.sort()[i] === 6) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 6th`);
    }
    else if (ordinal_number.sort()[i] === 7) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 7th`);
    }
    else if (ordinal_number.sort()[i] === 8) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 8th`);
    }
    else if (ordinal_number.sort()[i] === 9) {
        console.log(`The ordinal number of ${ordinal_number[i]} is 9th`);
    }
}
