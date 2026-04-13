import React, { useState } from 'react';
import api from '../../service/api';
import './CriarManga.css';

function CriarManga() {
  const [nome, setNome] = useState('');
  const [volume, setVolume] = useState('');
  const [capa, setCapa] = useState(null);

  const handleCriarManga = async (e) => {
    e.preventDefault();
    if (!nome || !volume) return alert("Preencha o nome e o volume!");

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('volume', Number(volume));
    
    // Tem que bater exatamente com o nome que está no seu multer do Back-end
    if (capa) {
      formData.append('cover_image', capa); 
    }

    try {
      await api.post('/mangas', formData);
      alert('Mangá cadastrado com sucesso!');
      setNome('');
      setVolume('');
      setCapa(null);
      // Se quiser, depois pode usar o useNavigate do react-router para jogar o usuário pra tela de Mangás aqui!
    } catch (erro) {
      console.error('Erro ao criar mangá:', erro);
      alert('Erro ao cadastrar. Verifique o console.');
    }
  };

  return (
    <div className="container-criar-manga">
      <h2>Cadastrar Novo Mangá</h2>
      
      <form onSubmit={handleCriarManga} className="form-criar-manga">
        <div className="grupo-input">
          <label>Nome do Mangá:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={e => setNome(e.target.value)} 
            placeholder="Ex: Kumo Desu ga, Nani ka?" 
          />
        </div>

        <div className="grupo-input">
          <label>Volume:</label>
          <input 
            type="number" 
            value={volume} 
            onChange={e => setVolume(e.target.value)} 
            placeholder="Ex: 1" 
          />
        </div>

        <div className="grupo-input">
          <label>Capa do Mangá:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={e => setCapa(e.target.files[0])} 
          />
        </div>

        <button type="submit" className="btn-salvar">Salvar Mangá</button>
      </form>
    </div>
  );
}

export default CriarManga;