export interface Card {
  symbol: string;
  value: number | string;
}

export const getRandomIndex = (deck: Card[]) => {
  const random: number = Math.floor(Math.random() * (deck.length - 1)) + 1;
  return random;
};

export const drawCardFromDeck = (
  deck: Card[],
  index: number
): { card: Card; deck: Card[] } => {
  const cardToReturn = deck[index];
  const newDeck = deck.filter((card) => cardToReturn !== card);
  return { card: cardToReturn, deck: newDeck };
};

export const generateDeck = (): Card[] => {
  const symbols = ['⚡️', '🚀', '✨', '🌈'];

  const deck: Card[] = [];

  symbols.forEach((symbol: string) => {
    for (let i = 2; i < 15; i++) {
      switch (i) {
        case 11:
          deck.push({ symbol: symbol, value: 'J' });
          break;

        case 12:
          deck.push({ symbol: symbol, value: 'Q' });
          break;

        case 13:
          deck.push({ symbol: symbol, value: 'K' });
          break;

        case 14:
          deck.push({ symbol: symbol, value: 'A' });
          break;

        default:
          deck.push({ symbol: symbol, value: i });
          break;
      }
    }
  });

  return deck;
};
