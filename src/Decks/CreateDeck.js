import React from "react";
import { DeckNav } from "./DeckNav";
import { CreateDeckForm } from "./CreateDeckForm";

export default function CreateDeck() {

    return (
    <>
      <DeckNav />
      <h1>Create Deck</h1>
      <CreateDeckForm />
    </>
  );
}
