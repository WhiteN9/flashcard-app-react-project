import { Link, useParams } from "react-router-dom";

export const CreateCardNav = ({ deckInfo }) => {
  const { deckId } = useParams();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deckInfo.name}</Link>
        </li>
        <li className="breadcrumb-item active">Add Card</li>
      </ol>
    </nav>
  );
};
