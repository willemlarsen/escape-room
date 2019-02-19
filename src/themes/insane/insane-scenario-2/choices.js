const drawer = { 
    name: 'Drawer',
    id: 'drawer',
    description: 'There is a drawer, search through it.',
    result: 'Find a key and unlock the door with it. You gain nothing.',
    hp: 0,
    cp: 0
};

const scream = {
    name: 'scream',
    id: 'scream',
    description: 'Scream and attract the nurse\'s attention.', 
    result: 'Lock the nurse in the room and steal her coat. Gain 5 clever points and lose 5 health points from exerting energy.',
    hp: -5,
    cp: 5
};

const vents = {
    name: 'vents',
    id: 'vents',
    description: 'You see a vent.',
    result: 'You are able to wiggle through, and you are now outside of the room.  While trying to get out, the vent collapsed, and you fall into the hallway.  The fall causes you to lose 10 health points, but you gain 5 clever points for your escape.',
    hp: -10,
    cp: 5
};

const insaneTwoChoices = [drawer, scream, vents];

export default insaneTwoChoices;