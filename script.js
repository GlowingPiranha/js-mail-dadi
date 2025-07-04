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



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const randomPcNumbers = []
const randomUserNumbers = []

for (let i = 0; i < 1; i++) {
  const pcNumber = Math.floor(Math.random() * 6) + 1;
  const userNumber = Math.floor(Math.random() * 6) + 1;

  console.log(pcNumber)
  console.log(userNumber)

  randomPcNumbers.push(pcNumber);
  randomUserNumbers.push(userNumber);
  let pcPoints = 0;
  let userPoints = 0;
  if (pcNumber > userNumber) {
    pcPoints++;
  } else if (pcNumber < userNumber) {
    userPoints++;
  }

  // controllo il punteggio 

  if (pcPoints > userPoints) {
    console.log(`il PC ha fatto: ${randomPcNumbers}. il Giocatore ha fatto: ${randomUserNumbers}. ha vinto il PC`);

  } else if (pcPoints < userPoints) {
    console.log(`il PC ha fatto: ${randomPcNumbers}. il Giocatore ha fatto: ${randomUserNumbers}. ha vinto il Giocatore`);

  } else {
    console.log(`il PC ha fatto: ${randomPcNumbers}. il Giocatore ha fatto: ${randomUserNumbers}. è un pareggio`)
  }
}