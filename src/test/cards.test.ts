import { expect } from 'chai';
import { generateDeck, Card, drawCardFromDeck, getRandomIndex } from '../cards';

describe('Cards', () => {
  let deck: Card[];
  beforeEach(() => {
    deck = generateDeck();
  });
  describe('generateDeck', () => {
    it('should return 52 lenght cards array', () => {
      expect(deck).to.be.an('array').that.length(52);
    });

    it('deck should contain 13 ⚡️ energy cards', () => {
      const energyCards = deck.filter((card) => card.symbol === '⚡️');
      expect(energyCards)
        .to.be.an('array')
        .that.length(13)
        .deep.equal(deck.filter((c) => c.symbol === '⚡️'));
    });

    it('deck should contain 13 🚀 rocket cards', () => {
      const energyCards = deck.filter((card) => card.symbol === '🚀');
      expect(energyCards)
        .to.be.an('array')
        .that.length(13)
        .deep.equal(deck.filter((c) => c.symbol === '🚀'));
    });

    it('deck should contain 13 ✨ stars cards', () => {
      const energyCards = deck.filter((card) => card.symbol === '✨');
      expect(energyCards)
        .to.be.an('array')
        .that.length(13)
        .deep.equal(deck.filter((c) => c.symbol === '✨'));
    });

    it('deck should contain 13 🌈 rainbow cards', () => {
      const energyCards = deck.filter((card) => card.symbol === '🌈');
      expect(energyCards)
        .to.be.an('array')
        .that.has.length(13)
        .that.is.deep.equal(deck.filter((c) => c.symbol === '🌈'));
    });

    it('deck should contains 4 Aces cards', () => {
      const aces = deck.filter((card) => card.value === 'A');
      expect(aces).to.be.an('array').length(4);
    });
  });

  describe('drawCardFromDeck', () => {
    it('should return undefined if card index does not exist', () => {
      const generatedDeck = generateDeck();
      const index = 123;
      const { card, deck } = drawCardFromDeck(generatedDeck, index);
      expect(card).to.equal(undefined);
    });

    it('should return a card if index does exist', () => {
      const deck = generateDeck();
      const index = 32;
      expect(drawCardFromDeck(deck, index))
        .to.be.an('object')
        .with.property('card')
        .to.be.equal(deck[index])
        .to.equal(deck[index]);
    });

    it('should return the deck minus the card that was returned', () => {
      const generatedDeck = generateDeck();
      const index = 23;
      const { card, deck } = drawCardFromDeck(generatedDeck, index);

      expect(deck)
        .to.be.an('array')
        .that.is.deep.equal(generatedDeck.filter((e) => e !== card));
    });
  });

  describe('getRandomIndex', () => {
    it('should return a random number that is not greater than deck lenght', () => {
      const randomIndex = getRandomIndex(deck);
      console.log(randomIndex);

      expect(randomIndex).to.be.a('number');
    });

    it('should return a random number that is not greater than deck lenght', () => {
      const randomIndex = getRandomIndex(deck);

      expect(randomIndex).to.be.a('number').below(deck.length);
    });

    it('should return a random number that is not negative', () => {
      const randomIndex = getRandomIndex(deck);

      expect(randomIndex).to.be.a('number').above(-1);
    });
  });
});
