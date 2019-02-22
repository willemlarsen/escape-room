const dynamite = { 
    name: 'Dynamite',
    id: 'dynamite',
    description: 'You grab the dynamite from your duffle bag.',
    result: 'You are able to blow the vault door off, but you also blow off your big toe.  Lose 10 health points. Sad face.',
    hp: -10,
    cp: 5
};

const bumpKey = {
    name: 'Bumpkey',
    id: 'bumpkey',
    description: 'You try your set of bumpkeys that you got from a friend.', 
    result: 'You should have known that your friend is a terrble criminal and gave you a set of defective keys. You reach for bobbypins instead. It takes more time than you have, but you are able to open the vault door. Lose 10 clever points for trusting your friend. Trust no one.',
    hp: 0,
    cp: -10
};

const fingerprint = {
    name: 'Fingerprint',
    id: 'fingerprint',
    description: 'You just so happen to have a fingerprint kit in your duffle bag.',
    result: 'You use the kit to lift a fingerprint off of a gold bar and scan your way out of the vault.  Gain 10 points for being clever and exerting no energy.',
    hp: 10,
    cp: 10
};

const bankTwoChoices = [dynamite, bumpKey, fingerprint];

export default bankTwoChoices;