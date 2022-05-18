import { useEffect, useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

import { listDecks, deleteDeck } from "../utils/api";

import { DeckItemLink } from "../Decks/DeckItemLink.js";

export default function Home() {
  const [deckList, setDeckList] = useState([]);
  // const userouteMatch = useRouteMatch();
  // console.log(userouteMatch);

  const history = useHistory();

  useEffect(() => {
    setDeckList([]);
    const controller = new AbortController();
    async function getDeckList() {
      try {
        const listDeckData = await listDecks(controller.signal);
        // console.log(response);
        // const listDeckData = await response.json(); no need because this is from local and it is not inside json
        // console.log(listDeckData);
        setDeckList(listDeckData);
      } catch (error) {
        console.log(error);
      }
    }
    getDeckList();

    return function cleanUp() {
      console.log("unmounting Home");
      controller.abort();
    };
  }, []);

  const handleDelete = async (deckInfo) => {
    console.log(deckInfo);
    const result = window.confirm("Delete this deck?");
    if (result) {
      console.log("deleted post");
      await deleteDeck(deckInfo.id);
      history.go(0);
    }
  };

  const deckItemLinks = deckList.map((deckInfo) => (
    <DeckItemLink
      key={deckInfo.id}
      deckInfo={deckInfo}
      handleDelete={() => handleDelete(deckInfo)}
    />
  ));

  // console.log(Array.isArray(deckList));
  // console.log(deckList);
  return (
    <div>
      <div className="mb-2">
        <Link to="/decks/new" className="btn btn-secondary text-white">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          Create Deck{" "}
        </Link>
      </div>
      <div className="list-group">{deckItemLinks}</div>
    </div>
  );
}

//might need to put deckList into a component?
