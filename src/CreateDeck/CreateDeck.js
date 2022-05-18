import React from "react";
import { CreateDeckNav } from "./CreateDeckNav";
import { EditDeckForm } from "../Decks/EditDeckForm";

const CreateDeck = () => (
  <>
    <CreateDeckNav />
    <h1>Create Deck</h1>
    <EditDeckForm />
  </>
);

export default CreateDeck;