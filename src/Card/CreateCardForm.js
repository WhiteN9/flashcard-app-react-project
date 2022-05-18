import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import { CardForm } from "../Form/CardForm.js";

export const CreateCardForm = () => {
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
    history.push(`/decks/${data.id}`);
  };

  const onCancel = () => {
    setCardInfo({ ...initialCardInfo });
    history.push("/");
  };
  return (
    <React.Fragment>
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
