import React from "react";
import { EditDeckForm } from "./EditDeckForm";
import { EditDeckNav } from "./EditDeckNav";

const EditDeck = ({ deckInfo }) => (
  <>
    <EditDeckNav deckInfo={deckInfo} />
    <h1>Edit Deck</h1>
    <EditDeckForm/>
  </>
);

export default EditDeck;
