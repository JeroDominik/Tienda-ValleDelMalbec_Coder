import "./ItemListContainer.css"

const ItemListContainer = ( {text} ) => {

  return (
    <main className="contenedor">
        <h2 className="item__title">
            {text}
        </h2>
    </main>
  )
}

export default ItemListContainer