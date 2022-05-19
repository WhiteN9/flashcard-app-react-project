import React from "react";
import { Link } from "react-router-dom";

//the navigation bar with a link to go home and name of the deck
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
