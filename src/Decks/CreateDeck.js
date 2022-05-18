import React from "react";
import { CreateDeckNav } from "./CreateDeckNav";
import { CreateDeckForm } from "./CreateDeckForm";

const CreateDeck = () => (
  <>
    <CreateDeckNav />
    <h1>Create Deck</h1>
    <CreateDeckForm />
  </>
);

export default CreateDeck;