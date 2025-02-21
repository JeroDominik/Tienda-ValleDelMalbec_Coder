import { Link } from "react-router-dom"
import carritoImage from "../../../assets/carrito.svg"

const CartWidget = () => {
  return (
    <Link to="/carro">
      <img src={carritoImage} alt="Imagen del Carrito" />
    </Link>
    
  )
}

export default CartWidget