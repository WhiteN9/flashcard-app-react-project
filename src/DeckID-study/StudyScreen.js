import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import { StudyScreenNav } from "./StudyScreenNav";
import { CardItemLink } from "./CardItemLink";

//setting default values are very important to not break the page at initial load
export default function StudyScreen() {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });
  const [cardIndex, setCardIndex] = useState(0);

  const [flipped, setFlipped] = useState(false); //flipped - flip

  const deckId = useParams().userId;
  // console.log(deckId); >> 1

  useEffect(() => {
    const controller = new AbortController();
    async function readDeckInfo() {
      try {
        const data = await readDeck(deckId, controller.signal);
        setDeckInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    readDeckInfo();

    return () => controller.abort();
  }, [deckId]);

  const card = deckInfo.cards[cardIndex] || {};

  console.log(card);

  return (
    <React.Fragment>
      <StudyScreenNav deckInfo={deckInfo} />
      <h1>{deckInfo.name}: Study</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {card.id} of {deckInfo.cards.length}
          </h5>
          <p className="card-text">{card.front}</p>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div className="btn-group" role="group" aria-label="First group">
              <button className="btn btn-secondary mr-2">Flip</button>
            </div>
            <div className="btn-group" role="group" aria-label="First group">
              <Link to="" className="btn btn-primary">
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
