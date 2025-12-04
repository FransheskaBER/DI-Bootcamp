import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [  
        { id: 1,  name: "Wireless Mouse",          category: "Electronics",   price: 29.99,  availability: "inStock" },
        { id: 2,  name: "Mechanical Keyboard",     category: "Electronics",   price: 79.99,  availability: "outOfStock" },
        { id: 3,  name: "USB-C Charger",           category: "Electronics",   price: 19.99,  availability: "inStock" },
        { id: 4,  name: "Noise-Cancelling Headset",category: "Electronics",   price: 129.99, availability: "inStock" },

        { id: 5,  name: "Cotton T-Shirt",          category: "Clothing",      price: 14.99,  availability: "inStock" },
        { id: 6,  name: "Jeans",                   category: "Clothing",      price: 49.99,  availability: "outOfStock" },
        { id: 7,  name: "Sneakers",                category: "Clothing",      price: 89.99,  availability: "inStock" },
        { id: 8,  name: "Winter Jacket",           category: "Clothing",      price: 119.99, availability: "inStock" },

        { id: 9,  name: "Cooking Pan",             category: "Home",          price: 24.99,  availability: "inStock" },
        { id: 10, name: "Electric Kettle",         category: "Home",          price: 34.99,  availability: "outOfStock" },
        { id: 11, name: "Ceramic Plate Set",       category: "Home",          price: 39.99,  availability: "inStock" },
        { id: 12, name: "Air Purifier",            category: "Home",          price: 149.99, availability: "inStock" },

        { id: 13, name: "Running Shoes",           category: "Sports",        price: 69.99,  availability: "inStock" },
        { id: 14, name: "Yoga Mat",                category: "Sports",        price: 29.99,  availability: "outOfStock" },
        { id: 15, name: "Dumbbell Set",            category: "Sports",        price: 59.99,  availability: "inStock" },
        { id: 16, name: "Tennis Racket",           category: "Sports",        price: 89.99,  availability: "inStock" },

        { id: 17, name: "LED Desk Lamp",           category: "Home",          price: 22.99,  availability: "inStock" },
        { id: 18, name: "Bluetooth Speaker",       category: "Electronics",   price: 49.99,  availability: "outOfStock" },
        { id: 19, name: "Hoodie",                  category: "Clothing",      price: 39.99,  availability: "inStock" },
        { id: 20, name: "Football",                category: "Sports",        price: 19.99,  availability: "inStock" },
    ],
    category: "",
    priceRange: "", // 0$ - 30$
    availability: "",
    sortType: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload;
        },
        setAvailability(state, action) {
            state.availability = action.payload;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        }
    },
});

export const { setCategory, setPriceRange, setAvailability, setSortType } = productsSlice.actions;
export default productsSlice.reducer;