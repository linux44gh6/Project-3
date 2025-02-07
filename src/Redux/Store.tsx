import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import baseApi from "./Api/BaseApi";
import authReducer from './Slice';
import cartSlice from './Features/ProductSlice/cartSlice';
import searchSlice from './Features/ProductSlice/SearchSlice';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistCartConfig = {
  key: 'cart',
  storage,
}
const persistCartReducer = persistReducer(persistCartConfig, cartSlice);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
    cart: persistCartReducer,
    search: searchSlice
  },

  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false, // Necessary for redux-persist
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
