let gameBoard = document.querySelectorAll('.parent .grid-item')
let grid100 = document.querySelectorAll('.parent #grid100')
let grid200 = document.querySelectorAll('.parent #grid200')
let grid300 = document.querySelectorAll('.parent #grid300')
let grid400 = document.querySelectorAll('.parent #grid400')
let grid500 = document.querySelectorAll('.parent #grid500')

let questionBox = document.querySelector('#question-box')
let userInput = document.querySelector('#text-input')
let sub = document.querySelector('#submit-button')
let score = document.querySelector('#score')

let total = []
let numTrack = []
let price = []
let currentQuestion = {}
let globalVar = ''

//ADDING EVENT LISTENER'S TO THE GAME BOARD
gameBoard.forEach((i) => {
  //
  if (i.style.background !== '#fda403') {
    i.addEventListener('mouseenter', () => {
      if (i.style.backgroundColor === '') {
        i.style.backgroundColor = 'lightblue'
      }
    })
    i.addEventListener('mouseout', () => {
      if (i.style.backgroundColor === 'lightblue') {
        i.style.backgroundColor = ''
      }
    })
  }
})

grid100.forEach((i) => {
  i.addEventListener('click', () => {
    globalVar = i
    console.log('clicked')
    readJeopardyData('$100')
    randomNum()
    priceNum(100)
  })
})

grid200.forEach((i) => {
  i.addEventListener('click', () => {
    globalVar = i
    console.log('clicked')
    readJeopardyData('$200')
    randomNum()
    priceNum(200)
  })
})

grid300.forEach((i) => {
  i.addEventListener('click', () => {
    globalVar = i
    console.log('clicked')
    readJeopardyData('$300')
    randomNum()
    priceNum(300)
  })
})

grid400.forEach((i) => {
  i.addEventListener('click', (event) => {
    globalVar = i
    console.log('clicked')
    readJeopardyData('$400')
    randomNum()
    priceNum(400)
  })
})
grid500.forEach((i) => {
  i.addEventListener('click', () => {
    globalVar = i
    console.log('clicked')
    readJeopardyData('$500')
    randomNum()
    priceNum(500)
  })
})

let one = () => {}

// SUBMIT BUTTON
sub.addEventListener('click', (event) => {
  event.preventDefault()

  if (
    userInput.value === currentQuestion.answer &&
    globalVar.style.backgroundColor !== 'fda403'
  ) {
    console.log('right')
    total.push(price[0])
    let sum = total.reduce((total, num) => {
      return total + num
    })
    score.innerText = `YOUR SCORE: $${sum}`
    questionBox.innerText = 'Question'
    userInput.value = ''
    console.log(globalVar)
    globalVar.style.backgroundColor = '#fda403'
  } else {
    console.log(currentQuestion.question)
    questionBox.innerText = 'Wrong Answer, Choose Panel and Try Again!'
    userInput.value = ''
  }
})

// DATA PULL FROM JSON FILE
let readJeopardyData = async (num) => {
  let rawJeopardayData = await fetch('jeopardy.json')
  let data = await rawJeopardayData.json()
  let groupedData = _.groupBy(data, 'value')

  currentQuestion = groupedData[num][numTrack[0]]
  questionBox.innerText = groupedData[num][numTrack[0]].question

  console.log(currentQuestion)
}

// RANDOM NUMBER GENERATOR
let randomNum = () => {
  if (numTrack.length === 0) {
    numTrack.push(Math.floor(Math.random() * 5))
    console.log(numTrack)
  } else if (numTrack.length === 1) {
    numTrack.pop()
    numTrack.push(Math.floor(Math.random() * 5))
    console.log(numTrack)
  }
}

//PRICE GENERATOR
let priceNum = (num) => {
  if (price.length === 0) {
    price.push(num)
    console.log(price)
  } else if (price.length === 1) {
    price.pop()
    price.push(num)
    console.log(price)
  }
}

// let colorback = () => {
//   globalVar.style.backgroundColor = 'blue'
// }
