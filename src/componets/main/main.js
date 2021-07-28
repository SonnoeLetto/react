import React from 'react';
import Time from './time-hour';
import Checkbox from './checkbox';

function Main() {
    return (
        <div className="main">
        <Time />
        <Checkbox name = {'Are you ready for this day?'}/>
        <Checkbox name = {'or not?'}/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, iste non. Ipsam asperiores iste corrupti. Obcaecati, quasi maxime qui ducimus quisquam nulla commodi rerum quidem beatae provident, ipsam ad cupiditate?
        </p>
        </div>
    )
}

export default Main