import "./ItemDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import { getDoc, doc } from "firebase/firestore"

const VinoDetail = () => {
  const {id} = useParams()
  const [vino, setVino] = useState({})

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

  return (
    <section className="contenedor vino__detail">
      <h2>{vino.nombre}</h2>
      <p>{vino.descripcion}</p>
      <img src={vino.img} alt={vino.nombre}/>
    </section>
  )
}

export default VinoDetail