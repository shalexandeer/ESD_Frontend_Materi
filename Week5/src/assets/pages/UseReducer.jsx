import { useReducer } from "react";

// Action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Reducer function to handle state transitions
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.id);
    case UPDATE_QUANTITY:
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, id, quantity });
  };

  return (
    <div>
      <h2>UseReducer</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - Quantity: {item.quantity}
            </span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <input
              type='number'
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => addToCart({ id: 1, name: "Product 1", quantity: 1 })}>
        Add Product 1
      </button>
      <button
        onClick={() => addToCart({ id: 2, name: "Product 2", quantity: 1 })}>
        Add Product 2
      </button>
    </div>
  );
}

export default ShoppingCart;
