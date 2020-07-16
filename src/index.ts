import { deck, back, jokers, trumps } from './strings';
import { validateCard, validateJoker, validateTrump } from './validator';
import { getCardID, getJokerID } from './mapper';

export function getCard(cardID: string): string {
    const normalizedID = cardID.toLowerCase();
    const { isValid, isID } = validateCard(normalizedID);
    if (!isValid) {
        throw new Error('Invalid card identifier');
    }
    const id = isID ? normalizedID : getCardID(normalizedID);
    return deck[id];
}

export function getCardBack(): string {
    return back;
}

export function getJoker(cardID: string): string {
    const normalizedID = cardID.toLowerCase();
    const { isValid, isID } = validateJoker(normalizedID);
    if (!isValid) {
        throw new Error('Invalid joker identifier');
    }
    const id = isID ? cardID : getJokerID(normalizedID);
    return jokers[id];
}

export function getTrump(index: number): string {
    const isValid = validateTrump(index);
    if (!isValid) {
        throw new Error('Invalid trump index');
    }
    return trumps[index];
}
