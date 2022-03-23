let eta;
let km;

do{
    eta = prompt("Quanti anni hai?");
} while (eta < 0)

do{
    km = prompt("Quanti chilometri vuoi percorrere?");
} while (km < 0)

let prezzokm = 0.21*km;
let prezzofin;

if(eta >= 0 && eta <= 11){  //BAMBINI

    alert("Il passeggero viaggia gratis.")
    document.getElementById("finale").innerHTML="Il passeggero viaggia gratis.";

} else if(eta > 11 && eta < 18){    //ADOLESCENTI

    prezzofin = Math.round((prezzokm - prezzokm * 0.2 + Number.EPSILON) * 100) / 100;
    alert("Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC");
    document.getElementById("finale").innerHTML="Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";

} else if(eta >= 65){   //SENIOR

    prezzofin = Math.round((prezzokm - prezzokm * 0.4 + Number.EPSILON) * 100) / 100;
    alert("Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC");
    document.getElementById("finale").innerHTML="Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
} else{

    if(prezzofin==null || prezzofin==NaN || prezzofin==undefined){ //ERRORE
        alert("ERRORE");
        document.getElementById("finale").innerHTML="ERRORE";

    } else{ //PREZZO NON SCONTATO

        prezzofin = prezzokm;
        alert("Il passeggero dovrà pagare: " + prezzofin + "\u20AC");
        document.getElementById("finale").innerHTML="Il passeggero dovrà pagare: " + prezzofin + "\u20AC";

    }
       
}
