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
    }
    )
    return(
        <div>
            <p>
                {items.map(item =>(
                    <li key = {item.id}>{item.title}</li>
                ))}
            </p>
        </div>
    );
}

export default CartItems
