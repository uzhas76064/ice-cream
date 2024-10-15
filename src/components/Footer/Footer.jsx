import logo from '../../img/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <a href={logo} className="logo"></a>
                <address className="contacts">
                    <p className="contacts__name"></p>
                    <a  className="contacts__phone" href="tel:+79912365058">Номер для связи: +7 (991) 236-50-58</a>
                    <a href="mailto: uzhas76064@gmail.com">Почта для связи: uzhas76064@gmail.com</a>
                </address>
            </div>
        </footer>
    )
}

export default Footer;