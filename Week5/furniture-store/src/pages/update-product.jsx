import Update from "../Components/update";
import Navbar from "../Components/navbar";

function UpdateProduct(){
    return (
        <>
            <div>
                <Navbar />
                <Update />
                <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,74.7C240,117,300,203,360,240C420,277,480,267,540,240C600,213,660,171,720,160C780,149,840,171,900,160C960,149,1020,107,1080,128C1140,149,1200,235,1260,240C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default UpdateProduct