import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import { StudyScreenNav } from "./StudyScreenNav";

//setting default values are very important to not break the page at initial load
export default function StudyScreen() {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });
  //default value with an object of `cards` property with an empty array value
  //so that the `card` variable have something "defined" to read while waiting for the
  //actual deckInfo.cards
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); //flipped - flip

  const history = useHistory();
  const deckId = useParams().deckId;
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
    return () => {
      console.log("unmounting study screen");
      controller.abort();
    };
  }, [deckId]);
  console.log(deckInfo);
  const card = deckInfo.cards[cardIndex] || {};

  // console.log(card);
  //Flip:
  //Flipped = false
  //Click
  //Flipped = true
  //in card-text class: {card?.front} also works for 1 condition, known as Optional chaining

  // const handleFlip = () => {
  //   setFlipped(!flipped);
  // };

  const cardHandler = () => {
    if (cardIndex + 1 !== deckInfo.cards.length) {
      setCardIndex(cardIndex + 1);
      setFlipped(!flipped);
    } else {
      const staying = window.confirm(
        "Restart cards? \n \n Click 'cancel' to return to the home page?"
      );
      if (staying) {
        setCardIndex(0);
      } else history.push("/");
    }
  };
  return (
    <React.Fragment>
      <StudyScreenNav deckInfo={deckInfo} />
      <h1>Study: {deckInfo.name}</h1>
      {/*conditional rendering for deck length*/}

      {deckInfo.cards.length > 2 ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Card {card.id} of {deckInfo.cards.length}
            </h5>
            <p className="card-text">{flipped ? card.front : card.back}</p>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div className="btn-group" role="group" aria-label="First group">
                <button
                  className="btn btn-secondary mr-2"
                  onClick={() => setFlipped(!flipped)}
                >
                  Flip
                </button>
              </div>
              {/*conditional rendering for flipped card*/}
              {flipped && (
                <div
                  className="btn-group"
                  role="group"
                  aria-label="First group"
                >
                  <button className="btn btn-primary" onClick={cardHandler}>
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Not enough cards.</h3>
          <p>
            You need at least 3 cards to study. There are{" "}
            {deckInfo.cards.length} cards in this deck.
          </p>
          <Link
            to={`/decks/${deckInfo.id}/cards/new`}
            className="btn btn-primary"
          >
            Add Cards
          </Link>
        </div>
      )}
    </React.Fragment>
  );
}
