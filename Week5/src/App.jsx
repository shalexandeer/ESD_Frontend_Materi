// import ParentComponent from "./pages/UseCallBack";
// import DataFetcher from "./pages/UseEffect";
// import ExpensiveComponent from "./pages/UseMemo";
// import ShoppingCart from "./pages/UseReducer";
// import FocusInput from "./pages/UseRef";
// import Counter from "./pages/UseState";
import './style.css'
import Header from "/Components/Header.jsx";
import Content from "/Components/Content.jsx";
import CartItems from '../Components/Cart';
// import Cart from "./Components/Cart";
// import Recomendations from "./Components/Recomendations";

function App() {
  return (
    <>
      <Header/>
      <CartItems/>
      <Content/>
    </>
  );
};

export default App;
