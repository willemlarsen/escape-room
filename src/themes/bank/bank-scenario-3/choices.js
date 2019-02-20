const moat = { 
    name: 'Moat',
    id: 'moat',
    description: 'Risk fighting giant rats in the sewer and crawl your way to freedom.',
    result: 'Now that you are rich, the rats seem to love you... or your money. You befriend them and they help you escape to freedom. You drenched yourself in filth yet again. Lose 10 health points.',
    hp: -10,
    cp: 5
};

const fightPolice = {
    name: 'Fight the Police',
    id: 'fight-police',
    description: 'You brave soul. Good luck.', 
    result: '10 health points for trying... and succeeding. Your efforts were worthwhile.',
    hp: 10,
    cp: 0
};

const helicopter = {
    name: 'Helicopter',
    id: 'helicopter',
    description: 'Fly away to freedom.',
    result: 'Your apprentice arrives on scene to save you with a helicopter. You climb on board and laugh at the police below trying to catch you. Little do you know, your apprentice had a little too much to drink while waiting for you to steal the money from the bank. Your apprentice falls asleep and the helicopter spins out of control and you crash into the ocean.',
    hp: -60,
    cp: 10
};

const bankThreeChoices = [moat, fightPolice, helicopter];

export default bankThreeChoices;