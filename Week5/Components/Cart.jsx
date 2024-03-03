import React,{useState, useEffect} from "react";

const getApi = 'https://fakestoreapi.com/products';
const CartItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () =>{
            const response = await fetch(getApi);
            const data = await response.json();
            setItems(data);
            console.log(items)
        }
        getItems();
    },[]);
    const dataToshow = items.map((item)=>(
        <div className="itemContainer" key={item.id}>
            <div className="itemDetails">
                <div className="itemname">
                    {item.title}
                </div>
                <div className="itemprice">
                    {item.price}
                </div>
                <div className="itemquant">
                    {item.count}
                </div>
            </div>
        </div>
    ));

    return(
        <div>
            {dataToshow}
        </div>
    );
}

export default CartItems
