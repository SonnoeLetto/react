import React from "react";

function ChangeInput(props) {
    return (
        <div>
            <input type="text" value={props.url} onChange={props.setUrl()}/>
        </div>
    )
}

export default ChangeInput