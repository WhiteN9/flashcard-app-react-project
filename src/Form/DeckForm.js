import React from "react";

//form template that can be re-used for creating and editing deck
export const DeckForm = ({
  onSubmit,
  onCancel,
  deckInfo,
  setDeckInfo,
  submitLabel,
  cancelLabel,
}) => {
  const handleInputChange = (evt) => {
    console.log(evt.target.value);
    setDeckInfo({ ...deckInfo, [evt.target.name]: evt.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={deckInfo.name}
          onChange={handleInputChange}
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
          value={deckInfo.description}
          onChange={handleInputChange}
          placeholder="Brief description of the deck"
          required
          className="form-control"
          rows="4"
        />
      </div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-secondary"
            name="cancel"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="First group">
          <button type="submit" className="btn btn-primary">
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
};
