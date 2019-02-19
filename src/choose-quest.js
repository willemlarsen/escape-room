import allQuests from './quests.js';

// const json = window.localStorage.getItem('user');
// if(!json) {
//     window.location = '/';
// }
// const user = JSON.parse(json);

const themesNode = document.getElementById('themes');

for(let i = 0; i < allQuests.length; i++) {
    const currentQuest = allQuests[i];
    const li = document.createElement('li');
    const link = document.createElement('a');

    link.href = 'quest.html?name=' + encodeURIComponent(currentQuest.id);
    link.textContent = currentQuest.title;

    themesNode.appendChild(li);
    li.appendChild(link);
}