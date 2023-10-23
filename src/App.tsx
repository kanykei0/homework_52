import { useState } from 'react';
import CardElement from "./Card/Card";
import CardDeck from "./lib/CardDeck";
import Card from './lib/Card';

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardDeck, setCardDeck] = useState(new CardDeck());

  const dealCards = () => {
    const cardsArray = cardDeck.getCards(5);
    setCards(cardsArray);
  };
  return(
    <>
      <button className='deal-cards' onClick={dealCards}>Deal cards</button>
      <div className="playingCards faceImages">
        {cards.map((i, key) => {
          return(<CardElement rank={i.rank} suit={i.suit} key={key}/>)
          })}
      </div>
    </>
  );
};

export default App;