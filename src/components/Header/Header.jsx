import logoBig from '../../img/logo.svg';
import logoSmall from '../../img/logo_small.svg';
import cart from '../../img/cart.svg';
import styles from './Header.module.css';
import PropTypes from "prop-types";

const Header = ({totalCost, cartItems}) => {
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
                <div className="cart">
                    <span>{totalCost} &#8381;</span>
                    <img className={styles.cart} src={cart} alt="Корзина"/>
                    <span className={styles.cartCount}>{cartItems.length}</span>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    cartItems: PropTypes.array,
    totalCost: PropTypes.number
}

export default Header;