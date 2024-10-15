import logo from '../../img/logo.svg';

const Header = props => {
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt=""/>
                </a>
                <div className="cart">Корзина</div>
            </div>
        </header>
    )
}

export default Header;