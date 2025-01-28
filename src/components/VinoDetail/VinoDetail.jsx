import "./VinoDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const VinoDetail = () => {
    const {id} = useParams()
    const [vino, setVino] = useState({})

    useEffect( () => {
        const getVino = async() => {
            const response = await fetch("/data/data.json")
            const data = await response.json()
            const vinoSeleccionado = data.find((product) => product.id === parseInt(id))
            setVino(vinoSeleccionado)
        }
        getVino()
    },[id])

  return (
    <section className="contenedor vino__detail">
        <h2>{vino.nombre}</h2>
        <p>{vino.descripcion}</p>
        <img src={vino.img} alt={vino.nombre}/>
    </section>
  )
}

export default VinoDetail