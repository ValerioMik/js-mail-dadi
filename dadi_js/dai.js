/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/* far generare un numero da 1 a 6 all'utente */
    let numeroTente = Math.floor((Math.random() * 6) + 1)
    console.log("questo e il tuo numero: "+numeroTente);
/* far generare un numero da 1 a 6 al computer */
    let numerocomputer = Math.floor((Math.random() * 6) + 1)
    console.log("questo e il numero computer: "+numerocomputer);
/* controllo del numero piu alto */
    if(numeroTente > numerocomputer){
        console.log("complimenti hai vinto tu");
    }else if(numeroTente == numerocomputer){
        console.log("avete pareggiato riprovate");
    }else {
        console.log("ha vinto il computer");
    }
    
    
/* stampo chi ha vinto */