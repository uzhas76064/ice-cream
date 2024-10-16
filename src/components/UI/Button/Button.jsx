import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({children, className, eventHandler}) => {
    return (
        <button className={`${className} ${styles.button}`} onClick={eventHandler}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    eventHandler: PropTypes.func.isRequired
}

export default Button;