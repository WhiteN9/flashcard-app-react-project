import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import { CardForm } from "../Form/CardForm.js";

export const CreateCardForm = ({deckInfo}) => {
  const history = useHistory();
  const initialCardInfo = {
    name: "",
    description: "",
  };
  const [cardInfo, setCardInfo] = useState({ ...initialCardInfo });

  const controller = new AbortController();

  const handleCreateCard = async (evt) => {
    evt.preventDefault();
    const data = await createCard(cardInfo, controller.signal);
    console.log(data);
    setCardInfo({ ...initialCardInfo });
    history.go(-1);
  };

  const onCancel = () => {
    setCardInfo({ ...initialCardInfo });
    history.go(-1);
  };
  return (
    <React.Fragment>
      <h2>{deckInfo.name}: Add Card</h2> 
      <CardForm
        onSubmit={handleCreateCard}
        onCancel={onCancel}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        submitLabel="Submit"
        cancelLabel="Cancel"
      />
    </React.Fragment>
  );
};
