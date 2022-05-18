import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const CardItemLink = ({ cardInfo = {}, handleDelete }) => {
  const { url } = useRouteMatch();
  // console.log(routeMatch);
  // params: {deckId: '1'}
  // path: "/decks/:deckId"
  // url: "/decks/1"

  // console.log(url);
  console.log(cardInfo);
  return (
    <React.Fragment>
      <article className="card list-group-item list-group-item-action">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <p>{cardInfo.front}</p>
            </div>
            <div className="col">
              <p>{cardInfo.back}</p>
              <div
                className="btn-toolbar d-flex justify-content-end"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <Link
                    to={`${url}/cards/${cardInfo.id}/edit`}
                    className="btn btn-secondary "
                  >
                    Edit
                  </Link>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="First group"
                >
                  <button className="btn btn-danger" onClick={handleDelete}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};
