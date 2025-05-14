const exampleStrong = document.getElementById("wordPickk");
// const lengthOfString = exampleStrong.value.length;
// console.log(lengthOfString);
const btn = document.getElementById("btn");
const displo = document.getElementById("displo");
const Lives = document.getElementById("Lives");
const Text = document.getElementById("wordPickk");

var wordToGuess = "";
var numberOfLives = 10;

// word = exampleStrong.value

function WordToDash(){
    const lengthOfString = exampleStrong.value.length;
    const word = exampleStrong.value;
    const wordDasg = "-" * len(word);
    displo.innerHTML = wordDasg + " " + lengthOfString;
}

// btn.addEventListener('click' ,fun1);

function guessesLeft()
{

        numberOfLives--
        Lives.textContent = `Lives left: ${numberOfLives}`;
    
        if(numberOfLives < 0)
            {
                numberOfLives = 0;
                Lives.textContent = `Lives left: ${numberOfLives}`;
                displo.textContent = "You lose. Try again?";
            }
           
        return; //need a try again button that appears after number of lives hits 0 that restarts the game
    
    
}

// btn.addEventListener("click", event => {
//     numberOfLives--
//     Lives.textContent = `Lives left: ${numberOfLives}`;

//     if(numberOfLives < 0)
//         {
//             numberOfLives = 0;
//             Lives.textContent = `Lives left: ${numberOfLives}`;
//             displo.textContent = "You lose. Try again?";
//         }
      
//     return Lives + displo;  //need a try again button that appears after number of lives hits 0 that restarts the game
// })

function IsEmpty() {
    if (document.forms['form'].wordPickk.value === "") {
      alert("empty");
      return false;
    }
    else{console.log(wordPickk.value);}
    guessesLeft();
    document.getElementById("wordPickk").value = ""
    return true;
}

// getElementById("wordPickk").textContent = "";


// function resetForm()
// {
//     var Form = document.forms['form'].reset;
//     Form.reset();
// }
//  let guessingGame = document.getElementById(guessingGame);

//  guessingGame.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     const xyz = ${event: value};
//  })