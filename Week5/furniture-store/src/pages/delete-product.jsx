import Navbar from "../Components/navbar";
import Delete from "../Components/delete";

function DeleteProduk() {
    return(
        <>
            <div>
                <Navbar />
                <Delete />
                <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L30,138.7C60,117,120,75,180,96C240,117,300,203,360,245.3C420,288,480,288,540,245.3C600,203,660,117,720,80C780,43,840,53,900,64C960,75,1020,85,1080,85.3C1140,85,1200,75,1260,90.7C1320,107,1380,149,1410,170.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default DeleteProduk