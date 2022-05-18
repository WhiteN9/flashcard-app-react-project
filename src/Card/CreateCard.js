import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import { CreateCardForm } from "./CreateCardForm.js";
import { CreateCardNav } from "./CreateCardNav.js";

const CreateCard = () => {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });

  const {
    params: { deckId },
    path,
    url,
  } = useRouteMatch();
  // console.log(deckId, path, url);
  // 1
  // /decks/:deckId/cards/new
  // /decks/1/cards/new

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
      console.log("unmounting deck");
      controller.abort();
    };
  }, [deckId]);
  console.log(deckInfo);
  return (
    <>
      <CreateCardNav deckInfo={deckInfo} />
      <h3>{deckInfo.name}: Add Card</h3> 
      <CreateCardForm deckInfo={deckInfo} />
    </>
  );
};
export default CreateCard;
