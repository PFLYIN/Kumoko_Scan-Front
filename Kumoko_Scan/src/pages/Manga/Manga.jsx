import React from 'react';
import './Manga.css';
import { CardManga } from '../../componentes';

function Manga() {
    // Dados de exemplo
    const mangas = [
        {
            titulo: 'One Piece',
            imagem: 'https://via.placeholder.com/150',
            descricao: 'Aventura dos piratas.'
        },
        {
            titulo: 'Naruto',
            imagem: 'https://via.placeholder.com/150',
            descricao: 'História de ninjas.'
        }
    ];

    return (
        <div className="manga">
            <h1>Página de Mangás</h1>
            <p>Aqui você encontra todos os mangás disponíveis.</p>
            <div className="manga-list">
                {mangas.map((manga, index) => (
                    <CardManga
                        key={index}
                        titulo={manga.titulo}
                        imagem={manga.imagem}
                        descricao={manga.descricao}
                    />
                ))}
            </div>
        </div>
    );
}

export default Manga;