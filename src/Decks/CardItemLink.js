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
    <article className="card list-group-item list-group-item-action">
      <div className="card-body">
        <p>{cardInfo.front}</p>
        <p>{cardInfo.back}</p>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group" role="group" aria-label="First group">
            <Link
              to={`${url}/cards/${cardInfo.id}`}
              className="btn btn-secondary ml-auto"
            >
              Edit Card
            </Link>
          </div>
          <div
            className="btn-group ml-auto"
            role="group"
            aria-label="First group"
          >
            <button className="btn btn-danger" onClick={handleDelete}></button>
          </div>
        </div>
      </div>
    </article>
  );
};
