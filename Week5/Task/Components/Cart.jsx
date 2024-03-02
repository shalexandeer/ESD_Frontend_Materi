import React,{useState, useEffect} from "react";

const getApi = 'https://fakestoreapi.com/products';
const allItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () =>{
            const datas = await fetch(getApi);
            const data = await Response.json();
            setItems(data);
        }
    }
    )
}

