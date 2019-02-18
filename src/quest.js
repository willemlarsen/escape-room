import allQuests from './quests.js';
import insaneOneChoices from '../src/choices/insane/insane-scenario-1/choices.js';

const titleNode = document.getElementById('title');

const searchParams = new URLSearchParams(window.location.search);
const questTitle = searchParams.get('name');

let currentQuest = null;
for(let i = 0; i < allQuests.length; i++) {
    if(questTitle === allQuests[i].id) {
        currentQuest = allQuests[i];
        break;
    }

}

titleNode.textContent = currentQuest.title;
