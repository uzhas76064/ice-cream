import logoBig from '../../img/logo.svg';
import logoSmall from '../../img/logo_small.svg';
import styles from './Header.module.css';
import PropTypes from "prop-types";

const Header = props => {
    return (
        <header className="header">
            <div className={styles.container}>
                <a href="#" className="logo">
                    <picture>
                        <source media="(min-width: 1200px)" srcSet={logoBig}/>
                        <source media="(min-width: 430px)" srcSet={logoSmall}/>
                        <img src={logoSmall} alt="logo"/>
                    </picture>
                </a>
                <div className="cart">Корзина {props.cartItems.length}</div>
            </div>
        </header>
    )
}

Header.propTypes = {
    cartItems: PropTypes.array
}

export default Header;