// import ParentComponent from "./pages/UseCallBack";
//import DataFetcher from "./pages/UseEffect";
// import ExpensiveComponent from "./pages/UseMemo";
// import ShoppingCart from "./pages/UseReducer";
// import FocusInput from "./pages/UseRef";
//import ThemeProvider from "./pages/UseContext.jsx";
// import DeleteProduct from "./refactor pages/delete";
// import AddUser from "./refactor pages/posting"
import "./style.css";
import DeleteUser from "./components/refactor pages/getAndHapus"
import FetchingUser from "./components/refactor pages/getAndHapus"
import AddUser from "./components/refactor pages/posting";
import EditInformation from "./components/refactor pages/put"
import Header from "./components/navbar"
function App() {
  return (
    <>
      
      <Header/>
      <DeleteUser/>
      <EditInformation/>
      <AddUser/> 
      
    </>
  );
}

export default App;
