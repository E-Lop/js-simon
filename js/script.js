/* Visualizzare in un alert 5 numeri casuali.
30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// ---------------------------------------------------------
// ANALISI
// ---------------------------------------------------------

// generazione 5 numeri casuali univoci, salvati in array
// prompt con 5 numeri da indovinare
// creazione timer di 30 secondi
// funzione con 5 prompt
// salvataggio numeri utente in array
// se numeri random include numero utente, push dentro terzo array
// prompt con quanti numeri indovinati (length terzo array) e quali (console log terzo array)

// ---------------------------------------------------------
// quantità di numeri casuali da indovinare
const quantityOfNumbers = 5;
// valore minimo del numero casuale
const minRange = 1;
// valore massimo del numero casuale
const maxRange = 100;
// array che contiene i numeri dati dall'utente
const userNumbersArray = [];

let mysteryNumbersArray = generateRandomNumbers(
  quantityOfNumbers,
  minRange,
  maxRange
);
// todo test
console.log('array numeri misteriosi', mysteryNumbersArray);

let gameRulesMessage = alert(
  `Memorizza questi numeri: ${mysteryNumbersArray}.
  Tra 30 secondi scrivi i numeri visualizzati uno alla volta. Vediamo quanti te ne ricordi.`
);

setTimeout(askNumbers, 5000);
// ---------------------------------------------------------
// UTILITY FUNCTIONS
// ---------------------------------------------------------
// chiedo all'utente un numero univoco finchè ne ottengo 5 e lo salvo in un array
function askNumbers() {
  while (userNumbersArray.length < quantityOfNumbers) {
    const userInput = parseInt(prompt('dimmi un numero tra 1 e 100'));
    if (!userNumbersArray.includes(userInput)) {
      userNumbersArray.push(userInput);
    }
  }
  console.log('array numeri utente', userNumbersArray);
}

// genera un array di x elementi con numeri casuali tra minRange e maxRange (inclusi)
// quantityOfNumbers --> quantità elementi da creare
// minRange --> valore minimo del numero casuale
// maxRange --> valore massimo del numero casuale
function generateRandomNumbers(quantityOfNumbers, minRange, maxRange) {
  // genero array per numeri casuali
  const randomNumbersArray = [];

  // genero elementi finchè array.length = quantityOfNumbers
  while (randomNumbersArray.length < quantityOfNumbers) {
    const randomNumber = getRndInteger(minRange, maxRange);
    // se il numero non è gia presente nell'array allora lo aggiungo
    if (!randomNumbersArray.includes(randomNumber)) {
      randomNumbersArray.push(randomNumber);
    }
  }
  return randomNumbersArray;
}

// generatore di numeri casuali tra min e max (inclusi)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
