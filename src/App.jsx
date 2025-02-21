import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Checkout from './components/Checkout/Checkout'
import Carro from './components/Carro/Carro'

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
          <Route exact path='/carro' element={<Carro/>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
