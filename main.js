// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// - creare array mail fittizie
// - creare prompt richiesta mail
// - creare condizione di verifica mail richiesta 
// - stampare console

const arrayMail = ["daniloportelli@hotmail.it", "grazianaciccarelli@hotmail.it", "alessiozaccato@hotmail.it"];
  console.log(arrayMail)

// let inserisciMail = prompt("Inserisci qui la tua Mail")


for (i = 0; i < arrayMail.length; i++){
  let mails = arrayMail[i]
  console.log(`${mails}`)

  
  if(inserisciMail === mails){
    console.log("Puoi accedere alla festa")
  } else if (inserisciMail = mails)  { 
    console.log("Non puoi accedere alla festa")
  } else 
    console.log("Non puoi accedere alla festa")


}





