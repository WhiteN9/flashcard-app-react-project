import { Link } from "react-router-dom";

export const DeckDisplay = ({ deckInfo, handleDelete, cardList }) => {
  return (
    <>
      <article>
        <div>
          <h5>{deckInfo.name}</h5>
        </div>
        <p>{deckInfo.description}</p>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/edit`}
              className="btn btn-secondary mr-2"
            >
              Edit
            </Link>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/study`}
              className="btn btn-primary mr-2"
            >
              Study
            </Link>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/cards/new`}
              className="btn btn-primary"
            >
              Add Cards
            </Link>
          </div>
          <div
            className="btn-group ml-auto"
            role="group"
            aria-label="First group"
          >
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(deckInfo)}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
      <h2 className="mt-4">Cards</h2>
      <article>{cardList}</article>
    </>
  );
};
