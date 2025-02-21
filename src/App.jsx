import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <> 
      <BrowserRouter>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/vino/:id' element={<ItemDetail/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
