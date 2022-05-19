import React from "react";
import { Link, useParams } from "react-router-dom";

//the navigation bar for the create card page
//with a link to go home or to the current deck of the cards
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
