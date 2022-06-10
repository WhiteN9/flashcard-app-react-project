import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createCard } from "../../utils/api";
import { CardForm } from "../../Form/CardForm.js";

export const CreateCardForm = ({ deckInfo: { id = 0 } }) => {
  const history = useHistory();

  const initialCardInfo = {
    front: "",
    back: "",
    deckId: id,
  };
  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  //update the cardInfo upon receiving the deck id passed down from its parent component
  useEffect(() => {
    setCardInfo({ ...cardInfo, deckId: id });
  }, [id]);

  //Render a card form that is capable of saving new cards
  //or cancel and go back to the deck page by the deck's ID
  const handleCreateCard = async (evt) => {
    evt.preventDefault();
    const controller = new AbortController();
    await createCard(cardInfo.deckId, cardInfo, controller.signal);
    setCardInfo(initialCardInfo);
    history.go(0);
  };
  const onCancel = () => {
    setCardInfo(initialCardInfo);
    history.push(`/decks/${cardInfo.deckId}`);
  };

  return (
    <React.Fragment>
      <CardForm
        onSubmit={handleCreateCard}
        onCancel={onCancel}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        submitLabel="Save"
        cancelLabel="Done"
      />
    </React.Fragment>
  );
};
