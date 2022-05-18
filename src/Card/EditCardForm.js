import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";
import { CardForm } from "../Form/CardForm";

export const EditCardForm = ({cardInfo}) => {
  // const initialCardInfo = {
  //   front: "",
  //   back: "",
  //   deckId: id,
  // };
  // const [cardInfo, setCardInfo] = useState({ ...initialCardInfo });

  const history = useHistory();
  const { cardId, url } = useParams();

  const controller = new AbortController();

  // useEffect(() => {
  //   const controller = new AbortController();
  //   async function readCardInfo() {
  //     try {
  //       const data = await readCard(cardId, controller.signal);
  //       setCardInfo(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   readCardInfo();
  //   return () => {
  //     console.log("unmounting edit card form");
  //     controller.abort();
  //   };
  // }, [cardId]);

  const handleEditCard = async (evt) => {
    evt.preventDefault();
    const data = await updateCard(cardInfo, controller.signal);
    console.log(data);
    setCardInfo({ ...initialCardInfo });
    history.push(`${url}/${cardId}`);
  };

  const onCancel = () => {
    setCardInfo({ ...initialCardInfo });
    history.push(`${url}/${cardId}`);
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
