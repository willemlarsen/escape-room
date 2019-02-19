const drawer = { 
    name: 'Drawer',
    id: 'drawer',
    description: 'There\,
    result: 'Use the needle to pick the lock of the handcuffs. Smart thinking, gain 5 clever points',
    hp: 0,
    cp: 5
};

const scream = {
    name: 'Hammer',
    id: 'hammer',
    description: 'Open the bedside drawer and find a reflex hammer.', 
    result: 'You are able to successfully break the handcuffs off with the hammer.  But in the process, injure yourself and lose 5 health points.',
    hp: -5,
    cp: 0
};

const  = {
    name: 'Brute Force',
    id: 'brute-force',
    description: 'You start wondering how strong the handcuffs are against your strength',
    result: 'You use all your power to brute force your cuffs free from the bed. Your adrenaline boosts your health by 5 points. ',
    hp: 5,
    cp: 0
};

const insaneOneChoices = [needle, hammer, bruteForce];

export default insaneOneChoices;