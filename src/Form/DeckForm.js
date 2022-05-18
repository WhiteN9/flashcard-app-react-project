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
      <button
        type="button"
        className="btn btn-secondary"
        name="cancel"
        onClick={onCancel}
      >
        {cancelLabel}
      </button>
      <button type="submit" className="btn btn-primary">
        {submitLabel}
      </button>
    </form>
  );
};
