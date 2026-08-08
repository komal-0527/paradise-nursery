import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const exist = state.items.find((item) => item.id === action.payload.id);

      if (!exist) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increase: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item) {
        item.quantity++;
      }
    },

    decrease: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;

export default cartSlice.reducer;
