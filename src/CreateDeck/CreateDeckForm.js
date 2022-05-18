import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import { DeckForm } from "../Form/DeckForm";

export const CreateDeckForm = () => {
  const history = useHistory();
  const initialDeckInfo = {
    name: "",
    description: "",
  };
  const [deckInfo, setDeckInfo] = useState({ ...initialDeckInfo });

  const controller = new AbortController();

  const handleCreateDeck = async (evt) => {
    evt.preventDefault();
    const data = await createDeck(deckInfo, controller.signal);
    console.log(data);
    setDeckInfo({ ...initialDeckInfo });
    history.push("/decks/");
  };

  const onCancel = () => {
    setDeckInfo({ ...initialDeckInfo });
    history.push("/");
  };

  return (
    <React.Fragment>
      <DeckForm
        onSubmit={handleCreateDeck}
        onCancel={onCancel}
        deckInfo
        setDeckInfo={setDeckInfo}
        submitLabel="Submit"
        cancelLabel="Cancel"
      />
    </React.Fragment>
  );
};
