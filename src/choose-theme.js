import allQuests from './quests.js';
import scoreDisplay from './score-display.js';

const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);
scoreDisplay(user);

const themesNode = document.getElementById('themes');

for(let i = 0; i < allQuests.length; i++) {
    
    const currentQuest = allQuests[i];
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    link.href = 'quest.html?name=' + encodeURIComponent(currentQuest.id) + '&scenario=0';
    
    link.textContent = currentQuest.title;
    
    themesNode.appendChild(li);
    li.appendChild(link);

        //link.addEventListener('click', function() {
          //  user.exists = true;
            //const json = JSON.stringify(user);
           // window.localStorage.setItem('user', json);       
}


