import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateCard } from "../../utils/api";
import { CardForm } from "../../Form/CardForm";

export const EditCardForm = ({ cardInfo, setCardInfo, initialCardInfo }) => {
  const history = useHistory();
  const { deckId } = useParams();

  //Render a card form that is capable of editing cards
  //or cancel and go back to the deck page by the deck's ID
  const handleEditCard = async (evt) => {
    evt.preventDefault();
    const controller = new AbortController();
    await updateCard(cardInfo, controller.signal);
    history.push(`/decks/${deckId}`);
  };
  const onCancel = () => {
    setCardInfo(initialCardInfo);
    history.push(`/decks/${deckId}`);
  };

  return (
    <React.Fragment>
      <CardForm
        onSubmit={handleEditCard}
        onCancel={onCancel}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        submitLabel="Submit"
        cancelLabel="Cancel"
      />
    </React.Fragment>
  );
};
