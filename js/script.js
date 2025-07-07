// console.log(`-----Pali-----`)

// // definizione variabili
// const userWord = prompt(`Inserisci una parola`)
// console.log(`Parola inserita: '${userWord}'`)

// const reverseString = reverseStrings(userWord)


// // funzione per capovolgere la parola
// function reverseStrings(text) {
//   return text.split('').reverse().join('')
// }

// console.log(`Parola capovolta: '${reverseString}'`)

// // definiamo quando una parola è palindroma
// if(userWord === reverseString){
//   console.log(`La parola '${userWord}' è uguale alla parola '${reverseString}'. Quindi la parola scelta è palindroma.`)
// }
// else{
//   console.log(`La parola '${userWord}' è diversa dalla parola '${reverseString}'. Quindi la parola scelta non è palindroma.`)
// }



console.log(`-----Pari e Dispari-----`)

// definizione variabili
const userEvenOdd = prompt(`Scegli tra pari e dispari`)
const userNumber = parseInt(prompt(`Scegli un numero tra 1 e 5`))
const pcNumber = Math.floor(Math.random() * 5) + 1
let even = `pari`
let odd = `dispari`

console.log(userEvenOdd, userNumber, pcNumber)

function somma(){
  const sum = userNumber + pcNumber
if(sum % 2 === 0){
console.log(`la somma è ${even}`)
}
else{
  console.log(`la somma è ${odd}`)
}
}

somma()
