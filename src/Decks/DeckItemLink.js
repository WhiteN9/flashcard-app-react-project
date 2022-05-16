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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{deck.name}</h5>
        <p>{deck.cards.length} cards</p>
        <p>{deck.description}</p>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group" role="group" aria-label="First group">
            <button className="btn btn-secondary mr-2">View</button>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <button className="btn btn-primary">Study</button>
          </div>
          <div className="btn-group ml-auto" role="group" aria-label="First group">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
