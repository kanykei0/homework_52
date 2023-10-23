import { useState } from 'react'
import CardElement from './Card/Card';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';
import './App.css'

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardDeck, setCardDeck] = useState(new CardDeck());
  const hand = new PokerHand(cards);


  const dealCards = () => {
    const cardsArray = cardDeck.getCards(5);
    setCards(cardsArray);
  };

  const renderCardsBlock = () => {
    if(cards.length > 0){
      return(<>
        <div className="playingCards faceImages">
          {cards.map((i, key) => {
          return(<CardElement rank={i.rank} suit={i.suit} key={key}/>)
          })}
        </div>
        <div>{hand.getOutcome()}</div>
      </>);
    }else if(cardDeck.cards.length <= 0){
      setCardDeck(new CardDeck());
    }
  };

  return (
    <>
      <button className='deal-cards' onClick={dealCards}>Deal cards</button>
      {renderCardsBlock()}
    </>
  )
}


export default App
