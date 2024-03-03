import React from 'react';
import './App.css';
import Header from './components/Header';
import HomeProduct from './pages/HomeProduct';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div>
      <Header />
      <HomeProduct />
      <AddProduct />
      <EditProduct />
    </div>
  );
}

export default App;
