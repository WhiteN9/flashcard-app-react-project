import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home.js";
import { CreateDeck } from "../Decks/CreateDeck";
import StudyScreen from "../DeckID-study/StudyScreen";
import NotFound from "./NotFound";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/deck">
            <Deck />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:userId/study">
            <StudyScreen />
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