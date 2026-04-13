import { useState, useEffect } from 'react';
import api from './service/api'; 

function Painel() {
  const [abaAtiva, setAbaAtiva] = useState('mangas'); // 'mangas' ou 'livros'
  const [mangaSelecionado, setMangaSelecionado] = useState(null); 

  const [mangas, setMangas] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  const [novoNome, setNovoNome] = useState('');
  const [novoVolume, setNovoVolume] = useState('');
  const [novaCapa, setNovaCapa] = useState(null); 
  const [numCap, setNumCap] = useState('');
  const [tituloCap, setTituloCap] = useState('');

  const [livros, setLivros] = useState([]);
  const [novoNomeLivro, setNovoNomeLivro] = useState('');
  const [novaCapaLivro, setNovaCapaLivro] = useState(null);

  const buscarMangas = async () => {
    const res = await api.get('/mangas');
    setMangas(res.data.dados || res.data); // Previne erro caso a estrutura mude
  };

  const buscarLivros = async () => {
    try {
      const res = await api.get('/livros');
      setLivros(res.data);
    } catch (err) { console.error("Erro ao buscar livros"); }
  };

  useEffect(() => { 
    buscarMangas(); 
    buscarLivros();
  }, []);

  const abrirManga = async (manga) => {
    try {
      const res = await api.get(`/capitulos/manga/${manga.id}`);
      setCapitulos(res.data);
      setMangaSelecionado(manga);
    } catch (err) { alert("Erro ao carregar capítulos."); }
  };

  const handleCriarManga = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nome', novoNome);
    formData.append('volume', Number(novoVolume));
    if (novaCapa) formData.append('cover_image', novaCapa);

    try {
      await api.post('/mangas', formData);
      setNovoNome(''); setNovoVolume(''); setNovaCapa(null);
      buscarMangas(); 
    } catch (erro) { alert('Erro ao cadastrar mangá.'); }
  };

  const handleCriarCapitulo = async (e) => {
    e.preventDefault();
    try {
      await api.post('/capitulos', { manga_id: mangaSelecionado.id, numero: Number(numCap), titulo: tituloCap });
      setNumCap(''); setTituloCap('');
      abrirManga(mangaSelecionado); 
    } catch (err) { alert("Erro ao criar capítulo."); }
  };

  // --- FUNÇÕES DE LIVRO ---
  const handleCriarLivro = async (e) => {
    e.preventDefault();
    if (!novoNomeLivro) return alert("Preencha o nome do livro!");

    const formData = new FormData();
    formData.append('nome', novoNomeLivro);
    if (novaCapaLivro) formData.append('cover_image', novaCapaLivro);

    try {
      await api.post('/livros', formData);
      setNovoNomeLivro(''); setNovaCapaLivro(null);
      buscarLivros(); 
      alert("Livro cadastrado com sucesso!");
    } catch (erro) { alert('Erro ao cadastrar livro.'); }
  };


  // --- TELA 2: LENDO UM MANGÁ (CAPÍTULOS) ---
  if (mangaSelecionado) {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <button onClick={() => setMangaSelecionado(null)} style={{ marginBottom: '20px', cursor: 'pointer', padding: '8px', backgroundColor: '#333', color: 'white', borderRadius: '4px', border: 'none' }}>⬅ Voltar ao Catálogo</button>
        <h1>Capítulos de: {mangaSelecionado.nome}</h1>
        
        <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <form onSubmit={handleCriarCapitulo}>
            <input type="number" placeholder="Nº Capítulo" value={numCap} onChange={e => setNumCap(e.target.value)} style={{ marginRight: '10px', padding: '8px' }} />
            <input type="text" placeholder="Título" value={tituloCap} onChange={e => setTituloCap(e.target.value)} style={{ marginRight: '10px', padding: '8px' }} />
            <button type="submit" style={{ padding: '8px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}>Criar Capítulo</button>
          </form>
        </div>

        <ul style={{ padding: 0 }}>
          {capitulos.map(cap => (
            <li key={cap.id} style={{ padding: '15px', borderBottom: '1px solid #ddd', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: '10px', borderRadius: '8px' }}>
              <div><strong>Capítulo {cap.numero}</strong> - {cap.titulo || 'Sem título'}</div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', border: '1px dashed #ccc', padding: '10px', borderRadius: '8px' }}>
                <div>
                  <label style={{ fontSize: '0.8em', fontWeight: 'bold', display: 'block' }}>1. Enviar Página:</label>
                  <input type="file" accept="image/*" onChange={async (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const formData = new FormData();
                    formData.append('page_image', file); 
                    try {
                      await api.post(`/page/${mangaSelecionado.id}/${cap.id}/1`, formData);
                      alert('Página salva!');
                    } catch (err) { alert('Erro no upload.'); }
                  }} />
                </div>
                <button onClick={async () => {
                  try {
                    const res = await api.get(`/page/${cap.id}`);
                    if (res.data?.imagem_url) {
                      const path = res.data.imagem_url.replace(/\\/g, '/').split('uploads/')[1];
                      window.open(`http://localhost:3000/files/${path}`, '_blank');
                    } else { alert('Capítulo vazio!'); }
                  } catch (err) { alert('Erro ao ler.'); }
                }} style={{ padding: '10px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                  📖 Ler
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // --- TELA 1: CATÁLOGOS (COM ABAS) ---
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Painel da Kumoko Scan</h1>
      
      {/* MENU DE ABAS */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => setAbaAtiva('mangas')} 
          style={{ padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold', border: 'none', borderRadius: '4px', backgroundColor: abaAtiva === 'mangas' ? '#3b82f6' : '#e5e7eb', color: abaAtiva === 'mangas' ? 'white' : 'black' }}>
          📚 Mangás
        </button>
        <button 
          onClick={() => setAbaAtiva('livros')} 
          style={{ padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold', border: 'none', borderRadius: '4px', backgroundColor: abaAtiva === 'livros' ? '#8b5cf6' : '#e5e7eb', color: abaAtiva === 'livros' ? 'white' : 'black' }}>
          📖 Livros
        </button>
      </div>
      <hr style={{ marginBottom: '30px' }}/>

      {/* ABA: MANGÁS */}
      {abaAtiva === 'mangas' && (
        <div>
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', marginBottom: '30px', display: 'inline-block' }}>
            <h3>Cadastrar Novo Mangá</h3>
            <form onSubmit={handleCriarManga} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input type="text" placeholder="Nome" value={novoNome} onChange={e => setNovoNome(e.target.value)} style={{ padding: '8px' }} />
              <input type="number" placeholder="Vol." value={novoVolume} onChange={e => setNovoVolume(e.target.value)} style={{ padding: '8px', width: '60px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.7em', fontWeight: 'bold' }}>Capa:</label>
                <input type="file" accept="image/*" onChange={e => setNovaCapa(e.target.files[0])} />
              </div>
              <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Salvar Mangá</button>
            </form>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {mangas.map(manga => (
              <div key={manga.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
                {manga.capa_url ? (
                  <img src={`http://localhost:3000/files/${manga.capa_url.replace(/\\/g, '/').split('uploads/')[1]}`} alt="Capa" style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }} />
                ) : ( <div style={{ height: '280px', backgroundColor: '#eee', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sem Capa</div> )}
                <h3>{manga.nome}</h3>
                <button onClick={() => abrirManga(manga)} style={{ width: '100%', padding: '8px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>📂 Ver Capítulos</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABA: LIVROS */}
      {abaAtiva === 'livros' && (
        <div>
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', marginBottom: '30px', display: 'inline-block' }}>
            <h3>Cadastrar Novo Livro</h3>
            <form onSubmit={handleCriarLivro} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input type="text" placeholder="Nome do Livro" value={novoNomeLivro} onChange={e => setNovoNomeLivro(e.target.value)} style={{ padding: '8px', width: '250px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.7em', fontWeight: 'bold' }}>Capa do Livro:</label>
                <input type="file" accept="image/*" onChange={e => setNovaCapaLivro(e.target.files[0])} />
              </div>
              <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Salvar Livro</button>
            </form>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {livros.map(livro => (
              <div key={livro.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
                {livro.capa_url ? (
                  <img src={`http://localhost:3000/files/${livro.capa_url.replace(/\\/g, '/').split('uploads/')[1]}`} alt="Capa" style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }} />
                ) : ( <div style={{ height: '280px', backgroundColor: '#eee', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sem Capa</div> )}
                <h3 style={{ color: '#8b5cf6' }}>{livro.nome}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Painel;