// Code your solutions in this file
let cards = []
// let names = ['ben', 'jon', 'amy']

const writeCards = function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        let newCard = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        cards.push(newCard)
    }
    return cards
}


const countDown = function countdown(int) {
    for (let i = int; i >= 0; i--) {
        console.log(i)
    }
}