import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget"


const NavBar = () => {
  return (
    <header>
        <nav className="navbar">
            <img src="./LogoValleDelMalbec.svg" alt="Imagen Logo Valle del Malbec"/>
            <ul className="nav__links">
                <li>
                    <a href="/">Vinos</a>
                </li>
                <li>
                    <a href="">Nosotros</a>
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