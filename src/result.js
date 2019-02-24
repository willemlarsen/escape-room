import scoreDisplay from './score-display.js';

const outcomeMessage = document.getElementById('outcome');
const buttonNode = document.getElementById('play-again');

const json = window.localStorage.getItem('user');
const user = JSON.parse(json);

scoreDisplay(user);

// Though it may sometimes feel like empty ritual, the more places you
// look for TDD opportunities the more you'll find them. (We've already
// discussed the benefits of TDD so I won't readdress them here).
// For example this conditional block below with the <= operator is a
// great opportunity for TDD. The resultant simple function and assignment could be:
// outcomeMessage.textContent = freedomCheck(user.hp);

if(user.hp <= 0) {
    outcomeMessage.textContent = 'Sorry, ' + user.name + ', you were caught! Whomp whomp!';
}
else {
    outcomeMessage.textContent = 'Congratulations, ' + user.name + ', you escaped!';
}

buttonNode.addEventListener('click', function() {
    user.hp = 50;
    user.cp = 0;

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
    //Anytime your logic branches it's a good time to TDD
    if(user.completedThemes.length > 3) {
        window.location = '../index.html';
    } 
    else {        
        window.location = '../pages/choose-theme.html';
    }
});