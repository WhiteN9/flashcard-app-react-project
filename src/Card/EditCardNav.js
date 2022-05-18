import { Link } from "react-router-dom";

export const EditCardNav = ({ cardInfo }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={""}>Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to={""}>{cardInfo.name}</Link>
      </li>
      <li className="breadcrumb-item active">Edit</li>
    </ol>
  </nav>
);
