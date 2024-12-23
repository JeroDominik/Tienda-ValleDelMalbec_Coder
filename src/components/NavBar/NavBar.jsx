import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget"

// Buenas Profe! Tanto a la Imagen del Logo Valle del Malbec como a CartWidget, les pase su width en su archivo de svg cada uno,
// por eso de momento no he usado una className para darle estilos.

const NavBar = () => {
  return (
    <header>
        <nav className="navbar">
            <img src="./LogoValleDelMalbec.svg" alt="Imagen Logo Valle del Malbec"/>
            <ul className="nav__links">
                <li>
                    <a href="">Nuestra Bodega</a>
                </li>
                <li>
                    <a href="">Vinos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
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