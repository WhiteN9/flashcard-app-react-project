import React from "react";
import { Link } from "react-router-dom";

export const StudyScreenNav = ({ deckInfo }) => (
  <React.Fragment>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckInfo.id}`}>{deckInfo.name}</Link>
        </li>
        <li className="breadcrumb-item active">Study</li>
      </ol>
    </nav>
  </React.Fragment>
);
