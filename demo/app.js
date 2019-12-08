const ranksMap = {
    ace: 'a',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    ten: '10',
    knight: 'kn',
    jack: 'j',
    queen: 'q',
    king: 'k',
};
const shortRanks = Object.values(ranksMap);
const suits = ['s', 'h', 'c', 'd'];
const cardIds = shortRanks.reduce((acc, r) => {
    const allOfSuit = suits.map(s => r + s);
    return [...acc, ...allOfSuit];
}, []);

cardIds.forEach(id => {
    const str = CardDeck.getCard(id);
    const last = id.slice(-1);
    const className = (last === 's' || last === 'c') ? 'color-black' : 'color-red';
    insertSpan(str, className);
});

const back = CardDeck.getCardBack();
insertSpan(back, 'color-blue');

['rj', 'wj', 'bj'].forEach(id => {
    const str = CardDeck.getJoker(id);
    console.log(str);
    insertSpan(str, 'color-yellow');
});

Array.from(Array(21), (_, i)=> CardDeck.getTrump(i)).forEach(str=>{
    insertSpan(str, 'color-black');
});



function insertSpan(str, className) {
    const panel = document.createElement('span');
    panel.className = 'card ' + className;
    panel.textContent = str;
    document.body.appendChild(panel);
}