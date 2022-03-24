let bool = true;
let i;
do{
    let variabile = prompt("Scegliere tra pari o dispari:");
    let result = variabile.toLowerCase();
    if (result=='dispari'){
        i=1;
        bool = false; //dispari
    } else if (result=='pari'){
        i=0;
        bool = false; //pari
    }
} while(bool);

let num;
do{
    num = prompt("Scegliere un numero compreso tra 1 e 9");
} while(num > 9 || num < 1);

let ris;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  let numRandom = randomIntFromInterval(1, 9);
  console.log(numRandom);

ris = (numRandom + num) % 2; //restituisce 1 o 0
console.log(ris);

if(ris==i){
    alert("HAI VINTO!");
    document.getElementById("vincita").innerHTML = "HAI VINTO!";
} else{
    alert("HAI PERSO!");
    document.getElementById("vincita").innerHTML = "HAI PERSO!";
}