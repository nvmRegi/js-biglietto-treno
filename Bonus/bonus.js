let persona1 = parseInt(prompt("Inserire l'età della prima persona:"));
let persona2 = parseInt(prompt("Inserire l'età della seconda persona:"));

console.log(persona1);
console.log(persona2);
if(persona1 > persona2){
    alert("La prima persona è più grande.");
} else if (persona1 == persona2){
    alert("Hanno la stessa età.")
}else{
    alert("La seconda persona è più grande.")
}