import "./header.scss"
import logoVGUIT from "../../assets/images/icon-VGYIT.svg"

import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux";

const Header = function () {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <header className="header">
            <div className="header__wrapper header__wrapper--blue">
                <div className="container">
                    <div className="header__inner-one">
                        {isAuth &&
                        <nav className="header__menu">
                            <NavLink className="header__menu-item" to={"/ticket-view"}>Создание
                                билетов</NavLink>
                            <NavLink className="header__menu-item" to={"/personal-account"}>Личный кабинет</NavLink>
                        </nav>
                        }
                    </div>
                </div>
            </div>
            <div className="header__wrapper">
                <div className="container">
                    <div className="header__inner-two">
                        <div className="header__inner-two-image">
                            <a href="#"><img src={logoVGUIT} alt="Значок ВГУИТ"/></a>
                        </div>
                        <div className="header__inner-two-title">
                            <h1><a href="#">Генератор экзаменационных билетов</a></h1>
                            <p>Программное средство создания экзаменационных билетов<span> Vue</span>.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;