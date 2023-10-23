import Card from './Card';

const onePair = (cards: Card[]) => {
    const ranks = cards.map(card => card.rank);

    for (let i = 0; i < ranks.length; i++) {
        for (let j = i + 1; j < ranks.length; j++) {
            if (ranks[i] === ranks[j]) {
                return true;
            }
        }
    }

    return false; 
};

const twoPairs = (cards: Card[]) => {
    const ranks = cards.map(card => card.rank);
    const pairs: string[] = [];

    for (let i = 0; i < ranks.length; i++) {
        for (let j = i + 1; j < ranks.length; j++) {
            if (ranks[i] === ranks[j] && !pairs.includes(ranks[i])) {
                pairs.push(ranks[i]); 
            }
        }
    }
    return pairs.length === 2;
};

const threeCards = (cards: Card[]) => {
    const ranks = cards.map(card => card.rank); 

    for (let i = 0; i < ranks.length; i++) {
        let count = 0; 
        for (let j = 0; j < ranks.length; j++) {
            if (ranks[i] === ranks[j]) {
                count++;
            }
        }
        if (count === 3) {
            return true;
        }
    }

  return false;
};

const flush = (cards: Card[]) => {
    if(cards.length > 0){
        const firstSuit = cards[0].suit; 

        for (let i = 1; i < cards.length; i++) {
            if (cards[i].suit !== firstSuit) {
                return false; 
            }
        }
        return true;
    }
};

class PokerHand {
    cards: Card[];

    constructor(cardArray: Card[]) {
        this.cards = cardArray;
    }

    getOutcome(){
        if(flush(this.cards)){
            return 'Flush';
        }else if(threeCards(this.cards)){
            return 'Three of a kind';
        }else if(twoPairs(this.cards)){
            return 'Two pairs'; 
        }else if (onePair(this.cards)){
            return 'One pair';
        }else{
            return 'High card';
        }
    }
}

export default PokerHand;