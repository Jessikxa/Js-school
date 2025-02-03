// diceButton = document.getElementById(myButton);
// document.["dice1"].src = Bigdice1.src;

// diceButton when clicked rand dice both players

const myButton = document.getElementById("myButton");
const winst = document.getElementById("Winst");
const gelijkspel = document.getElementById("Gelijkspel");
const verlies = document.getElementById("Verlies");
const winloss = document.getElementById("winLose");
const yDob = document.getElementById("urDob");
const cDob = document.getElementById("comDob");

let dice= [0,0,0,0];
//ydob and cdob into var so that u can compare them easier


let Wonst = 0;
let Gelykspel = 0;
let Verloss = 0;

// let Winst = Wonst + winst;
// let Gelijkspel = Gelykspel + gelijkspel;
// let Verlies = Verloss + verlies;



// var Dice = [5];
// Dice[0] = 1;
// Dice[1] = 2;
// Dice[2] = 3;
// Dice[3] = 4;
// Dice[4] = 5;
// Dice[5] = 6;

// console.log(Dice[1]);


myButton.addEventListener("click", event => {
     event.target.style.backgroundColor = "red";
     event.target.textContent = "ooo";
     myButton.textContent = `Click count: ${event.detail}`;
     txt.textContent = "YOU WIN";
    //  winst.textContent = `Winst: ${event.detail}`;
});

myButton.addEventListener("click", event => {
    for(let i = 0; i< dice.length; i++){
        dice[i] = Math.floor(Math.random() * 6 + 1);
    }

    yDob.textContent = dice[0] + " " + dice[1];
    cDob.textContent = dice[2] + " " + dice[3];
    if(dice[0] + dice[1] > dice[2] + dice[3]){
        // alert("you win");
        Wonst++;
        winst.textContent = `winst: ${Wonst}`;
        winloss.textContent = "You Win!";
    }

    else if(dice[0] + dice[1] < dice[2] + dice[3]){
        Verloss++;
        verlies.textContent = `Verlies: ${Verloss}`;
        winloss.textContent = "You Lose!";
    }

    else if(dice[0] + dice[1] == dice[2] + dice[3]){
        // alert("Gelijkspel");
        Gelykspel++;
        gelijkspel.textContent = `Gelijkspel: ${Gelykspel}`
        winloss.textContent = "Draw!";
    }
});



myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "ooo";
});

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "ooo";
});






// dice[0,1,2,3,4,5];


