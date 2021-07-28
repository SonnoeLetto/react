import React, { useState } from "react"
import './App.css'
import Input from "./input";
import Text from "./Text";

function App() {
    const [valueInput, setValueInput] = useState('');

    return (
        <div>
            <Input setValueInput={setValueInput} />
            <Text>
                {valueInput}
            </Text>
        </div>
    )
}
export default App