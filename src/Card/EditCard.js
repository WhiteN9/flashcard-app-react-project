import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck, readCard } from "../utils/api";
import { EditCardForm } from "./EditCardForm.js";
import { EditCardNav } from "./EditCardNav.js";

const EditCard = () => {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });

  const initialCardInfo = {
    front: "",
    back: "",
    deckId: 0,
  };
  const [cardInfo, setCardInfo] = useState({ ...initialCardInfo });

  const { deckId, cardId } = useParams();

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
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function readCardInfo() {
      try {
        const data = await readCard(cardId, controller.sginal);
        setCardInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    readCardInfo();
  }, [deckInfo]);

  return (
    <React.Fragment>
      <EditCardNav deckInfo={deckInfo} cardInfo={cardInfo} />
      <h3>Edit Card</h3>
      <EditCardForm
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        initialCardInfo={initialCardInfo}
      />
    </React.Fragment>
  );
};
export default EditCard;
