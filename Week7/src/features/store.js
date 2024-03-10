import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/todoSlice'
import cartReducer from './cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

// accept only one parameter, which is an object which called ConfigureStoreOptions.
// ConfigureStoreOptions has several attrributes, such as reducer, middleware, devTools, preloadedState, enhancers
// and its optional to use it!

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  todos: todoReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)

