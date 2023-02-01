var assert = chai.assert;

// does the createDeck function have 52 cards
    // expected: yes

describe('Deck test', function(){
    let deck = new Deck;
    deck.createDeck();
    it("There should be 52 cards in a deck", function(){
        console.log(deck.cards.length);
        assert(deck.cards.length == 52)
    })
 })

// does each card contain all 3 of the card properties
    // expected: yes, each card should be a unique combintion of suit, face and rank
describe('Card test', function(){
    let card = new Card('♥', "Ace", 1);
    it("There should be a suit, face and rank for each card", function(){
        assert(card.suit && card.face && card.rank)
    })
})

// does each player have a 26 cards
    // expected: yes
describe('number of cards test', function(){
    let board = new Board();
    board.start("Player1", "Player2");
    it('Each player should have 26 cards', function(){
        assert(board.players[0].playerCards.length == 26 && board.players[1].playerCards.length == 26)
    })
})


// is there a score for each player
    // expected: yes
describe('number of cards test', function(){
    let board = new Board();
    board.endGame();
    it('Each player should have a score', function(){
        assert(score.Player1 !== 0 && score.Player2 !== 0)
    })
})

    
// can a player have a score less than zero
    // expected: no 

// is there a mechanism to declare a winner
    // expected: yes


