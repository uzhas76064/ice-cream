import Title from "../UI/Title/Title.jsx";
import PropTypes from "prop-types";

import styles from "./Promo.module.css";

const Promo = ({children}) => {
    return <div className={styles.promo}>
        <Title type='h2'>{children}</Title>
    </div>
}

Promo.propTypes = {
    children: PropTypes.node.isRequired
}

export default Promo;