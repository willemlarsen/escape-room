import insaneOneChoices from './themes/insane/insane-scenario-1/choices.js';
import insaneTwoChoices from './themes/insane/insane-scenario-2/choices.js';
import insaneThreeChoices from './themes/insane/insane-scenario-3/choices.js';
import bankOneChoices from './themes/bank/bank-scenario-1/choices.js';
import bankTwoChoices from './themes/bank/bank-scenario-2/choices.js';
import bankThreeChoices from './themes/bank/bank-scenario-3/choices.js';

const insaneTheme = {
    id: 'insane-quest',
    title: 'Fly Out of the Cuckoo\'s Nest',
    description0: 'You wake up to the pungent smell of rusted metal. You open your eyes, squinting in an attempt to sharpen the blurred environment around you. You glance around the room and try to lift your arm up. To your surprise and confusion, both of your arms are chained tighly to the bed with metal handcuffs. Your heart starts to beat quickly, and you feel yourself panicking. You\'re looking for any way to break yourself free. What is your tool of your choice?',
    description1: 'After breaking free from your handcuffs, you dart around the room and frantically begin searching for a way to unlock the door. What do you do next?',
    description2: 'You\'ve successfully broken out of the room and are standing in the hallway. Now you must overcome the challenge of escaping this very creepy insane asylum. Can you make it out?',
    scenarios: [insaneOneChoices, insaneTwoChoices, insaneThreeChoices],
    images: ['url(../../assets/img/bed.jpg)', 'url(../../assets/img/asylum.jpg)', 'url(../../assets/img/hallway.jpg']
};

const bankTheme = {
    id: 'bank-quest',
    title: 'Break the Bank',
    description0: 'You\'re feeling adventurous and decide you want to experience the thrill of robbing a bank. You brainstorm some methods to do so. Which option do you go with?',
    description1: 'You successfully sneak into a bank and proceed to the vault. While in the vault, you trip an alarm for the gold safe. The vault slams shut, locking you inside, what do you do?',
    description2: 'You\'ve made your way out of the vault relatively unscathed. Adrenaline is rushing now as you should try to figure a way out of the bank before you are caught by the police.',
    scenarios: [bankOneChoices, bankTwoChoices, bankThreeChoices],
    images: ['url(../../assets/img/thief.jpg', 'url(../../assets/img/vault.jpg', 'url(../../assets/img/bank-hallway.jpeg']
};

const allThemes = [insaneTheme, bankTheme];

export default allThemes;