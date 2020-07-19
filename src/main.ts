import { generateDeck, drawCardFromDeck, getRandomIndex } from './cards';

let deckOne = generateDeck();

const button = document.getElementById('play');
button?.addEventListener('click', () => {
  let { card, deck } = drawCardFromDeck(deckOne, getRandomIndex(deckOne));
  deckOne = deck;
  console.log(card);
  console.log(deckOne);
});
