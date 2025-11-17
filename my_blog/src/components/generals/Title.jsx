import styles from "./Title.module.css"

function Title({ children, variant = "primary", ...props }) {
    const baseStyles = `${styles.textStyle}`

    return (
        <h1
            className={`${baseStyles} ${styles[variant]}`}
            { ...props }
            >
            {children}
        </h1>
    )
}

export default Title
