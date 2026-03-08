import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { Header, Footer } from './componentes';

function App() {
    const handleSearch = (query) => {
        console.log('Buscando:', query);
        // Aqui você pode implementar a lógica de busca
    };

    return (
        <BrowserRouter>
            <div className="app-container">
                <Header onSearch={handleSearch} />
                <main>
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;