import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/kumoko_logo.png";


function Header({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="kumoko_logo.png" />
                </div>
  <nav className="main-nav">

<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/">Mangás</Link></li>
<li><Link to="/">Livros</Link></li>
<li><Link to="/">Projetos</Link></li>
<li><Link to="/">Sobre</Link></li>
<li><Link to="/">Contato</Link></li>
</ul>

<div className="search-box">
<span>Search</span>
<i className="fas fa-search"></i>
</div>

<button className="donate-btn">Donate</button>

</nav>
            </div>
        </header>
    );
}

export default Header;