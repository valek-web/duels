import { NavLink } from "react-router-dom"
import logo from "./../../assets/img/logo.png"
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="menu">
            <li className="menu__element">
              <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/main"}>
                Главная
              </NavLink>
            </li>
            <li className="menu__element">
              <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/duels"}>
                Дуэли
              </NavLink>
            </li>
            <li className="menu__element">
              <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/support"}>
                Поддержка
              </NavLink>
            </li>
          </ul>
          <div className="header__profile">
            <button className="header__btn">Войти</button>
          </div>
        </div>
      </div>
    </header>
  )
}
