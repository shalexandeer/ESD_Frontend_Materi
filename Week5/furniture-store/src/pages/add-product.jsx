import Navbar from "../Components/navbar"
import Tambahproduk from "../Components/add"

function addproduk() {
    return(
        <div>
            <Navbar />
            <Tambahproduk />
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L48,250.7C96,245,192,235,288,197.3C384,160,480,96,576,74.7C672,53,768,75,864,117.3C960,160,1056,224,1152,208C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default addproduk