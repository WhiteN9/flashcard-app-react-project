import { Link } from "react-router-dom";

export const DeckDisplayNav = ({ deckInfo }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active">{deckInfo.name}</li>
    </ol>
  </nav>
);
