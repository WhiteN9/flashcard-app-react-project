import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { CreateCardForm } from "./CreateCardForm.js";
import { CreateCardNav } from "./CreateCardNav.js";

const CreateCard = () => {
  const controller = new AbortController();
  const { deckId } = useParams();

  const [deckInfo, setDeckInfo] = useState({ cards: [] });

  useEffect(() => {
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
      console.log("unmounting deck");
      controller.abort();
    };
  }, [deckId]);
  console.log("create card render");

  return (
    <React.Fragment>
      <CreateCardNav deckInfo={deckInfo} />
      <h3>{deckInfo.name}: Add Card</h3>
      <CreateCardForm deckInfo={deckInfo} />
    </React.Fragment>
  );
};
export default CreateCard;
