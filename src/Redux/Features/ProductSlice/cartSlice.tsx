import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  _id: string;
  title: string;
  price: number;
  totalQuantity: number;
};

type CartState = {
  items: TCartItem[];
  totalQuantity: number;
};

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<TCartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.totalQuantity++;
      } else {
        state.items.push({ ...newItem, totalQuantity: 1 });
      }
      state.totalQuantity++;
    },
    clearCart:(state)=>{
        state.items=[]
        state.totalQuantity=0
    }
  },
});

export const { addItemToCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
