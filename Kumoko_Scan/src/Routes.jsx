import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Manga, Livros, Auth } from './pages';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/login" element={<Auth />} />
        </Routes>
    );
}

export default AppRoutes;