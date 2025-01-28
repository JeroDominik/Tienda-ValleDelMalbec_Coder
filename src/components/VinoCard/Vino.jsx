import { Link } from "react-router-dom"
import "../ItemListContainer/ItemListContainer.css"

const Vino = ( {vino} ) => {
    return (
        <li className="vinos__card">
            <img src={vino.img} alt={vino.nombre}/>
            <h2>{vino.nombre}</h2>
            <p>{vino.descripcion}</p>
            <p>${vino.precio}</p>
            <button className="button__verMas">
                <Link to={`vino/${vino.id}`}>
                    Ver Más
                </Link>
            </button>
        </li>
    )
}

export default Vino