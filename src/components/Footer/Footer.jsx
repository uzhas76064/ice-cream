import logo from '../../img/logo.svg';
import Contacts from "../Contacts/Contacts.jsx";
import PropTypes from "prop-types";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <a href={logo} className="logo"></a>
                <Contacts email="mailto: uzhas76064@gmail.com"
                          name="Хватов Максим"
                          phone="tel:+79912365058"/>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    logo: PropTypes.string,
}

export default Footer;