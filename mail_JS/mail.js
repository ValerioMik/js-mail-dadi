/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina. */

/* creo una lista di mail per entrare */

const emailAccesso = ["valerio@hotmail.com","marco123@live.it","andrea@hotmail.com","pier@gmail.com","massimo@tnt.it","alessandro@gmail.it" ];
for (let i = 0; i < emailAccesso.length;i++ )
/* console.log(emailAccesso[i]);
 */
/* faccio si che l'utente inserisca la propria mail  */

const emailUtent = prompt("prego inserisci la tua email");
console.log(emailUtent);

/* faciio in modo che il computer compari l'email dell'utente con la lista */
/* se l'email e all'interno della lista */
if(emailUtent == emailAccesso){
    const acessCons = ("Accesso consentito")
            /* stampo la scritta complimenti puoi entrare */
    console.log(acessCons);
}else (emailUtent != emailAccesso)
        /* altrimenti stampo la scritta spiacenti non puo entrare la sua email non cmpare nella lista */
    const acessNegato = ("Accesso negato non sei in lista")
    console.log(acessNegato);


        /* altrimenti stampo la scritta spiacenti non puo entrare la sua email non cmpare nella lista */

/* spero che tutto funzioni :-) */