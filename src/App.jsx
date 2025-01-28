import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import VinoDetail from './components/VinoDetail/VinoDetail'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <> 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/vino/:id' element={<VinoDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
