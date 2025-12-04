import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = state => state.products;
const selectPriceRange = state => state.priceRange;
const selectCategory = state => state.category;
const selectAvailability = state => state.availability;
const selectSortType = state => state.sortType;

const matchedPrices = (price, filteredPrice) => {
    switch (filteredPrice) {
        case "Less than 50$": return price < 50;
        case "50$ - 100$": return price >= 50 && price <= 100;
        case "More than 100$": return price > 100;
        default: return true;
    }
};

export const selectFilteredProducts = createSelector(
    [selectAllProducts, selectPriceRange, selectCategory, selectAvailability],
    (products, priceRange, category, availability) => 
        products.filter(p => 
            (!priceRange || matchedPrices(p.price, priceRange)) &&
            (!category || p.category === category) &&
            (!availability || p.availability === availability)
        )
);

export const selectSortedProducts = createSelector(
    [selectFilteredProducts, selectSortType],
    (products, sortType) => {
        switch (sortType) {
        case "By name A-Z": return products.toSorted((a, b) => a.name.localeCompare(b.name));
        case "By name Z-A": return products.toSorted((a, b) => b.name.localeCompare(a.name));
        case "Lowest price first": return products.toSorted((a, b) => a.price - b.price);
        case "Highest price first": return products.toSorted((a, b) => b.price - a.price);
        case "In stock first": return products.toSorted((a, b) => a.availability.localeCompare(b.availability));
        case "Out of stock first": return products.toSorted((a, b) => b.availability.localeCompare(a.availability));
        default: return products;
        }
    }
);

