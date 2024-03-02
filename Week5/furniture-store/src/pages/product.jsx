import Navbar from "../Components/navbar"
import ProductList from "../hook/useState";

function Product() {
    return(
        <div>
        <Navbar />
        <ProductList />
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L60,85.3C120,107,240,149,360,170.7C480,192,600,192,720,208C840,224,960,256,1080,261.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        
    )
}

export default Product;