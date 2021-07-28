import React, {useState} from "react";

const Input = (props) => {
    const [value, setValue] = useState('')

    const resetForm = () => {
        setValue( '' )
    }
    const onSubmitHandler = e => {
        e.preventDefault()

        props.setValueInput(value)
    }
    return (
        <form
            action=""
            onReset={resetForm}
            onSubmit={onSubmitHandler}
        >

            <input type="text" value={value} onChange={event => {setValue(event.target.value)}}/>
            <button>Send</button>
        </form>
    )
}

export default Input