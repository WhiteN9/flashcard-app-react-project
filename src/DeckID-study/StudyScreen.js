import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import { StudyScreenNav } from "./StudyScreenNav";

export default function StudyScreen() {

    const [deckInfo,setDeckInfo] = useState([]);
    const deckId = useParams().userId;
    console.log(deckId)

    useEffect(() => {
        const controller = new AbortController();
        async function get() {
            const data = await readDeck(deckId,controller.signal);
            setDeckInfo(data);
        }
        get()
    },[])

    console.log(deckInfo)
    return (
        <React.Fragment>
            <StudyScreenNav />
            <h1>{deckInfo.map(deck => <p>{deck}</p>)}</h1>
            <card>a</card>
        </React.Fragment>
    )
}