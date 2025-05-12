const exampleStrong = document.getElementById("wordPickk");
// const lengthOfString = exampleStrong.value.length;
// console.log(lengthOfString);
const btn = document.getElementById("btn");
const displo = document.getElementById("displo");

word = exampleStrong.value

function WordToDash(){
    const lengthOfString = exampleStrong.value.length;
    const word = exampleStrong.value;
    const wordDasg = "-" * len(word);
    displo.innerHTML = wordDasg + " " + lengthOfString;
}

btn.addEventListener('click' ,fun1);



//  let guessingGame = document.getElementById(guessingGame);

//  guessingGame.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     const xyz = ${event: value};
//  });