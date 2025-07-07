console.log(`-----Pali-----`)

// definizione variabili
const userWord = prompt(`Inserisci una parola`)
console.log(`Parola inserita: '${userWord}'`)

const reverseString = reverseStrings(userWord)


// funzione per capovolgere la parola
function reverseStrings(text) {
  return text.split('').reverse().join('')
}

console.log(`Parola capovolta: '${reverseString}'`)

// definiamo quando una parola è palindroma
if(userWord === reverseString){
  console.log(`La parola '${userWord}' è uguale alla parola '${reverseString}'. Quindi la parola scelta è palindroma.`)
}
else{
  console.log(`La parola '${userWord}' è diversa dalla parola '${reverseString}'. Quindi la parola scelta non è palindroma.`)
}
