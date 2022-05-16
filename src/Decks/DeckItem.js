export const DeckItem = ({ deck }) => {
  // console.log(deck.id)
  // console.log(id)
  const handleDelete = async (id) => {
    console.log(id)
    const result = window.confirm("Delete this deck?")
    if (result) {
      console.log("deleted post");
    }
  };
  return (
    <li>
      <p>{deck.name}</p>
      <p>{deck.cards.length} cards</p>
      <p>{deck.description}</p>
      <p>View</p>
      <p>Study</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
