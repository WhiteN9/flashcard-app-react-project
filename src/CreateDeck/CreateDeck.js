import React from "react";
import { CreateDeckForm } from "./CreateDeckForm";
import { CreateDeckNav } from "./CreateDeckNav";

const CreateDeck = () => (
  <>
    <CreateDeckNav />
    <h1>Create Deck</h1>
    <CreateDeckForm />
  </>
);

export default CreateDeck;