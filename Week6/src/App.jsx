import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import CommonLayout from "./components/layout/CommonLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailBlog from "./pages/Blogs/pages/DetailBlog";

function App() {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/blogs'
            element={<Blogs />}
          />
          <Route
            path='/blogs/:id'
            element={<DetailBlog />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='*'
            element={<NoPage />}
          />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  );
}

export default App;
