import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./Carro.css"

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
                    <div className="vino__carro" key={vino.item.id}>
                        <div className="vino__carro__info">
                            <h4>{vino.item.nombre}</h4>
                            <p>Cantidad : {vino.cantidad}</p>
                            <p>Precio: {vino.item.precio}</p>
                        </div>
                        <img src={vino.item.img} alt={vino.item.nombre}/>
                        <button className="buttons__carro" onClick={()=>eliminarProducto(vino.item.id)}> Eliminar</button>
                    </div>
                )
            }
                <h3 className="title__total">Total Carrito: ${total}</h3>
                <button className="buttons__carro" onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
                <Link className="buttons__carro ancore" to="/checkout"> Finalizar Compra</Link>
        </div>
      )
}

export default Carro