import styles from "./Textarea.module.css"
import { useState } from "react"
import Checkbox from "./Checkbox";

function Input({ 
        variant = "primary",
        labelValue = "",
        requirements = [], 
        fieldValue = '',
        state = {},
        isRow = false,
        isProtected = false,
        ...props
    }) {
    const [value, setValue] = useState(fieldValue);

    function handleInput(event) {
        setValue(event.target.value)
    }

    return (
        <>
            <div className={`flex w-full gap-3 flex-${isRow ? 'row' : 'col'}`}>
                <label htmlFor={props.name} className={`${styles.label}`}>
                    {labelValue}
                    {isProtected && <Checkbox forItem={props.name}/>}
                </label>
                <input 
                    className={`${styles.input} ${styles.effects} ${styles[variant]}`}
                    onChange={handleInput}
                    value={value}
                    { ...props } />
            </div>
            <ul>
                {requirements.map((req) => (
                    <li className={
                        fieldValue ? (
                            `${styles.requirements} ${state[req.type] ? (
                                styles.valid) : (styles.invalid)}`
                            ) : (`${styles.requirements}`
                        )}
                        key={req.type}
                    >
                    {state[req.type] ? '✓' : '✗'} {req.short_msg}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Input
