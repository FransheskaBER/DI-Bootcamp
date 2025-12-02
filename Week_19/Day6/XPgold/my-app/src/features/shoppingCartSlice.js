import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, title: "Wireless Headphones", price: 80, inStock: 12 },
        { id: 2, title: "Bluetooth Speaker", price: 49.99, inStock: 20 },
        { id: 3, title: "Mechanical Keyboard", price: 99.00, inStock: 8 },
        { id: 4, title: "USB-C Charger 30W", price: 24.50, inStock: 30 },
        { id: 5, title: "Ergonomic Mouse", price: 39.95, inStock: 15 },
        { id: 6, title: "4K Monitor 27\"", price: 329.00, inStock: 5 },
        { id: 7, title: "Laptop Stand", price: 29.99, inStock: 18 },
        { id: 8, title: "Portable SSD 1TB", price: 119.99, inStock: 10 },
        { id: 9, title: "Noise-Cancelling Earbuds", price: 59.99, inStock: 25 },
        { id: 10, title: "Smart LED Light Strip", price: 22.99, inStock: 40 }
    ],
    cart: [], // productId, name, and Quantity
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, name, quantity } = action.payload;

            const existingCartItem = state.cart.find(item => item.id === id);
            const selectedProduct = state.products.find(p => p.id === id);

            if (!selectedProduct) return;

            if (existingCartItem) {
                existingCartItem.quantity += Number(quantity);
            } else {
                state.cart.push({ id, name, quantity });
            }

            selectedProduct.inStock -= Number(quantity);
        },
    },
});

const selectShoppingCart = state => state.shoppingCart;

export const selectAvailableProducts =  createSelector(
    [selectShoppingCart],
    shoppingCart => shoppingCart.products.filter(product => product.inStock > 0)
);

export const selectCartItems = createSelector(
    [selectShoppingCart],
    shoppingCart => shoppingCart.cart
);

export const calculateTotalPrice = createSelector(
    [selectShoppingCart],
    (shoppingCart) => {
        return shoppingCart.cart.reduce((total, cartItem) => {
            const product = shoppingCart.products.find(p => p.id === cartItem.id);
            if (!product) return total;
            return total + Number(product.price) * Number(cartItem.quantity);
        }, 0);
    }
);

export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

