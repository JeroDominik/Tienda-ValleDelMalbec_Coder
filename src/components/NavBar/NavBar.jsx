import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <nav className="navbar">
            <Link to="/">
                <img src="./LogoValleDelMalbec.svg" alt="Imagen Logo Valle del Malbec"/>
            </Link>
            <h1 className="nav__title">
                Tienda Valle del Malbec
            </h1>
            <CartWidget/>
        </nav>
        <ul className="nav__links">
            <li>
                <Link to="/">Tintos</Link>
            </li>
            <li>
                <Link to="/">Blancos</Link>
            </li>
        </ul>
    </header>
  )
}

export default NavBar