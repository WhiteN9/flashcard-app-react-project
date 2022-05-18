import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

export const EditDeckForm = () => {
  const history = useHistory();
  const initialDeckForm = {
    name: "",
    description: "",
  };
  const [deckForm, setDeckForm] = useState({ ...initialDeckForm });

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setDeckForm({ ...deckForm, [evt.target.name]: evt.target.value });
  };

  const handleButton = async (evt) => {
    evt.preventDefault();
    if (deckForm.name !== "") {
      await createDeck(deckForm);
      setDeckForm({ ...initialDeckForm });
      history.push("/deck");
    } else {
      setDeckForm({ ...initialDeckForm });
      history.push("/");
    }
  };

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
