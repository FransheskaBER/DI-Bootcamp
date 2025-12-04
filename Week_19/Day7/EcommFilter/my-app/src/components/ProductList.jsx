import { selectAllProducts, selectFilteredProducts, selectSortedProducts } from "../features/products/productsSelector";
import { setCategory, setAvailability, setPriceRange, setSortType } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function ProductList() {
    const [filterForm, setFilterForm] = useState({ category: "", filteredPrice: "", availability: "" });
    const [sort, setSort] = useState("");
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    const filteredProducts = useSelector(selectFilteredProducts);
    const sortedProducts = useSelector(selectSortedProducts);

    function handleChange(e) {
        const { name, value } = e.target;
        setFilterForm(prev => ({ ...prev, [name]: value }));
    }

    function handleFilterSubmit(e) {
        e.preventDefault();
        dispatch(setCategory(filterForm.category));
        dispatch(setAvailability(filterForm.availability));
        dispatch(setPriceRange(filterForm.filteredPrice));
    }

    function handleSort(e) {
        const value = e.target.value;
        setSort(value);
        dispatch(setSortType(value));
    }

    let displayedProducts = allProducts;
    if (filteredProducts) displayedProducts = filteredProducts;
    if (sortedProducts) displayedProducts = sortedProducts;


    return (
        <>
        <h1>E-Commerce Product Filter and Sort</h1>
        <form onSubmit={handleFilterSubmit}>
            <label>Filter Products: </label>
            <select name="category" value={filterForm.category} onChange={handleChange}>
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
                <option value="Sports">Sports</option>
            </select>
            <select name="filteredPrice" value={filterForm.filteredPrice} onChange={handleChange}>
                <option value="">All Prices</option>
                <option value="Less than 50$">Less than 50$</option>
                <option value="50$ - 100$">50$ - 100$</option>
                <option value="More than 100$">More than 100$</option>
            </select>
            <select name="availability" value={filterForm.availability} onChange={handleChange}>
                <option value="">All Availability</option>
                <option value="inStock">In stock</option>
                <option value="outOfStock">Out of stock</option>
            </select>
            <button type="submit">Apply Filter</button>
        </form>
        <div>
            <label>Sort Products: </label>
            <select value={sort} onChange={handleSort}>
                <option value="">All Products</option>
                <option value="By name A-Z">By name A-Z</option>
                <option value="By name Z-A">By name Z-A</option>
                <option value="Lowest price first">Lowest price first</option>
                <option value="Highest price first">Highest price first</option>
                <option value="In stock first">In stock first</option>
                <option value="Out of stock first">Out of stock first</option>
            </select>
        </div>
        <div>
            <h2 style={{ textAlign: "center" }}>Products</h2>
            
            <table className="table">
                <thead>
                <tr className="tableHead">
                    <td>ID</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td>Availability</td>
                </tr>
                </thead>
                <tbody>
                {displayedProducts && displayedProducts.map(p => (
                <tr key={p.id} className="tableProducts">
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.category}</td>
                    <td>{p.price}</td>
                    <td>{p.availability}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    );
}