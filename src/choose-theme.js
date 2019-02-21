import allThemes from './quests.js';
import scoreDisplay from './score-display.js';

const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);

scoreDisplay(user);

const themesNode = document.getElementById('themes');
const textInsaneNode = document.getElementById('insane-text');
const textBankNode = document.getElementById('bank-text');


for(let i = 0; i < allThemes.length; i++) {
    if(user.completedThemes.includes(allThemes[i].id)){
        continue; 
    }
  
    const currentTheme = allThemes[i];
    const li = document.createElement('li');
    const link = document.createElement('a');
    const linkImage = document.createElement('img');
    
    link.href = 'quest.html?name=' + encodeURIComponent(currentTheme.id) + '&scenario=0';
    if(currentTheme.id === 'insane-quest') {
        linkImage.src = '../assets/img/green-arrow-left.png';
        link.appendChild(linkImage);  
        textInsaneNode.textContent = 'Insane Asylum';
        linkImage.classList.add('resize');
    }
    else {
        linkImage.src = '../assets/img/green-arrow.png';
        link.appendChild(linkImage);
        textBankNode.textContent = 'The Bank Heist';      
        linkImage.classList.add('resize');      
    }
    themesNode.appendChild(li);
    li.appendChild(link);

}


