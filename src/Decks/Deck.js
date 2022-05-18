import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  Link,
  useHistory,
} from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api";
import { DeckNav } from "./DeckNav";
import { CardItemLink } from "./CardItemLink";
import EditDeck from "../Decks/EditDeck";
import StudyScreen from "./StudyScreen";
import NotFound from "../Layout/NotFound";
import { DeckDisplay } from "./DeckDisplay";

export default function Deck() {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });
  // still need cards:[] because on initial load,
  // it will try to access cards to map

  const history = useHistory();
  const { params, url, path } = useRouteMatch();
  //   console.log(routeMatch);
  //   params: {
  //     deckId: "1";
  //   }
  //   path: "/decks/:deckId";
  //   url: "/decks/1";

  //   console.log(deckInfo);
  useEffect(() => {
    const controller = new AbortController();
    async function readDeckInfo() {
      try {
        const data = await readDeck(params.deckId, controller.sginal);
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
  }, [params.deckId]);

  const handleDelete = async (item) => {
    console.log(item.deckId);
    console.log("deckId" in item); //true if card
    console.log(item.hasOwnProperty("deckId")); //true if card
    console.log(item.deckId !== undefined); //true if card
    if ("deckId" in item) {
      const result = window.confirm(
        "Delete this card? \n \n You will not be able to recover it"
      );
      if (result) {
        console.log("deleted card");
        await deleteCard(item.id);
        history.go(0);
      }
    } else {
      const result = window.confirm("Delete this deck?");
      if (result) {
        console.log("deleted deck");
        await deleteDeck(item.id);
        history.goBack();
      }
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

      <Switch>
        <Route path={`${path}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${path}/study`}>
          <StudyScreen />
        </Route>
        <Route path={`${path}`}>
          <DeckDisplay
            deckInfo={deckInfo}
            handleDelete={handleDelete}
            cardList={cardList}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}