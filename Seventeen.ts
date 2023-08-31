let invitedFriends = ["Khalid", "Azan", "Faisal", "Ubaid"]
invitedFriends.unshift("Tariq");
invitedFriends.splice(3,0,"Jahanzaib");
invitedFriends.push("Faraz")

console.log("Sorry for that but we can invite only two person at dinner");

let shrinkFriend=invitedFriends.slice(0);

invitedFriends.pop();
console.log(`Sorry Mr. ${shrinkFriend[6]}, you are removed from the list`);

invitedFriends.pop();
console.log(`Sorry Mr. ${shrinkFriend[5]}, you are removed from the list`);

invitedFriends.pop();
console.log(`Sorry Mr. ${shrinkFriend[4]}, you are removed from the list`);

invitedFriends.pop();
console.log(`Sorry Mr. ${shrinkFriend[3]}, you are removed from the list`);

invitedFriends.pop();
console.log(`Sorry Mr. ${shrinkFriend[2]}, you are removed from the list`);

console.log(invitedFriends);//two person left

invitedFriends.pop();
invitedFriends.pop();

console.log(invitedFriends);
