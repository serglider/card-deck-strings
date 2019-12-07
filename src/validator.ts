import { SUITS, RANKS_MAP, JOKER_IDS, COLORS, OF, JOKER } from './constants';
import { ValidationResult } from './types';

const shortSuits = SUITS.map(suit => suit[0]);
const ranks = Object.keys(RANKS_MAP);
const shortRanks = Object.values(RANKS_MAP);

export function validateCard(str: string): ValidationResult {
    const isID: boolean = str.length <= 3;
    const validatorFunc: (arg: string) => boolean = isID ? isValidID : isValidName;
    return {
        isValid: validatorFunc(str),
        isID,
    };
}

export function validateJoker(str: string): ValidationResult {
    const isID: boolean = str.length === 2;
    const validatorFunc: (arg: string) => boolean = isID ? isValidJokerID : isValidJokerName;
    return {
        isValid: validatorFunc(str),
        isID,
    };
}

export function validateTrump(index: number): boolean {
    return index >= 0 && index <= 21;
}

function isValidJokerID(str: string): boolean {
    return JOKER_IDS.includes(str);
}

function isValidJokerName(str: string): boolean {
    const [color, joker] = str.split(' ');
    return COLORS.includes(color) && joker === JOKER;
}

function isValidName(str: string): boolean {
    const [rank, of, suit] = str.split(' ');
    return ranks.includes(rank) && SUITS.includes(suit) && of === OF;
}

function isValidID(str: string): boolean {
    const [rank, suit] = splitRankAndSuit(str);
    return str.length > 1 && shortSuits.includes(suit) && shortRanks.includes(rank);
}

function splitRankAndSuit(str: string): string[] {
    const suit = str.slice(-1);
    const rank = str.slice(0, -1);
    return [rank, suit];
}
