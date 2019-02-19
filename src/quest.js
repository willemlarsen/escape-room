import allThemes from './quests.js';
import insaneOneChoices from '../src/themes/insane/insane-scenario-1/choices.js';
import insaneTwoChoices from '../src/themes/insane/insane-scenario-2/choices.js';
import insaneThreeChoices from '../src/themes/insane/insane-scenario-3/choices.js';

const json = window.localStorage.getItem('user');
// if(!json) {
//     window.location = '/';
// }
const user = JSON.parse(json);

const formNode = document.getElementById('choices');
const titleNode = document.getElementById('title');
const descriptionNode = document.getElementById('quest-description');
const resultNode = document.getElementById('scenario-result');
const resultParagraph = document.getElementById('result');
const continueButton = document.getElementById('continue');

const searchParams = new URLSearchParams(window.location.search);
const questTitle = searchParams.get('name');
let scenarioTitle = parseInt(searchParams.get('scenario'));

let currentTheme = null;
for(let i = 0; i < allThemes.length; i++) {
    if(questTitle === allThemes[i].id) {
        currentTheme = allThemes[i];
        break;
    }
}

titleNode.textContent = currentTheme.title;

descriptionNode.textContent = currentTheme['description' + String(scenarioTitle)];

const insaneAllScenarios = [insaneOneChoices, insaneTwoChoices, insaneThreeChoices];



let chosen = null;
const currentScenario = insaneAllScenarios[scenarioTitle];


for(let i = 0; i < currentScenario.length; i++) {
    chosen = currentScenario[i];
    const label = document.createElement('label');
    label.for = chosen.id;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = chosen.id; 
    radio.name = 'insane-choices';  //[insane-choices, bank-choices, etc.]
    radio.value = chosen.id; 
    radio.required = true;

    label.textContent = chosen.name + ' - ' + chosen.description; 

    formNode.prepend(label);
    formNode.prepend(radio);
    formNode.prepend(document.createElement('br'));
}


formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    formNode.hidden = true;
    resultNode.hidden = false;
    const formData = new FormData(formNode);
    const choice = formData.get('insane-choices');
    

    for(let i = 0; i < currentScenario.length; i++) {
        let chosen = currentScenario[i];
  
        if(choice === chosen.id) {
            resultParagraph.textContent = chosen.result;
        
            user.hp += chosen.hp;
            user.cp += chosen.cp;
            const json = JSON.stringify(user);
            window.localStorage.setItem('user', json);
        }
    }

});
continueButton.addEventListener('click', function() {
    scenarioTitle++;
    searchParams.set('scenario', scenarioTitle);
    window.location.search = searchParams;
});


