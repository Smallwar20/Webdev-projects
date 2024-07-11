let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
// for the inside of querySelector, just remember how you modify a class or id with css
let cardsEl = document.querySelector("#cards-el")

//an object
let player = {
    name: "Gamblecore enjoyer",
    chips: 145,
    phrase: function(){
        return "LETS GO GAMBLING!"
    }
}

let playerEl = document.querySelector("#player-el")
let playerPhraseEl = document.querySelector("#playerPhrase-el")
playerEl.textContent = player.name + ": $" + player.chips
playerPhraseEl.textContent = player.phrase()

function getRandomCard(){
    let cardNumber = Math.floor((Math.random()*13)+1)
    if (cardNumber > 10 && cardNumber < 14){
        cardNumber = 10
    }
    else if (cardNumber === 1){
        cardNumber = 11
    }
    return cardNumber
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += " " +  cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message)
}

function newCard(){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        console.log("Drawing a new card from the deck!")
    }
    else{
        console.log("Can't take a card anymore buddy!")
    }
}