// create a template for cards
class Card{                // this will be called in the loop for createDeck in Deck class
    constructor(suit, face, rank) {
    this.suit = suit;
    this.face = face;
    this.rank = rank;
    }
}

// build a deck of cards
class Deck {                // this will be called in the start function of Board class  
    constructor(){
    this.cards = [];

    }
    createDeck() {  
        let suits = ['♥', '♦', '♠', '♣'];
        let faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// loop thru to create combination of suits and faces to create all 52 cards
        for(let i = 0; i<suits.length; i++){
            for(let j = 0; j < faces.length; j++){
                this.cards.push(new Card(suits[i], faces[j], ranks[j])); 
                // pushes a new card into the array for this.cards for every iteration through all the suit/face combinations
                // final product should be a total of 52 individual iterations (aka cards)
            }
        }
    }
// create a loop that randomizes each players hand
// needs to replace a card as each card is dealt
    shuffleDeck(){
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++){
            location1 = Math.floor((Math.random() * this.cards.length));  // gives a random card in the deck
            location2 = Math.floor((Math.random() * this.cards.length));  // another random card in the deck
            tmp = this.cards[location1];    
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    } 
}

// create players
// each player should be identified and have a pile of cards
class Player{
    constructor(name){
        // properties of each player are defined, these will be used in the start function in the Board class
        this.playerName = name;           
        this.playerCards = [];
        this.PlayerScore = 0;
    }
}

// set up the game including player set up and dealing the cards
class Board {
    constructor() {
        this.game = [];
        this.players = [];
        this.scorePlayer1 = 0;   // starting score for each player, will be used in the start, compare and endgame functions
        this.scorePlayer2 = 0;   // starting score for each player, will be used in the start, compare and endgame functions
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));    // creates the first player name
        this.players.push(new Player(playerTwoName));    // creates the second player name
        let d = new Deck();                              // initiates a new instance of a deck
        d.createDeck();                                  // calls the createDeck function for the new deck
        d.shuffleDeck();                                 // calls the shuffleDeck function for the new deck
        this.players[0].playerCards = d.cards.slice(0, 26);    // creates a pile of cards for the first player with the first 26 cards in the deck
        this.players[1].playerCards = d.cards.slice(26, 52);   // creates a pile of cards for the second player with the last 26 cards in the deck
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
    }
    compare(){
        for(let i = 0; i < 26; i++){        
            // loop iterates 26 times through a round, each round constituting of one card per player being presented
            let player1Suit = this.players[0].playerCards[i].suit
            let player1Face = this.players[0].playerCards[i].face
            let player1Rank = this.players[0].playerCards[i].rank
            console.log(i, `Player 1 played a ${player1Face} of ${player1Suit} with a value of ${player1Rank}`)
            // prints out what card and its properties player 1 put down for each round
            let player2Suit = this.players[1].playerCards[i].suit
            let player2Face = this.players[1].playerCards[i].face
            let player2Rank = this.players[1].playerCards[i].rank
            console.log(i, `Player 2 played a ${player2Face} of ${player2Suit} with a value of ${player2Rank}`) 
            // prints out what card and its properties player 2 put down for each round
           if(player1Rank > player2Rank){         
            // defines which player won each round by comparing the rank (aka numerical value) of the cards played in each round
             console.log('Point awarded to: Player 1', );
             // if true then add a point to player 1 score
             this.scorePlayer1++    // ++ adds a point to the player 1 score for every time that player 1 rank was higher per round
                }
            else if(player2Rank > player1Rank){
             console.log('Point awarded to Player 2');   
            // if true then add a point to player 2 score  
            this.scorePlayer2++           
            }
        }
    } 
    endGame(){
        // define the end of game by all cards being compared and player with most points wins
        console.log(`Player 1 Score: ${this.scorePlayer1}`);   // uses a template literal to pull the score stored in line 89
        console.log(`Player 2 Score: ${this.scorePlayer2}`);   // uses a template literal to pull the score stored in line 94
        if(this.scorePlayer1 > this.scorePlayer2){
            return "Player 1 wins"       // return ends the game
        }
        if(this.scorePlayer1 < this.scorePlayer2){
            return "Player 2 wins"
        }
        if(this.scorePlayer1 == this.scorePlayer2){
            return "Players tie"
        }
    }
}
let gameBoard = new Board();
gameBoard.start('Player 1', 'Player 2');
//console.log(gameBoard.players);
gameBoard.compare();
console.log(gameBoard.endGame());



