import React from "react";
import { Link } from "react-router-dom";

//the navigation bar for the create deck page with a link to go home
export const CreateDeckNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active">Create Deck</li>
    </ol>
  </nav>
);
