const fight = { 
    name: 'Fight',
    id: 'fight',
    description: 'The nurses notice your strange behavior and start walking towards you. Your adrenaline is pumping and you decide you\'ll stand your ground.',
    result: 'Adrenaline is no match for 6 burly nurses, you\'re taken down and captured.',
    hp: -60,
    cp: -10
};

const run = {
    name: 'Run',
    id: 'run',
    description: 'You notice an open window at the end of the hall. 6 burly nurses stand between you and it. Make a run for it?',
    result: 'You zig while they zag. You barely make it through the window. Lucky for you, you were on the second floor. Lose 5 health points from the fall.',
    hp: -5,
    cp: 0
};

const distract = {
    name: 'Distract',
    id: 'distract',
    description: 'You need a distraction to get past all the nurses. RELEASE THE CRAZIES!!',
    result: 'Plan works perfectly. You manage to escape',
    hp: 0,
    cp: 10
};

const insaneThreeChoices = [fight, run, distract];

export default insaneThreeChoices;