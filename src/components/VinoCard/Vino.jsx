import "../ItemListContainer/ItemListContainer.css"

const Vino = ( {vino} ) => {
    return (
        <li className="vinos__card">
            <img src={vino.img} alt={vino.nombre}/>
            <h2>{vino.nombre}</h2>
            <p>{vino.descripcion}</p>
            <p>${vino.precio}</p>
            <button className="button__verMas">Ver Más</button>
        </li>
    )
}

export default Vino