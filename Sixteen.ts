let invitedFriends = ["Khalid", "Azan", "Faisal", "Ubaid"]
invitedFriends.unshift("Tariq");
invitedFriends.splice(3,0,"Jahanzaib");
invitedFriends.push("Faraz")

console.log(`Hello Mr. ${invitedFriends[0]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${invitedFriends[1]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${invitedFriends[2]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${invitedFriends[4]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${invitedFriends[5]}, You are still invited for dinner at my home`);
console.log(`Hello Mr. ${invitedFriends[6]}, You are still invited for dinner at my home`);

console.log("We have found one big table for dinner")
console.log(invitedFriends);