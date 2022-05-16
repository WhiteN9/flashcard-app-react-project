export const DeckItem = ({ deck }) => {
  return (
    <li>
      <p>{deck.name}</p>
      <p>{deck.cards.length} cards</p>
      <p>{deck.description}</p>
    </li>
  );
};
