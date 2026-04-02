import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CriarManga() {
  const [nome, setNome] = useState('');
  const [volume, setVolume] = useState('');
  const [erro, setErro] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      // Aqui o React faz o papel do Postman!
      const resposta = await fetch('http://localhost:3000/mangas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          nome: nome, 
          volume: Number(volume) 
        })
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert('Mangá criado com sucesso! ID: ' + dados.id);
        // O redirecionamento estilo MangaDex acontece aqui:
        // navigate(`/manga/${dados.id}/painel`);
      } else {
        setErro(dados.error || 'Erro ao criar o mangá.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] text-zinc-200 py-20 px-6 flex justify-center">
      <div className="w-full max-w-xl bg-[#0f111a]/80 backdrop-blur-md border border-indigo-500/10 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-light tracking-[0.2em] text-white mb-6 uppercase border-b border-indigo-500/20 pb-4">
          Novo <span className="text-indigo-400 font-medium">Projeto</span>
        </h2>

        {erro && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {erro}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              Título da Obra
            </label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Kumo Desu ga, Nani ka?" 
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-indigo-400/50 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              Volume Inicial
            </label>
            <input 
              type="number" 
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Ex: 1" 
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-indigo-400/50 transition-all"
              required
            />
          </div>

          <button 
            type="submit" 
            className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-medium tracking-widest text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            CRIAR CATÁLOGO
          </button>
        </form>
      </div>
    </main>
  );
}

export default CriarManga;