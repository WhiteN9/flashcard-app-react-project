import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createCard } from "../../utils/api";
import { CardForm } from "../../Form/CardForm.js";

export const CreateCardForm = ({ deckInfo: { id = 0 } }) => {
  const history = useHistory();
  const controller = new AbortController();

  const initialCardInfo = {
    front: "",
    back: "",
    deckId: id,
  };
  const [cardInfo, setCardInfo] = useState( initialCardInfo );

  useEffect(() => {
    setCardInfo({ ...cardInfo, deckId: id });
  }, [id]);

  const handleCreateCard = async (evt) => {
    evt.preventDefault();
    await createCard(cardInfo.deckId,cardInfo, controller.signal);
    setCardInfo(initialCardInfo);
    history.go(0);
  };
  
  const onCancel = () => {
    setCardInfo(initialCardInfo);
    history.push(`/decks/${cardInfo.deckId}`);
  };
  console.log("create card form render")
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
