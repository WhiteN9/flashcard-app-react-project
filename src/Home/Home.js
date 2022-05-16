import { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { listDecks } from "../utils/api";

import { DeckItemLink } from "../Decks/DeckItemLink.js";


export default function Home() {
  const [deckList, setDeckList] = useState([]);
  const userouteMatch = useRouteMatch();
  //   console.log(userouteMatch);

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

  const deckItemLinks = deckList.map((deck) => (
    <DeckItemLink key={deck.id} deck={deck} />
  ));

  //   console.log(deckList);
  return (
    <div>
      <div>
        <Link to="/decks/new"> Create Deck </Link>
      </div>
      <div>{deckItemLinks}</div>
      <div>
        <Switch>

        </Switch>
        <ul></ul>
      </div>
    </div>
  );
}

//might need to put deckList into a component?
