import React, { useEffect, useState } from "react";
import { createDeck } from "../utils/api";
import { useHistory, useRouteMatch } from "react-router-dom";
import { DeckForm } from "../Form/DeckForm";

export const EditDeckForm = () => {
  // const history = useHistory();
  // const initialDeckInfo = {
  //   name: "",
  //   description: "",
  // };
  // const [deckInfo, setDeckInfo] = useState({ ...initialDeckInfo });

  // const useroutematch = useRouteMatch();
  // // params: {deckId: '1'}
  // // path: "/decks/:deckId/edit"
  // // url: "/decks/1/edit"
  // console.log(useroutematch);
  // useEffect(() => {
  //   setDeckForm({
  //     ...deckForm,
  //     name: name,
  //     description: description,
  //   });
  // }, [name, description]);

  // const handleChange = (evt) => {
  //   console.log(evt.target.value);
  //   setDeckForm({ ...deckForm, [evt.target.name]: evt.target.value });
  // };

  // const handleButton = async (evt) => {
  //   evt.preventDefault();
  //   if (deckForm.name !== "") {
  //     await createDeck(deckForm);
  //     history.push(`/decks/${useroutematch.params.deckId}`);
  //   } else {
  //     history.push("/");
  //   }
  // };
  // console.log(deckForm);
  return (
    <React.Fragment>
      {/* <DeckForm onSubmit onChange deckInfo /> */}
    </React.Fragment>
  );
};
