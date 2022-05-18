import React from "react";
import { CreateCardForm } from "./CreateCardForm.js";
import { CreateCardNav } from "./CreateCardNav.js";

const CreateCard = () => (
  <>
    <CreateCardNav />
    <h1>Create Card</h1>
    <CreateCardForm />
  </>
);

export default CreateCard;
