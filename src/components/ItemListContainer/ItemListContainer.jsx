import "./ItemListContainer.css"
import Vino from "./VinoCard/Vino"
import { useEffect, useState } from "react"
import { db } from "../../services/config"
import { collection, getDocs, query } from "firebase/firestore"


const ItemListContainer = () => {
  const [vinos, setVinos] = useState([])

  useEffect(()=>{
    const coleccionVinos = query(collection(db,"vinosVdM"))

    getDocs(coleccionVinos)
      .then(res => {
        const vinosSeleccionados = res.docs.map(doc => {
          const data= doc.data()
          return {id: doc.id, ...data}
        })
        setVinos(vinosSeleccionados)
      })
      .catch(error => console.log(error))
  },[])


  return (
    <main className="contenedor">
      <ul className="vinos">
        {vinos.map((vino) => (
          <Vino 
            key={vino.id}
            vino={vino}
          />
        ))}
      </ul>
    </main>
  )
}

export default ItemListContainer