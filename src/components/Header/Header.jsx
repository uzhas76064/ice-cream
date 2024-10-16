import logoBig from '../../img/logo.svg';
import logoSmall from '../../img/logo_small.svg';
import styles from './Header.module.css';

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
                <div className="cart">Корзина</div>
            </div>
        </header>
    )
}

export default Header;