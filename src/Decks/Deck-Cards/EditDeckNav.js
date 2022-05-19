import React from "react";
import { Link } from "react-router-dom";

//the navigation bar for the edit deck with a link to go home or to the current deck
export const EditDeckNav = ({ deckInfo }) => (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckInfo.id}`}>{deckInfo.name}</Link>
        </li>
        <li className="breadcrumb-item active">Edit</li>
      </ol>
    </nav>
);
