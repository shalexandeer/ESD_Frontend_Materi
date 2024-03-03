import Header from "./header";
import Event from "./event";
const Content = () => {
    return (
        <div class="section1">
            <div class="cart card mt-5">
                <Header />
                <div class="bodyEvent card-body">
                    <Event />
                </div>
            </div>
        </div>
    );
}

export default Content