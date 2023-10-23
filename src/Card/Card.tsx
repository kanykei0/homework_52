interface Props {
    rank: string;
    suit: string;
}

const CardElement = ({rank, suit}: Props) => {
    let suitSymbol: string;

    switch (suit){
        case 'diams':
            suitSymbol = '♦';
            break;
        case 'hearts':
            suitSymbol = '♥';
            break;
        case 'clubs':
            suitSymbol = '♣';
            break;
        case 'spades':
            suitSymbol = '♠';
            break;
        default:
            suitSymbol = '';
    }
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbol}</span>
        </span>
    );
};

export default CardElement;