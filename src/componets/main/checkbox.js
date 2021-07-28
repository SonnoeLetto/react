import React from 'react';

function Checkbox(props) {
    const style = {
        marginTop: '50px',
        maxWidth: 350,
        marginLeft:'auto',
        marginRight:'auto',
        textAlign: 'left',
    }
    return (
        <div style={style}>
            <label style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>
                    {props.name}
                </p>

            <input name='ready' type="radio" />
            </label>
        </div>
    )
}

export default Checkbox