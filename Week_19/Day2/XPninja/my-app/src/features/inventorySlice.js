import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name: "inventory",
    initialState: [], // { id: "", productName: "", quantity: "" } 
    reducers: {
        addProduct(state, action) {
            state.push(action.payload);
        },
        updateQuantity(state, action) {
            const { id, updatedQuantity } = action.payload;

            if (typeof updatedQuantity !== "number" || updatedQuantity < 0) return;
            
            const selectedProduct = state.find(p => p.id === id);
            if (!selectedProduct) return;
            
            selectedProduct.quantity = updatedQuantity;
        },
        removeProduct(state, action) {
            const productIndex = state.findIndex(p => p.id === action.payload);
            if (productIndex !== -1) state.splice(productIndex, 1);
        },
    },
});

export const { addProduct, updateQuantity, removeProduct } = inventorySlice.actions;
export default inventorySlice.reducer;