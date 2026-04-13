import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import './Manga.css';

function Manga() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const buscarMangas = async () => {
      try {
        const res = await api.get('/mangas');
        setMangas(res.data.dados || res.data);
      } catch (error) {
        console.error("Erro ao buscar catálogo:", error);
      }
    };
    buscarMangas();
  }, []);

  return (
    <div className="container-catalogo">
      <div className="catalog-header">
        <div>
          <h2>Catálogo de Mangás</h2>
          <p className="catalog-subtitle">Explore sua biblioteca de mangás e gerencie capítulos de forma rápida.</p>
        </div>

        <Link to="/manga/novo" className="btn-acao">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Criar Mangá
        </Link>
      </div>

      <div className="grid-mangas">
        {mangas.map(manga => (
          <div key={manga.id} className="card-manga">
            <div className="card-image-wrap">
              {manga.capa_url ? (
                <img 
                  src={`http://localhost:3000/files/${manga.capa_url.replace(/\\/g, '/').split('uploads/')[1]}`} 
                  alt={`Capa ${manga.nome}`} 
                  className="img-capa"
                />
              ) : (
                <div className="sem-capa">Sem Capa</div>
              )}
            </div>

            <div className="card-content">
              <div>
                <h3>{manga.nome}</h3>
                {manga.volume && <span className="card-badge">Vol. {manga.volume}</span>}
              </div>
              <Link to={`/manga/${manga.id}/capitulos`} className="btn-abrir">
                📂 Ver Capítulos
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manga;