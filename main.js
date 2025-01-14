// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email


// - creare array mail fittizie
// - creare prompt richiesta mail
// - creare condizione di verifica mail richiesta 
// - stampare console

const arrayMails = ["daniloportelli@hotmail.it", "grazianaciccarelli@hotmail.it", "alessiozaccato@hotmail.it"];
let inserisciMail = prompt("Inserisci qui la tua Mail")
let verify = false

for (let i = 0; i < arrayMails.length; i++){
  const mail = arrayMails[i]

 if(inserisciMail = mail){
  verify = true
  console.log("Puoi accedere alla festa")
 } else 
  console.log("Non puoi accedere alla festa")
}







// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const randomNumberCpu = Math.floor(Math.random() * 6) + 1;
  console.log(`Il punteggio di Cpu e' ${randomNumberCpu}`)

const randomNumberUser = (Math.floor(Math.random() * 6) + 1);
  console.log(`Il punteggio di User e' ${randomNumberUser}`)

  if(randomNumberCpu > randomNumberUser){
    console.log("Cpu wins!")
  } else if (randomNumberCpu < randomNumberUser) {
    console.log("User wins!")
  } else 
    console.log("Draw!")





