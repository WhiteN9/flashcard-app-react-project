import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import { DeckForm } from "../Form/DeckForm";

export const CreateDeckForm = () => {
  const history = useHistory();
  const controller = new AbortController();

  //declare deckInfo state and its initial state
  const initialDeckInfo = {
    name: "",
    description: "",
  };
  const [deckInfo, setDeckInfo] = useState({ ...initialDeckInfo });

  //the deck form is capable of submitting a new deck and go to the new deck's page
  // or cancelling and go back to the home page
  const handleCreateDeck = async (evt) => {
    evt.preventDefault();
    const data = await createDeck(deckInfo, controller.signal);
    console.log(data);
    setDeckInfo({ ...initialDeckInfo });
    history.push(`/decks/${data.id}`);
  };
  const onCancel = () => {
    setDeckInfo({ ...initialDeckInfo });
    history.push("/");
  };
  return (
    <DeckForm
      onSubmit={handleCreateDeck}
      onCancel={onCancel}
      deckInfo={deckInfo}
      setDeckInfo={setDeckInfo}
      submitLabel="Submit"
      cancelLabel="Cancel"
    />
  );
};
