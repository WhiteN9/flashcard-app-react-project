import { Link } from "react-router-dom";

export const EditDeckNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item ">a</li>
      <li className="breadcrumb-item active">b</li>
    </ol>
  </nav>
);
