import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import { StudyScreenNav } from "./StudyScreenNav";
import { CardItemLink } from "./CardItemLink";

export default function StudyScreen() {
  const [deckInfo, setDeckInfo] = useState([]);
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

  console.log(deckInfo);

  const cardMap = deckInfo.cards.map((card) => {
    return (
        <div>{card.id}</div>
    );
  });


  console.log(cardMap);
  return (
    <React.Fragment>
      <StudyScreenNav deckInfo={deckInfo} />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
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
