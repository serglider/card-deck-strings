# Playing cards' strings

It's convenient to use Unicode strings while prototyping a card game. This library is a small wrapper for those strings to make it even more convenient.

## Setup
```card-deck-strings``` can be installed with npm or using a content delivery network URL to embed it on your HTML page

```bash
npm i card-deck-strings
```

or

```html
<script src="https://unpkg.com/card-deck-strings"></script>
```

## Usage

Card strings can be obtained by  a name or id. The both are case insensitive. The trump strings are obtained by index. See the full list in  [Wiki](https://github.com/serglider/card-deck-strings/wiki#how-to-get-a-card-string).

```js
import { getCard, getCardBack, getJoker, getTrump } from 'card-deck-strings';
const aceOfSpades = getCard('Ace of Spades');
const as = getCard('as');
const back = getCardBack();
const redJoker = getJoker('Red Joker');
const whiteJoker = getJoker('wj');
const fool = getTrump(0);
```

Given loaded in the global context, the methods above live under ```CardDeck``` namespce.

```js
const queenOfDiamonds = CardDeck.getCard('QD');
```

## License

Copyright © 2019, [Sergey Chernykh](https://github.com/serglider).
Released under the [MIT License](LICENSE).