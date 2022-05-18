import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home.js";
import Deck from "../Decks/Deck";
import CreateDeck from "../Decks/CreateDeck";
import EditDeck from "../Decks/EditDeck";
import StudyScreen from "../DeckID-study/StudyScreen";
import NotFound from "./NotFound";

function Layout() {
  //handleDelete 
  //if the item has cardId, delete from card
  //if no cardId, delete from deck

  //need to add loading as rendering condition too

  //abortcontrollers? we do need abort() for some or built in handled?

  //DeckNav rendering condition? nav in general

  //edit deck and create deck button need to be separated
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <StudyScreen />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;

//Route to the card?
