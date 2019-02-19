import allThemes from './quests.js';
import insaneOneChoices from '../src/choices/insane/insane-scenario-1/choices.js';

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

let currentTheme = null;
for(let i = 0; i < allThemes.length; i++) {
    if(questTitle === allThemes[i].id) {
        currentTheme = allThemes[i];
        break;
    }
}

titleNode.textContent = currentTheme.title;
descriptionNode.textContent = currentTheme.description;

const insaneAllScenarios = [insaneOneChoices];
// add other two scenarios
// make new array for all themes choices
let chosen = null;

for(let i = 0; i < insaneAllScenarios.length; i++) {
    const currentScenario = insaneAllScenarios[i];

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
        const choice = formData.get('insane-choices'); // update to []
        for(let i = 0; i < insaneOneChoices.length; i++) {
            const object = insaneOneChoices[i];
            if(choice === object.id) {
                resultParagraph.textContent = object.result;
        
                user.hp += object.hp;
                user.cp += object.cp;
                const json = JSON.stringify(user);
                window.localStorage.setItem('user', json);
            }
        }

    });
    continueButton.addEventListener('click', function() {
        
    });

}

