import logo from '../../img/logo.svg';
import styles from './Header.module.css';

const Header = props => {
    return (
        <header className="header">
            <div className={styles.container}>
                <a href="#" className="logo">
                    <img width={152} height={32} src={logo} alt=""/>
                </a>
                <div className="cart">Корзина</div>
            </div>
        </header>
    )
}

export default Header;