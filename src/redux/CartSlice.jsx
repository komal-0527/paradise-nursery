import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (!exists) {
        state.items.push({
          ...action.payload,

          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (product) => product.id !== action.payload.id,
          );
        }
      }
    },
  },
});

export const {
  addItem,

  removeItem,

  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
