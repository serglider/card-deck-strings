const main = document.querySelector('main');
const deckBlock = main.querySelector('#deck');
const backBlock = main.querySelector('#back');
const jokersBlock = main.querySelector('#jokers');
const trumpsBlock = main.querySelector('#trumps');

const ranks = 'a k q j kn 10 9 8 7 6 5 4 3 2'.split(' ');
const suits = 's h c d'.split(' ');
const jokers = 'rj wj bj'.split(' ');
const trumpIndices = Array.from(Array(21), (_, i) => i);
const cards = ranks.reduce((acc, r) => {
    const allOfSuit = suits.map(s => r + s);
    return [...acc, ...allOfSuit];
}, []);


cards.forEach(id => {
    const str = CardDeck.getCard(id);
    const last = id.slice(-1);
    const className = (last === 's' || last === 'c') ? 'card-black' : 'card-red';
    insertSpan(deckBlock, str, className);
});

const back = CardDeck.getCardBack();
insertSpan(backBlock, back, 'card-back');

jokers.forEach(id => {
    const str = CardDeck.getJoker(id);
    insertSpan(jokersBlock, str, 'card-joker');
});

trumpIndices.forEach(index => {
    const str = CardDeck.getTrump(index);
    insertSpan(trumpsBlock, str, 'card-trump');
});

function insertSpan(parent, str, className) {
    const panel = document.createElement('span');
    panel.className = 'card ' + className;
    panel.textContent = str;
    parent.appendChild(panel);
}