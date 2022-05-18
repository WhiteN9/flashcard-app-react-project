import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api";
import { DeckNav } from "./DeckNav";
import { CardItemLink } from "./CardItemLink";

export default function Deck() {
  const [deckInfo, setDeckInfo] = useState({cards:[]});
  // still need cards:[] because on initial load,
  // it will try to access cards to map

  const routeMatch = useRouteMatch();
  //   console.log(routeMatch);
  //   params: {
  //     deckId: "1";
  //   }
  //   path: "/decks/:deckId";
  //   url: "/decks/1";

  //   console.log(routeMatch.params.deckId); // 1
  //   console.log(deckInfo);
  useEffect(() => {
    const controller = new AbortController();
    async function readDeckInfo() {
      try {
        const data = await readDeck(
          routeMatch.params.deckId,
          controller.sginal
        );
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
  }, [routeMatch.params.deckId]);

  const handleDelete = async (cardInfo) => {
    console.log(cardInfo);
    const result = window.confirm("Delete this card?");
    if (result) {
      console.log("deleted card");
      await deleteDeck(cardInfo.id);
    }
  };

  const cardList = deckInfo.cards.map((cardInfo) => (
    <CardItemLink
      key={cardInfo.id}
      cardInfo={cardInfo}
      handleDelete={() => handleDelete(cardInfo)}
    />
  ));

//   console.log(deckInfo.cards);

  return (
    <React.Fragment>
      <DeckNav deckInfo={deckInfo} />
      <article>
        <div>
          <h5>{deckInfo.name}</h5>
        </div>
        <p>{deckInfo.description}</p>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/edit`}
              className="btn btn-secondary mr-2"
            >
              Edit
            </Link>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/study`}
              className="btn btn-primary mr-2"
            >
              Study
            </Link>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/cards/new`}
              className="btn btn-primary"
            >
              Add Cards
            </Link>
          </div>
          <div
            className="btn-group ml-auto"
            role="group"
            aria-label="First group"
          >
            <button className="btn btn-danger" onClick={handleDelete}></button>
          </div>
        </div>
      </article>
      <h2 className="mt-4">Cards</h2>
      <article>{cardList}</article>
    </React.Fragment>
  );
}
