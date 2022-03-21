const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  
  let playerName = prompt("What's your name?");
  let playerNameElement1 = document.getElementById("playerName1");
  let playerNameElement2 = document.getElementById("playerName2");
  playerNameElement1.innerHTML = playerName;
  playerNameElement2.innerHTML = playerName;

  let html = '';
  memoryGame.shuffleCards(memoryGame.cards);
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector('#memory-board').innerHTML = html;
 
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
        if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle("turned");
        memoryGame.pickedCards.push(card);
      } 
      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML)){
          memoryGame.pickedCards = []
        } else {
          setTimeout(()=>{memoryGame.emptyPickedCardsArray(memoryGame.pickedCards[0], memoryGame.pickedCards[1])}, 1500);
        }
      }
      let pairsClickedScore = document.getElementById("pairs-clicked");
      pairsClickedScore.innerHTML = memoryGame.pairsClicked;
      let pairsGuessedScore = document.getElementById("pairs-guessed");
      pairsGuessedScore.innerHTML= memoryGame.pairsGuessed;
      memoryGame.checkIfFinished();    
    });
  });
});

// issue 1:
// Uncaught TypeErrror thrown if third card is clicked before the other 2 (not equal) turn back
// Can affect gameplay if player clicks on multiple images during those 1.5 seconds
