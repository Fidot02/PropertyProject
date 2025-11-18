import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/http"; 
import "../assets/css/homesearch.css";


export default function PropertySearch() {
const [location, setLocation] = useState("");
const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");
const navigate = useNavigate();

const handleSearch = async (e) => {
e.preventDefault();


try {
await axios.get("/properties/search", {
params: {
location: location || undefined,
minPrice: minPrice || undefined,
maxPrice: maxPrice || undefined,
},
});
navigate(`/results?location=${location}&min=${minPrice}&max=${maxPrice}`);
} catch (error) {
console.error(error);
}
};

return (
<div className="search-container">
<form className="search-box" onSubmit={handleSearch}>
<input
type="text"
placeholder="Search location..."
value={location}
onChange={(e) => setLocation(e.target.value)}
className="input-field"
/>


<div className="price-row">
<input
type="number"
placeholder="Min Price"
value={minPrice}
onChange={(e) => setMinPrice(e.target.value)}
className="input-field"
/>


<input
type="number"
placeholder="Max Price"
value={maxPrice}
onChange={(e) => setMaxPrice(e.target.value)}
className="input-field"
/>
</div>


<button type="submit" className="search-btn">
Search
</button>
</form>
</div>
);
}