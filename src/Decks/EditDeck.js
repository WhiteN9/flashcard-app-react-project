import React from "react";
import { EditDeckNav } from "./EditDeckNav";
import { EditDeckForm } from "./EditDeckForm";

const EditDeck = ({ deckInfo }) => (
  <>
    <EditDeckNav deckInfo={deckInfo} />
    <h1>Edit Deck</h1>
    <EditDeckForm deckInfo={deckInfo} />
  </>
);

export default EditDeck;
