const Suits = ['♥', '♦', '♠', '♣'];
const Face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
const Rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// build a deck of cards
class Deck {            
    constructor(cards = freshDeck()){
        this.cards = cards;
    }
    get numberOfCards(){
        return this.cards.length
    }
}
   // create a loop that shuffles cards in random order
shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      // get a random card within the deck
      let j = Math.floor(Math.random() * (i + 1));
      // replace the random card with the card before it
      let temp = deck[i];
      let deck[i] = deck[j];
      let deck[j] = temp
    }
}

// create a card
class Card {
    constructor(suit, face){
        this.suit = suit;
        this.face = face;
        this.rank = rank;
    }
}

// create a new instance of the deck
const deck1 = new Deck();
// call the function to create the deck by filling in the array
deck1.createDeck();
// print the cards array
console.log(deck1.cards);


//const Suits = ['♥', '♦', '♠', '♣'];
//const Face = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];


   // pop() {
   //     return this.cards.shift();
   // }
  //  push(card) {
  //      this.cards.push(card);
  //  }
  //  shuffle() {
    // create a loop that puts cards out in a random order of both suit and face
    //    for (let i = this.numberOfCards - 1; i > 0; i--) {
      // get a random card within the deck
   //      const newIndex = Math.floor(Math.random() * (i + 1))
      // replace the random card with the card before it
    //    const oldValue = this.cards[newIndex]
    //    this.cards[newIndex] = this.cards[i]
    //    this.cards[i] = oldValue
  //      }
  //  }
//}

//class Card {
 //       constructor(suit,face){
 //       this.suit = suit;
 //       this.face = face;
//    }
//}

//function freshDeck(){
 //   return Suits.flatMap(suit => {      // loops through all the arrays and condenses them to one array
 //       return Face.map(value => {      // loops through all the values and creates an array
 //           return new Card (suit,value);   // creates a card with a suit and a value array
  //      })
 //   })
//}

//let deck = new Deck();   // deck now has 52 cards with individual combinations of suit+face

//let playerDeck;
//let computerDeck;

//startGame();
//function startGame(){
 //   let deck = new Deck();
 //   deck.shuffle();
//
 //   let deckMidpoint = Math.ceil(deck.numberOfCards / 2);
 //   playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));   // creates a pile of cards for the player
 //   computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));  // creates a pile of cards for the computer
//console.log(playerDeck);
//console.log(computerDeck);
//}

//
