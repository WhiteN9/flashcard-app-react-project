import React, { useEffect, useState } from "react";
import { createDeck } from "../utils/api";
import { useHistory, useRouteMatch } from "react-router-dom";

export const EditDeckForm = ({
  deckInfo: { name = "" } = "",
  deckInfo: { description = "" } = "",
}) => {
  console.log(name, description);
  const history = useHistory();
  const initialDeckForm = {
    name: name,
    description: description,
  };
  const [deckForm, setDeckForm] = useState({ ...initialDeckForm });

  const useroutematch = useRouteMatch();
  // params: {deckId: '1'}
  // path: "/decks/:deckId/edit"
  // url: "/decks/1/edit"
  console.log(useroutematch);
  useEffect(() => {
    setDeckForm({
      ...deckForm,
      name: name,
      description: description,
    });
  }, [name, description]);

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setDeckForm({ ...deckForm, [evt.target.name]: evt.target.value });
  };

  const handleButton = async (evt) => {
    evt.preventDefault();
    if (deckForm.name !== "") {
      await createDeck(deckForm);
      history.push(`/decks/${useroutematch.params.deckId}`);
    } else {
      history.push("/");
    }
  };
  console.log(deckForm);
  return (
    <React.Fragment>
      <form name="createNewDeck" onSubmit={handleButton}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={deckForm.name}
            onChange={handleChange}
            placeholder="Deck Name"
            required
            className="form-control"
            autoFocus
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={deckForm.description}
            onChange={handleChange}
            placeholder="Brief description of the deck"
            required
            className="form-control"
            rows="4"
          />
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          name="cancel"
          onClick={handleButton}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
