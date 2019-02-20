const dynamite = { 
    name: 'Dynamite',
    id: 'dynamite',
    description: 'You grab the dynamite from your duffle bag.',
    result: 'You are able to blow vault\'s door off, but you also blow your big toe off.  Lose 10 health points',
    hp: -10,
    cp: 5
};

const bumpKey = {
    name: 'Bumpkey',
    id: 'bumpkey',
    description: 'You try your set of bumpkeys, but they aren\'t cut right.  You reach for bobbypins instead.', 
    result: 'It takes more time than you have, but you are able to open the vault door.',
    hp: 0,
    cp: 5
};

const fingerprint = {
    name: 'fingerprint',
    id: 'fingerprint',
    description: 'you have a fingerprint kit in your duffle bag.',
    result: 'You use the kit to lift a fingerprint and scan your way out of the vault',
    hp: 10,
    cp: 10
};

const bankTwoChoices = [dynamite, bumpKey, fingerprint];

export default bankTwoChoices;