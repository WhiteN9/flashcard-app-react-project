import React from "react";
import { CreateDeckForm } from "./CreateDeckForm";
import { CreateDeckNav } from "./CreateDeckNav";

const CreateDeck = () => (
  <React.Fragment>
    <CreateDeckNav />
    <h1>Create Deck</h1>
    <CreateDeckForm />
  </React.Fragment>
);

export default CreateDeck;
