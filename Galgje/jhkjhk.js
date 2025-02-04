const exampleStrong = document.getElementById("wordPickk");
// const lengthOfString = exampleStrong.value.length;
// console.log(lengthOfString);
const btn = document.getElementById("btn");
const displo = document.getElementById("displo");


function fun1(){
    const lengthOfString = exampleStrong.value.length;
    displo.innerHTML = exampleStrong.value + " " + lengthOfString;
}

btn.addEventListener('click' ,fun1);