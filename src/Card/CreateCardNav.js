import { Link } from "react-router-dom";

export const CreateCardNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={""}>Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to={""}>{deckInfo.name}</Link>
      </li>
      <li className="breadcrumb-item active">Create Card</li>
    </ol>
  </nav>
);
