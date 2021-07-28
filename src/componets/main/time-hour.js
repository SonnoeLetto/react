import React from 'react';

function Time() {
const data = new Date()
const hours = data.getHours()
const style = {
  color: 'white'
}
let timeOfDay

if (hours < 12) {
    timeOfDay = "morning"
    style.color = 'yellow'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    style.color = 'darkblue'

  } else {
    timeOfDay = "night"
    style.color = 'purple'

  }

return(
    <h1 style={style}>Good {timeOfDay}</h1>
)
}
export default Time