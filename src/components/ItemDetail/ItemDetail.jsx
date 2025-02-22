import "./ItemDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

import { db } from "../../services/config"
import { getDoc, doc } from "firebase/firestore"


const ItemDetail = () => {
  const {id} = useParams()
  const [vino, setVino] = useState({})
  const [cantidad, setCantidad] = useState(1);
  const [cantidadElegida, setCantidadElegida] = useState(false);
  const {agregarAlCarrito} = useContext(CarritoContext)

    useEffect( () => {
      const coleccionVinos = doc(db, "vinosVdM", id)

      getDoc(coleccionVinos)
      .then(res => {
        const data = res.data()
        const vinoSeleccionado = { id: res.id, ...data}
        setVino(vinoSeleccionado)
      })
      .catch(error => console.log(error))
    },[id])

    const sumarCantidad = () => { 
      setCantidad(cantidad + 1);  
    }

    const restarCantidad = () => {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    }

    const manejadorCantidad = (cantidad) => {
      setCantidad(cantidad)
      setCantidadElegida(true)
      
      const item = {id, nombre: vino.nombre, precio: vino.precio, img:vino.img}
      agregarAlCarrito(item,cantidad)
    }


  return (
    <section className="contenedor vino__detail">
      <h2>{vino.nombre}</h2>
      <p>{vino.descripcion}</p>
      <img src={vino.img} alt={vino.nombre}/>
      <p>{`El Precio es de: $${vino.precio}`}</p>
      {
        cantidadElegida
        ? <Link to="/carro">Terminar Compra</Link>
        : <>
            <div className="contador">
              <button className="buttons__contador" onClick={restarCantidad}> - </button>
              <strong> {cantidad} </strong>
              <button className="buttons__contador" onClick={sumarCantidad}> + </button>
            </div>
            <button className="button__agregar" onClick={()=> manejadorCantidad(cantidad)}> Agregar al Carrito </button>
          </>
      }
    </section>
  )
}

export default ItemDetail