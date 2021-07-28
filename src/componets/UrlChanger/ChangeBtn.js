import React from "react";

function ChangeBtn(props) {
    const onClickHandle = (e) => {
        e.preventDefault()
        props.setUrl('yandex.con')
    }
    return (
        <button onClick={onClickHandle}>Change</button>

    )
}

export default ChangeBtn