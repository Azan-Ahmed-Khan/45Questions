
// function make_shirt(message:string){

//     console.log(`\nYou shirt size is Large by default with the message like ${message}\n`)
//     console.log(`\nYou shirt size is Medium by default with the message like ${message}\n`)
// }

// make_shirt("I love to learn Typescript")


function make_shirt(size="Large",message="I Love Typescript"){

    console.log(`You have order the ${size} size shirt with message like ${message}\n`)
    
}

make_shirt()

make_shirt("Medium")

make_shirt("Small","I like Cryptocurrencies")