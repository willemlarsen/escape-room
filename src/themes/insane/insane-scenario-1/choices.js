const needle = { 
    name: 'Needle',
    id: 'needle',
    description: 'You glance over at the bedside table and see that a needle has been left there. Odd, but could come in handy.',
    result: 'Stretch your body as close to the edge of the bed as possible and barely grab the needle with your teeth. You lower it down to your hands and begin picking the keyhole with the needle tip. Smart thinking earns you 5 clever points.',
    hp: 0,
    cp: 5
};

const hammer = {
    name: 'Hammer',
    id: 'hammer',
    description: 'Use your feet to quietly open the top drawer in the bedside table to find a reflex hammer inside.', 
    result: 'You are able to successfully break the handcuffs off with the hammer, but you injure yourself in the process and lose 10 health points.',
    hp: -10,
    cp: 0
};

const bruteForce = {
    name: 'Brute Force',
    id: 'brute-force',
    description: 'You think you can break free from the handcuffs by pulling on them as hard as you can.',
    result: 'You are mighty strong! You\'re free from your handcuffs and this adrenaline rush boosts your health by 10 points.',
    hp: 10,
    cp: 0
};

const insaneOneChoices = [needle, hammer, bruteForce];

export default insaneOneChoices;