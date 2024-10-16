import Contacts from "../Contacts/Contacts.jsx";
import PropTypes from "prop-types";

import styles from "./Footer.module.css";
import logoBig from "../../img/logo.svg";
import logoSmall from "../../img/logo_small.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <picture>
                        <source media="(min-width: 1200px)" srcSet={logoBig}/>
                        <source media="(min-width: 430px)" srcSet={logoSmall}/>
                        <img src={logoSmall} alt="logo"/>
                    </picture>
                </a>
                <Contacts email="uzhas76064@gmail.com"
                          name="Хватов Максим"
                          phone="+79912365058"/>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    logo: PropTypes.string,
}

export default Footer;