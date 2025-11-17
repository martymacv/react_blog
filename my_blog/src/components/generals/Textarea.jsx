import { useState } from "react";

function Textarea({ 
        variant = "primary",
        fieldValue = "",
        ...props }) {
    const baseStyles = 'font-roboto text-[#d2d2d2ff] text-[14px] font-normal w-full focus:outline-none'
    const borderStyle = 'border-b-2 pb-1'
    const placeholderStyle = 'placeholder:text-[#ffffff37]'

    const variants = {
        primary: 'border-[#3f3f3fff] focus:border-[#107effff]',
        valid: 'border-[#00cf00ff]',
        invalid: 'border-[#ff2000ff]',
    }

    const [value, setValue] = useState(fieldValue);
        // console.log(value)
        function handleInput(event) {
            setValue(event.target.value)
        }

    return (
        <>
            <textarea { ...props } value={value} onChange={handleInput} rows="5"
                className={`${baseStyles} ${borderStyle} ${placeholderStyle} ${variants[variant]}`}>
            </textarea>
        </>
    )
}

export default Textarea
