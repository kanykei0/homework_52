import Card from './Card';

class CardDeck {
    cards: Card[] = [];

    constructor() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                this.cards.push(new Card(rank, suit));
            });
        });
    }

    getCard(): Card {
        const random: number = Math.floor(Math.random() * this.cards.length);
        const randomCard = this.cards.splice(random, 1)[0];
        return randomCard;
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            }
        }
        return cards;
    }
}
export default CardDeck;