import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { CreateCardForm } from "./CreateCardForm.js";
import { CreateCardNav } from "./CreateCardNav.js";

const CreateCard = () => {
  const { deckId } = useParams();

  const [deckInfo, setDeckInfo] = useState({ cards: [] });

  //declare the deckInfo state and make an API request to update to the current deck by the url ID
  useEffect(() => {
    const controller = new AbortController();
    async function readDeckInfo() {
      try {
        const data = await readDeck(deckId, controller.sginal);
        setDeckInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    readDeckInfo();
    return () => {
      controller.abort();
    };
  }, [deckId]);

  return (
    <React.Fragment>
      <CreateCardNav deckInfo={deckInfo} />
      <h3>{deckInfo.name}: Add Card</h3>
      <CreateCardForm deckInfo={deckInfo} />
    </React.Fragment>
  );
};
export default CreateCard;
