import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api";

import { CardItemLink } from "./CardItemLink";
import EditDeck from "./Deck-Cards/EditDeck";
import StudyScreen from "./Deck-Cards/StudyScreen";
import NotFound from "../Layout/NotFound";
import { DeckDisplay } from "./DeckDisplay";
import CreateCard from "./Deck-Cards/CreateCard";
import EditCard from "./Deck-Cards/EditCard";

export default function Deck() {
  const [deckInfo, setDeckInfo] = useState({ cards: [] });
  // still need cards:[] because on initial load,
  // it will try to access cards to map

  const history = useHistory();
  const {
    params: { deckId },
    path,
  } = useRouteMatch();
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

  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}/edit`}>
          <EditDeck deckInfo={deckInfo} />
        </Route>
        <Route path={`${path}/study`}>
          <StudyScreen deckInfo={deckInfo} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <CreateCard />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard />
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
