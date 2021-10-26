/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina. */


/* faccio si che l'utente inserisca la propria mail  */
const emailUtent = prompt("prego inserisci la tua email");
/* creo una lista di mail per entrare */
const emailAccesso = ["valerio@hotmail.com","marco123@live.it","andrea@hotmail.com","pier@gmail.com","massimo@tnt.it","alessandro@gmail.it" ];

let emailinlista = false;
for (let i = 0; i < emailAccesso.length; i++ ) {
    /* faciio in modo che il computer compari l'email dell'utente con la lista */
if (emailUtent === emailAccesso[i]) {
     emailinlista = true;
  }
}
/* se l'email e all'interno della lista */
        /* stampo la scritta complimenti puoi entrare */
if (emailinlista === true) {
    console.log('sei nella lista complimenti ora puoi entrare');
}else {
     /* altrimenti stampo la scritta spiacenti non puo entrare la sua email non cmpare nella lista */
    console.log('spiacente email non trovata');
}
       
/* spero che tutto funzioni :-) */