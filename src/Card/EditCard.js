import React from "react";
import { EditCardForm } from "./EditCardForm.js";
import { EditCardNav } from "./EditCardNav.js";

const EditCard= ({ cardInfo }) => (
  <>
    <EditCardNav cardInfo={cardInfo} />
    <h1>Edit Card</h1>
    <EditCardForm/>
  </>
);

export default EditCard;
