import { Link } from "react-router-dom";

export const DeckNav = () => (
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li class="breadcrumb-item active">Create Deck</li>
    </ol>
  </nav>
);
