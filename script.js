// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

const emails = [`a@gmail.com`, `b@gmail.com`, `c@gmail.com`, `d@gmail.com`]
const userEmail = prompt(`inserisci la tua mail`)
console.log(emails)
let found = false;

// loop di controllo
for (let i = 0; i < emails.length; i++) {

  if (userEmail === emails[i]) {
    found = true;
  }

}

if (found) {
  console.log(`Benvenuto`)
} else {
  console.log(`Non sei sulla lista`)
}

