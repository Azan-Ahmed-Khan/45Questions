let invitedFriends = ["Khalid", "Azan", "Faisal", "Ubaid"];
invitedFriends.splice(1, 0, "Jahanzaib");
let newList = invitedFriends.slice(1);

console.log(`Hello Mr. ${newList[0]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${newList[1]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${newList[2]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${newList[3]}, You are still invited for dinner at my home`);
console.log(`This is to inform you that Mr. ${invitedFriends[0]} can not make dinner with us`);

console.log(invitedFriends);
console.log(newList);