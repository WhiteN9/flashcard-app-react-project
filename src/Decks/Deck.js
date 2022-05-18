import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api";
import { DeckNav } from "./DeckNav";

export default function Deck() {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });
  const [cardIndex, setCardIndex] = useState(0);

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

  const handleDelete = async (deck) => {
    console.log(deck);
    const result = window.confirm("Delete this deck?");
    if (result) {
      console.log("deleted post");
      await deleteDeck(deck.id);
    }
  };

  const card = deckInfo.cards[cardIndex] || {};

  return (
    <React.Fragment>
      <DeckNav deckInfo={deckInfo} />
      <article>
        <div>
          <h5>{deckInfo.name}</h5>
          <small className="card-text">{deckInfo.cards.length} cards</small>
        </div>
        <p>{deckInfo.description}</p>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}`}
              className="btn btn-secondary mr-2"
            >
              View
            </Link>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`/decks/${deckInfo.id}/study`}
              className="btn btn-primary"
            >
              Study
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
    </React.Fragment>
  );
}
