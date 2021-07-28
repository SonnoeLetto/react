import React from 'react';
import jokesData from "./jokesData"
import Joke from './Joke';

function MyApp() {
    const jokesComponents = jokesData.map((el, i) => <Joke key={i} question={el.question} punchLine={el.punchLine} />)
    return (
        <div>
            {jokesComponents}
        </div>
    )
}

export default MyApp