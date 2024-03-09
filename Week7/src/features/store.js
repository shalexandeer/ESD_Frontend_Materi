import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/todoSlice'
import cartReducer from './cart/cartSlice'

// accept only one parameter, which is an object which called ConfigureStoreOptions.
// ConfigureStoreOptions has several attrributes, such as reducer, middleware, devTools, preloadedState, enhancers
// and its optional to use it!
export default configureStore({
  reducer: {
    // reducer attribute is mandatory option related to selector
    todos: todoReducer,
    cart: cartReducer,
  },
  devTools: true, // the default value is attribute
})

