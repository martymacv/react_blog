import styles from "./Textarea.module.css"
import { useState } from "react";
import Checkbox from "./Checkbox";

function Textarea({ variant = "primary", labelValue = '', fieldValue = "", ...props }) {
    const [value, setValue] = useState(fieldValue);

    function handleInput(event) {
        setValue(event.target.value)
    }

    return (
        <>
            <label htmlFor={props.name} className={`${styles.label}`}>
                {labelValue}
                <Checkbox forItem={props.name}/>
            </label>
            <textarea { ...props } value={value} onChange={handleInput} rows="5"
                className={`${styles.input} ${styles.effects} ${styles[variant]}`}>
            </textarea>
        </>
    )
}

export default Textarea
