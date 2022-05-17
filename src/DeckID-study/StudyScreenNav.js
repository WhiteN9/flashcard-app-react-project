import { Link } from "react-router-dom";

export const StudyScreenNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="">###</Link>
      </li>
      <li className="breadcrumb-item active">Study</li>
    </ol>
  </nav>
);
