import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import { DeckForm } from "../Form/DeckForm";

export const EditDeckForm = () => {
  const history = useHistory();
  const initialDeckInfo = {
    name: "",
    description: "",
  };
  const [deckInfo, setDeckInfo] = useState({ ...initialDeckInfo });

  const { params, url, path } = useRouteMatch();
  // params: {deckId: '1'}
  // path: "/decks/:deckId/edit"
  // url: "/decks/1/edit"
  const controller = new AbortController();

  useEffect(() => {
    const controller = new AbortController();
    async function readDeckInfo() {
      try {
        const data = await readDeck(params.deckId, controller.sginal);
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
  }, [params.deckId]);

  const handleEditDeck = async (evt) => {
    evt.preventDefault();
    const data = await updateDeck(deckInfo, controller.signal);
    console.log(data);
    setDeckInfo({ ...initialDeckInfo });
    history.push(`/decks/${params.deckId}`);
  };

  const onCancel = () => {
    setDeckInfo({ ...initialDeckInfo });
    history.push(`/decks/${params.deckId}`);
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
