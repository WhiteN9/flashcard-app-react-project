import React from "react";
import { DeckNav } from "./DeckNav";
import { CreateDeckForm } from "./CreateDeckForm";

export const CreateDeck = () => (
  <>
    <DeckNav />
    <h1>Create Deck</h1>
    <CreateDeckForm />
  </>
);
