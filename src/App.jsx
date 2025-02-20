import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <> 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/vino/:id' element={<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
