/*
 * DOTS: Level One
 *
 */
let score = 0
const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')



  ball.addEventListener('click', function(){
    console.log('Dot was clicked!')
    score = score += 10
    scoreDisplay.innertext = score
    console.log("Score = ", score)
    console.log("scoreDisplay =", scoreDisplay.innertext)

    if (score >= 100) {
     levelWinner.style.opacity = 1;
     console.log("score 100 or greater and opacity =", levelWinner.style.opacity)
    }
  });