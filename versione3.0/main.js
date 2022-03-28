function calcolo() {
    let eta = document.getElementById("eta").value;
    eta = parseInt(eta);
    console.log(typeof eta);
    console.log(eta);

    let km = document.getElementById("km").value;
    eta = parseInt(km);
    console.log(typeof km);
    console.log(km);

    let prezzokm = 0.21 * km;
    console.log(typeof prezzokm);
    console.log(prezzokm);

    if (eta >= 0 && eta <= 11) {

        //BAMBINI
        document.getElementById("risultato").innerHTML = "Il passeggero viaggia gratis.";
    } else if (eta > 11 && eta < 18) {

        //ADOLESCENTI
        prezzokm = (prezzokm - prezzokm * 0.2);
        prezzofin = prezzokm.toFixed(2);
        document.getElementById("risultato").innerHTML = "Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
    } else if (eta > 65) {

        //SENIOR
        prezzokm = (prezzokm - prezzokm * 0.4);
        prezzofin = prezzokm, toFixed(2);
        document.getElementById("risultato").innerHTML = "Il passeggero ha uno sconto del 20% e dovrà pagare: " + prezzofin + "\u20AC";
    } else {

        //ADULTI
        prezzofin = prezzokm.toFixed(2);
        document.getElementById("risultato").innerHTML = "Il passeggero dovrà pagare: " + prezzofin + "\u20AC";
    }
}