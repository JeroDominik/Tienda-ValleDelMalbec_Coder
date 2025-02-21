import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const Carro = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>Tu Carro se encuentra vacio</h2>
                <Link to = "/"> Ver Vinos</Link>
            </>
        )
    }

    return (
        <div>
            {
                carrito.map(vino => 
                    <div key={vino.item.id}>
                        <h4>{vino.item.nombre}</h4>
                        <p>Cantidad : {vino.cantidad}</p>
                        <p>Precio: {vino.item.precio}</p>
                        <button onClick={()=>eliminarProducto(vino.item.id)}> Eliminar</button>
                    </div>
                )
            }
                <h3>Total: ${total}</h3>
                <h3>Cantidad total: {cantidadTotal}</h3>
                <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
                <Link to="/checkout"> Finalizar Compra</Link>
        </div>
      )
}

export default Carro