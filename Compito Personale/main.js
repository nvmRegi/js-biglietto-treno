let eta, km, prezzokm, prezzofin;


function dati(){
    eta = parseInt(prompt("Inserisci l'età: "));
    console.log(typeof eta);
    console.log(eta);

    km = parseInt(prompt("Inserisci i km che vuoi fare: "));
    console.log(typeof km);
    console.log(km);

    prezzokm = 0.21 * km;
    console.log(typeof prezzokm);
    console.log(prezzokm);

    if(eta >= 0 && eta <= 11){ 

        //BAMBINI
        document.getElementById("risultato").innerHTML = "Il passeggero viaggia gratis.";
    } else if(eta > 11 && eta < 18){

        //ADOLESCENTI
        prezzofin = Math.round((prezzokm - prezzokm * 0.2 + Number.EPSILON) * 100) / 100;
        document.getElementById("risultato").innerHTML = "Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
    } else if(eta > 65){

        //ADULTI
        prezzofin = Math.round((prezzokm - prezzokm * 0.4 + Number.EPSILON) * 100) / 100;
        document.getElementById("risultato").innerHTML = "Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
    } else{

        //SENIOR
        prezzofin = prezzokm;
        document.getElementById("risultato").innerHTML = "Il passeggero dovrà pagare: " + prezzofin;
    }
}
