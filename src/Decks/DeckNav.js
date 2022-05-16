import { Link } from "react-router-dom";

export const DeckNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active">Create Deck</li>
    </ol>
  </nav>
);
