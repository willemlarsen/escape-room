const outcomeMessage = document.getElementById('outcome');
const cpMessage = document.getElementById('cp');
const buttonNode = document.getElementById('play-again');
const json = window.localStorage.getItem('user');

const user = JSON.parse(json);


if(user.hp <= 0) {
    outcomeMessage.textContent = 'You were caught!!';
}
else {
    outcomeMessage.textContent = 'You escaped!!';

}

if(user.cp >= 10) {
    cpMessage.textContent = 'So clever!';
}

buttonNode.addEventListener('click', function() {
    window.location = '../pages/choose-theme.html';
});