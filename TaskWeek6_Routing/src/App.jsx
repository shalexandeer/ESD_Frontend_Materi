import GetandDelete from "./pages/pageGetAndDelete";
import PagePOST from './pages/pagePost';
import UpdateProduct from './pages/pagePUT';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<GetandDelete/>}
      />
      <Route
        path='/InsertProduct'
        element={<PagePOST/>}
      />
      <Route
        path='/UpdateProduct'
        element={<UpdateProduct/>}
      />
    </Routes>
  </BrowserRouter>
);
}

export default App
