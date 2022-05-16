import { useEffect, useState } from "react";

import { listDecks } from "../utils/api";

import { DeckItem } from "../Decks/DeckItem.js";

export default function Home() {
  const [deckList, setDeckList] = useState([]);

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

  //   console.log(deckList);
  return (
    <div>
      <div>
      </div>
      <div>
        <ul>
          {deckList.map((deck) => (
            <DeckItem key={deck.id} deck={deck} />
          ))}
        </ul>
      </div>
    </div>
  );
}
