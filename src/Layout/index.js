import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home.js";

import NotFound from "./NotFound";
import NewDeck from "../Decks/NewDeck";

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
          <Route path="/decks/new">
            <NewDeck />
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