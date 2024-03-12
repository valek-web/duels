"use client"
import Link from "next/link"
import "./Header.css"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname()
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Link href={"/"}>
              <Image src="/img/logo.png" alt="logo" width={174} height={36} />
            </Link>
          </div>
          <ul className="menu">
            <li className="menu__element">
              <Link href={"/"} className={`${pathname === "/" && "active-link"}`}>
                Главная
              </Link>
            </li>
            <li className="menu__element">
              <Link href={"/duels"} className={`${pathname === "/duels" && "active-link"}`}>
                Дуэли
              </Link>
            </li>
            <li className="menu__element">
              <Link href={"/support"} className={`${pathname === "/support" && "active-link"}`}>
                Поддержка
              </Link>
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
