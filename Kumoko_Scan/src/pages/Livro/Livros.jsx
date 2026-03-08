import React from 'react';
import './Livro.css';
import { CardLivro } from "../../componentes";

function Livros() {
    // Dados de exemplo
    const livros = [
        {
            titulo: 'Livro Exemplo 1',
            imagem: 'https://via.placeholder.com/150',
            descricao: 'Descrição do livro 1.'
        },
        {
            titulo: 'Livro Exemplo 2',
            imagem: 'https://via.placeholder.com/150',
            descricao: 'Descrição do livro 2.'
        }
    ];

    return (
        <div className="livros">
            <h1>Página de Livros</h1>
            <p>Aqui você encontra todos os livros disponíveis.</p>
            <div className="livro-list">
                {livros.map((livro, index) => (
                    <CardLivro
                        key={index}
                        titulo={livro.titulo}
                        imagem={livro.imagem}
                        descricao={livro.descricao}
                    />
                ))}
            </div>
        </div>
    );
}

export default Livros;