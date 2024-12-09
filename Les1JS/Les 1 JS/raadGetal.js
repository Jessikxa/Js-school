//de gebruiker mag proberen om het 'te raden' getal te raden.
//Het te raden getal mag gewoon een vast getal zijn dat in de code staat (hardcoded)

//Een regel code is gegeven, hoe nu verder?
let numberGuessed = prompt("Raad het getal (1 tot en met 10)");
let winningNum = 4;
console.log(numberGuessed);



while(numberGuessed != winningNum){
    let numberGuessed = prompt("Raad het getal (1 tot en met 10)");

     if(numberGuessed > winningNum){
        console.log("boo");
        // alert("wrong. lower");
    }
     else {
        console.log("boo");
        // alert("wrong. higher");
    }

    if(numberGuessed == winningNum){
        console.log("woo");
        alert("you guessed it correctly!");
        break;    
    }
    
}


// if(numberGuessed == winningNum){
//     console.log("woo");
//     alert("you guessed it correctly!");
// }


// (numberGuessed < winningNum)