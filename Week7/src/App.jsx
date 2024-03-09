import "./App.css";
import Todos from "./pages/todos/Todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Parent";
import Product from "./pages/products/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Todos />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/products'
          element={<Product />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
