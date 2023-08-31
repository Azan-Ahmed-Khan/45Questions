"use strict";
let currentUser = ["Azan", "Khalid", "OWAIS", "Ubaid", "miral"];
let newUsers = ["Jahanzaib", "Tariq", "Minhaj",];
var matchFound = false;
for (let i = 0; i < newUsers.length; i++) {
    for (let j = 0; j < currentUser.length; j++) {
        if (newUsers[i].toLocaleLowerCase() === currentUser[j].toLocaleLowerCase()) {
            matchFound = true;
            console.log(`\nYou need to enter new username \nbecause the username "${newUsers[i]}" is already exist\t\n`);
            break;
        }
    }
}
if (matchFound === false) {
    console.log("The user name is available");
}
