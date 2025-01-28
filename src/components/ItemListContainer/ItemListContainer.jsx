import "./ItemListContainer.css"
import Vino from "../VinoCard/Vino"
import { useEffect, useState } from "react"


const ItemListContainer = () => {
  const [vinos, setVinos] = useState([])

  useEffect(() => {
    const getData = async() => {
      const response = await fetch("/data/data.json")
      const data = await response.json()
      setVinos(data)
    }
    getData()
  }, [] )

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