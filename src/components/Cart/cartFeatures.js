import { createSlice } from "@reduxjs/toolkit";

// Initial state of the cart is an empty array.
const initialState = [];

// Create a Redux slice for managing the cart.
const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    // Add a product to the cart.
    addProduct(state, action) {
      // Create a new state by adding the new product to the existing state.
      const newState = [...state, action.payload];
      console.log(newState); // Log the new state for debugging.
      return newState;
    },
    
    // Delete a product from the cart based on its image source.
    deleteProduct(state, action) {
      // Create a new state by filtering out the product to be deleted.
      const newState = state.filter(
        (product) => product.imageSrc !== action.payload.src
      );
      return newState;
    },

    // Update the quantity of products in the cart.
    updateQuantityOfProduct(state, action) {
      // Replace the current cart state with the updated cart data.
      return action.payload;
    }
  },
});

// Export the action creators and the reducer.
export const { addProduct, deleteProduct, updateQuantityOfProduct } =
  cartReducer.actions;
export default cartReducer.reducer;
