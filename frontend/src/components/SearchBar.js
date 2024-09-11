import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { search$ } from '../state';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    // Debouncing the search input
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            search$.next(searchTerm);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container mt-2">
            <div className="dropdown w-100" style={{zIndex:"5"}}>
                <input
                    type="text"
                    className="form-control"
                    id="searchBar"
                    placeholder="Try saree, kurti or Search by Product Code"
                    onInput={handleInputChange}
                    data-bs-toggle="dropdown"
                />
                <div className="dropdown-menu w-100" aria-labelledby="searchBar">
                    <h5 className="text-muted ms-2">Popular Searches</h5>
                    <Link to='/saree' className="btn btn-outline-secondary rounded-pill m-2">Saree</Link>
                    <Link to='/pants' className="btn btn-outline-secondary rounded-pill m-2">Pants</Link>
                    <Link to='/kurtas' className="btn btn-outline-secondary rounded-pill m-2">Kurtas</Link>
                    <Link to='/tops' className="btn btn-outline-secondary rounded-pill m-2">Tops</Link>
                    <Link to='/shirts' className="btn btn-outline-secondary rounded-pill m-2">Shirts</Link>
                    <Link to='/toys' className="btn btn-outline-secondary rounded-pill m-2">Toys</Link>
                    <Link to='/frocks' className="btn btn-outline-secondary rounded-pill m-2">Frocks</Link>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;