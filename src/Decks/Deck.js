import { useRouteMatch } from "react-router-dom";

export default function Deck() {
    const useroutematch = useRouteMatch();
    console.log(useroutematch);
    return <h1>Hello</h1>
}