const needle = { 
    name: 'Needle',
    id: 'needle',
    description: 'You notice a needle sitting on the nightstand beside your bed.',
    result: 'Use the needle to pick the lock of the handcuffs. Smart thinking, gain 5 clever points',
    hp: 0,
    cp: 5
};

const hammer = {
    name: 'Hammer',
    id: 'hammer',
    description: 'Open the bedside drawer and find a reflex hammer.', 
    result: 'You are able to successfully break the handcuffs off with the hammer.  But in the process, injure yourself and lose 10 health points.',
    hp: -10,
    cp: 0
};

const bruteForce = {
    name: 'Brute Force',
    id: 'brute-force',
    description: 'You start wondering how strong the handcuffs are against your strength',
    result: 'You use all your power to brute force your cuffs free from the bed. Your adrenaline boosts your health by 10 points. ',
    hp: 10,
    cp: 0
};

const insaneOneChoices = [needle, hammer, bruteForce];

export default insaneOneChoices;