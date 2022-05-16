import React, { useState } from "react";

export const CreateDeckForm = () => {
  const [newDeck, setNewDeck] = useState({});

  return (
    <React.Fragment>
      <form name="createNewDeck" onSubmit="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value=""
            onChange=""
            placeholder="Deck Name"
            required
            className="form-control"
            autoFocus
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value=""
            onChange=""
            placeholder="Brief description of the deck"
            required
            className="form-control"
            rows="4"
          ></textarea>
        </div>
      </form>
    </React.Fragment>
  );
};
