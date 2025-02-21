import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <nav className="navbar">
            <img src="./LogoValleDelMalbec.svg" alt="Imagen Logo Valle del Malbec"/>
            <ul className="nav__links">
                <li>
                    <Link to="/">Vinos</Link>
                </li>
                <li>
                    <Link to="/">Nosotros</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        <h1 className="nav__title">
            Tienda Valle del Malbec
        </h1>
    </header>
  )
}

export default NavBar