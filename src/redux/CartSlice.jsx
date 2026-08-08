import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

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

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,

  increaseQuantity,

  decreaseQuantity,

  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
