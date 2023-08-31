let users=["Farrukh","Salman","Kashan","Irfan","Admin"];

for (let i=0;i<users.length;i++){

    if(users[i]=="Admin"){

        console.log("Hello Admin, would you like to see report")
    }else{
        console.log(`Hello ${users[i]}, thank you for log in`)
    }

}