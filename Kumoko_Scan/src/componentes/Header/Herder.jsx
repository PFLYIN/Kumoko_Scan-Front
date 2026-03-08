import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    };

    return (
        <header className="header">
            <div className="header-logo">
                <span className="kumoko-logo">AAAA</span>
                <h1>Kumoko<span>Scan</span></h1>
            </div>
            
            <form className="barra-pesquisa" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar mangás ou livros..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pesquisa-input"
                />
                <button type="submit" className="pesquisa-btn">Buscar</button>
            </form>
            
            <nav className="header-desktop">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/manga">Mangás</Link></li>
                    <li><Link to="/livros">Livros</Link></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;