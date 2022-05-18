import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import { CardForm } from "../Form/CardForm.js";

export const CreateCardForm = ({ deckInfo: { id = 0 } }) => {
  const history = useHistory();

  const initialCardInfo = {
    front: "",
    back: "",
    deckId: id,
  };
  const [cardInfo, setCardInfo] = useState({ ...initialCardInfo });

  useEffect(() => {
    setCardInfo({ ...cardInfo, deckId: id });
  }, [id]);

  const controller = new AbortController();

  const handleCreateCard = async (evt) => {
    evt.preventDefault();
    const data = await createCard(cardInfo.deckId,cardInfo, controller.signal);
    console.log(data);
    setCardInfo({ ...initialCardInfo });
  };

  const onCancel = () => {
    setCardInfo({ ...initialCardInfo });
    history.go(-1);
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
