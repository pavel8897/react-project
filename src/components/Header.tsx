import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
    return (
        <header>
            <div className="header-container">
                <div><img className="header-logo" src={logo} alt="" /></div>
                <nav className="header-nav">
                    <NavLink to="/">
                        Главная
                    </NavLink>

                    <NavLink to="/about">
                        О нас
                    </NavLink>

                    <NavLink to="/contacts">
                        Контакты
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
