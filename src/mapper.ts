import { RANKS_MAP } from './constants';

export function getCardID(name: string): string {
    const splitted = name.split(' ');
    const rank = splitted[0];
    const suit = splitted[2];
    const shortRank = RANKS_MAP[rank];
    const shortSuit = suit[0];
    return shortRank + shortSuit;
}

export function getJokerID(name: string): string {
    const [color] = name.split(' ');
    return `${color[0]}j`;
}

export function getTrumpID(name: string): string {
    const [color] = name.split(' ');
    return `${color[0]}j`;
}
