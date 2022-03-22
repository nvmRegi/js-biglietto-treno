const costoKm = 0.21;
let eta = document.getElementById("eta").value;
console.log(eta);
let km = parseInt(document.getElementById("km").value);

let prezzokm = 0.21*km;
console.log(prezzokm);
let prezzofin;
function calcolo(){
    if(eta >= 0 && eta <= 11){
        document.getElementById("risultato").innerHTML = "Il passeggero viaggia gratis.";
    } else if(eta > 11 && eta < 18){
        prezzofin = Math.round((prezzokm - prezzokm * 0.2 + Number.EPSILON) * 100) / 100;
        document.getElementById("risultato").innerHTML = "Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
    } else if(eta > 65){
        prezzofin = Math.round((prezzokm - prezzokm * 0.4 + Number.EPSILON) * 100) / 100;
        document.getElementById("risultato").innerHTML = "Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
    } else{
        prezzofin = prezzokm;
        document.getElementById("risultato").innerHTML = "Il passeggero dovrà pagare: " + prezzofin;
    }
}
