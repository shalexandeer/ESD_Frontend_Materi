import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './pages/product'
import Addproduk from './pages/add-product'
import UpdateProduct from './pages/update-product'
import DeleteProduk from './pages/delete-product'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/addproduk' element={<Addproduk />} />
        <Route path='/update' element={<UpdateProduct />} />
        <Route path='/Delete' element={<DeleteProduk />} />
      </Routes>
    </Router>
  )
}

export default App
