import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateCard } from "../../utils/api";
import { CardForm } from "../../Form/CardForm";

export const EditCardForm = ({ cardInfo, setCardInfo, initialCardInfo }) => {
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const controller = new AbortController();

  //Render a card form that is capable of editing cards
  //or cancel and go back to the deck page by the deck's ID
  const handleEditCard = async (evt) => {
    evt.preventDefault();
    const data = await updateCard(cardInfo, controller.signal);
    console.log(data);
    setCardInfo({ ...initialCardInfo });
    history.push(`/decks/${deckId}/cards/${cardId}`);
  };
  const onCancel = () => {
    setCardInfo({ ...initialCardInfo });
    history.push(`/decks/${deckId}/cards/${cardId}`);
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
