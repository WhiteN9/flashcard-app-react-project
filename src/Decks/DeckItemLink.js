import { deleteDeck } from "../utils/api";
import { useRouteMatch, Link } from "react-router-dom";

export const DeckItemLink = ({ deck }) => {
  // console.log(id)
  const userouteMatch = useRouteMatch();
  console.log(userouteMatch);

  const handleDelete = async (deck) => {
    console.log(deck);
    const result = window.confirm("Delete this deck?");
    if (result) {
      console.log("deleted post");
      await deleteDeck(deck);
    }
  };
  return (
    <li>

        <p>{deck.name}</p>
        <p>{deck.cards.length} cards</p>
        <p>{deck.description}</p>
        <button>View</button>
        <button>Study</button>
        <button onClick={handleDelete}>Delete</button>

    </li>
  );
};
