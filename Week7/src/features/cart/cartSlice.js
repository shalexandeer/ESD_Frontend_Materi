import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        quantity: action.payload.quantity,
      }
     
      const findItem = state.find((item) => item.id === action.payload.id);

      if(findItem){
        findItem.quantity += 1;
      } else {
        state.push(itemToAdd);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    sendOrder: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, sendOrder } = cartSlice.actions;

export default cartSlice.reducer;