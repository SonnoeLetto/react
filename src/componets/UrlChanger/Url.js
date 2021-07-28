import {React, useState} from "react";
import ChangeBtn from "./ChangeBtn";
import ChangeInput from "./ChangeInput";

function Url() {
    const [url, setUrl] = useState('google.com')



    return (
        <div>
            <input type="text" value={url} readOnly/>
            <ChangeBtn setUrl={setUrl}/>
            <p>Сам введи</p>

            <ChangeInput setUrl={setUrl} url={url}/>
        </div>
    )
}

export default Url