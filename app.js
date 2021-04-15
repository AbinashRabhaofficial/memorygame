document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'cookie',
      img: 'cookie.png'
    },
    {
      name: 'cookie',
      img: 'cookie.png'
    },
    {
      name: 'cat',
      img: 'cat.png'
    },
    {
      name: 'cat',
      img: 'cat.png'
    },
    {
      name: 'coffee',
      img: 'coffee.png'
    },
    {
      name: 'coffee',
      img: 'coffee.png'
    },
    {
      name: 'apple',
      img: 'apple.png'
    },
    {
      name: 'apple',
      img: 'apple.png'
    },
    {
      name: 'pepper',
      img: 'pepper.png'
    },
    {
      name: 'pepper',
      img: 'pepper.png'
    },
    {
      name: 'cabbage',
      img: 'cabbage.png'
    },
    {
      name: 'cabbage',
      img: 'cabbage.png'
    },
    {
      name: 'cake',
      img: 'cake.png'
    },
    {
      name: 'cake',
      img: 'cake.png'
    },
    {
      name: 'popcorn',
      img: 'popcorn.png'
    },
    {
      name: 'popcorn',
      img: 'popcorn.png'
    },
    {
      name: 'banana',
      img: 'banana.png'
    },
    {
      name: 'banana',
      img: 'banana.png'
    }

  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'blank.png')
      cards[optionTwoId].setAttribute('src', 'blank.png')
      //alert('You have clicked the same image!')
      
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match')
      cards[optionOneId].setAttribute('src', 'white.png')
      cards[optionTwoId].setAttribute('src', 'white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'blank.png')
      cards[optionTwoId].setAttribute('src', 'blank.png')
      //alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'You found it all! Reload, Refresh or Press F5 to play again. '
      alert('You found it all! Press F5 to play again')
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 300)
    }
  }

  createBoard()
})