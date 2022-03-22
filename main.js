const costoKm = 0.21;
let eta;
let km;

do{
    eta = parseInt(prompt("Quanti anni hai?"));
} while (eta < 0)

do{
    km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
} while (km < 0)

let prezzokm = 0.21*km;
let prezzofin;
if(eta >= 0 && eta <= 11){
    alert("Il passeggero viaggia gratis.")
} else if(eta > 11 && eta < 18){
    prezzofin = Math.round((prezzokm - prezzokm * 0.2 + Number.EPSILON) * 100) / 100;
    alert("Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC");
    console.log(prezzofin);
} else if(eta > 65){
    prezzofin = Math.round((prezzokm - prezzokm * 0.4 + Number.EPSILON) * 100) / 100;
    alert("Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC");
} else{
    prezzofin = prezzokm;
    alert("Il passeggero dovrà pagare: " + prezzofin);
}
