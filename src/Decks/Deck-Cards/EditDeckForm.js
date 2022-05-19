import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import { DeckForm } from "../../Form/DeckForm";

export const EditDeckForm = () => {
  const history = useHistory();
  const { deckId } = useParams();
  const controller = new AbortController();

  const initialDeckInfo = {
    name: "",
    description: "",
  };
  const [deckInfo, setDeckInfo] = useState({ ...initialDeckInfo });

  //get the deck
  useEffect(() => {
    async function readDeckInfo() {
      try {
        const data = await readDeck(deckId, controller.signal);
        setDeckInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    readDeckInfo();
    return () => {
      console.log("unmounting edit deck form");
      controller.abort();
    };
  }, [deckId]);

  //upon submitting, make an api request to update the deck
  const handleEditDeck = async (evt) => {
    evt.preventDefault();
    const data = await updateDeck(deckInfo, controller.signal);
    setDeckInfo({ ...initialDeckInfo });
    history.push(`/decks/${deckId}`);
  };
  //or cancel and go back to the deck page with no changes
  const onCancel = () => {
    setDeckInfo({ ...initialDeckInfo });
    history.push(`/decks/${deckId}`);
  };

  return (
    <React.Fragment>
      <DeckForm
        onSubmit={handleEditDeck}
        onCancel={onCancel}
        deckInfo={deckInfo}
        setDeckInfo={setDeckInfo}
        submitLabel="Submit"
        cancelLabel="Cancel"
      />
    </React.Fragment>
  );
};
