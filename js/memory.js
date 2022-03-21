class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pairedCards = [];
  }

  shuffleCards() { 
    if (!this.cards){
      return undefined;
    }
    for (let i=0; i<this.cards.length; i++) {
      const randomCardIndex = Math.floor(Math.random() * this.cards.length);
      const randomCard = this.cards[randomCardIndex];
      this.cards[randomCardIndex] = this.cards[i];
      this.cards[i] = randomCard;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  emptyPickedCardsArray (element1, element2){
    element1.classList.toggle("turned");
    element2.classList.toggle("turned");
    this.pickedCards = [];
  }

  checkIfFinished() {
    if(this.pairsGuessed === (this.cards.length/2)){
      setTimeout(()=>{alert(`Well done ${playerName}! You managed to clear the game in ${pairsClicked*2} clicks, that is the best score in this universe!`)}, 1000);
            document.querySelectorAll('.card').forEach((card) => {
        setTimeout(()=>{
          this.pairsGuessed = 0;
          this.pairsClicked = 0;
          card.classList.toggle("turned");
          }, 5000);
      });
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
