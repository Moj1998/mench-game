'use strict';

var score, roundScore, activePlayer, gameplaying, userNumber, dice, dice2;
function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    dice = []
    dice2 = []
    gameplaying = true;
    alert('این بازی تنها با جاوا اسکریبت نوشته شده')
    userNumber = prompt (' امتیاز مورد نظر وارد شود  (لطفا عددی بزرگ تر از ۱۰ وارد کنید) ')
    userNumber = Math.trunc(userNumber)
    if ( userNumber <= 10||userNumber === NaN) {
        alert(' لطفا با زدن دکمه (new game) دوباره تلاش بفرمایید')
        gameplaying = false
    }



    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice-extra').style.display = 'none'

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('#name--0').textContent = 'player 1'
    document.querySelector('#name--1').textContent = 'player 2'
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.remove('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active')

}

function nextplayer() {
    roundScore = 0
    document.querySelector("#current--" + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice-extra').style.display = 'none'

}

init();


// roll button
document.querySelector('.btn--roll').addEventListener("click", e => {
    if (gameplaying) {
        //1. random number
        dice = Math.floor(Math.random() * 6) + 1


        // 2.display the rsolets
        var diceDOm = document.querySelector('.dice');
        diceDOm.style.display = 'block';
        diceDOm.src = './png/dice-' + dice + ".png"


        // 3.update the round score 

        if (dice !== 1 ) {
            // add score 
            roundScore += dice;
            document.querySelector("#current--" + activePlayer).textContent = roundScore

        } else {
            // next player turn
            nextplayer();
        }
    }
})


// roll button-extra
document.querySelector('.btn--roll-extra').addEventListener("click", e => {
    if (gameplaying) {
        //1. random number
        dice2 = Math.floor(Math.random() * 6) + 1


        // 2.display the rsolets
        var dice2DOm = document.querySelector('.dice-extra');
        dice2DOm.style.display = 'block';
        dice2DOm.src = './png/dice-' + dice2 + ".png"


        // 3.update the round score 

        if (dice2 !== 1) {
            // add score 
            roundScore += dice2;
            document.querySelector("#current--" + activePlayer).textContent = roundScore

        } else {
            // next player turn
            nextplayer();
        }
    }
})

// hold button
document.querySelector('.btn--hold').addEventListener('click', e => {
    if (gameplaying) {
        // add current score to global score 
        score[activePlayer] += roundScore
        // update user interface (UI)   
        document.querySelector('#score--' + activePlayer).textContent = score[activePlayer]
        // check if player is winner or not
        if (score[activePlayer] >= userNumber) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner'
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner')
            document.querySelector('.player--' + activePlayer).classList.remove('player--active')
            gameplaying = false
        } else {
            // next player
            nextplayer();
        }
    }
})

// new game button
document.querySelector('.btn--new').addEventListener('click', init)



