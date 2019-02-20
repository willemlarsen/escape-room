const walk = { 
    name: 'Walk In',
    id: 'walk',
    description: 'Casually walk into the bank and head to the clerk\'s desk with your air soft gun.',
    result: 'You demand to go to the vault and the clerk nervously agrees. Not a very nice thing to do, so no points for you.',
    hp: 0,
    cp: 0
};

const drill = {
    name: 'Drill',
    id: 'drill',
    description: 'Drill a hole big enough for you to fit into.', 
    result: 'Successfully sneak into the vault undetected. 10 points for being clever and 5 points for not hurting yourself in the process.',
    hp: 5,
    cp: 10
};

const sewer = {
    name: 'Sewer',
    id: 'sewer',
    description: 'You discover an underground moat that leads straight into the vault. Lucky you.',
    result: 'You barely make it into the vault because you had to fight off giant rats in the sewer. Clever approach, but you smell disgusting. Lose 10 health points. Gain 5 clever points.',
    hp: -10,
    cp: 5
};

const bankTwoChoices = [walk, drill, sewer];

export default bankTwoChoices;