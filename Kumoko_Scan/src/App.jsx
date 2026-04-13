import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Home from './pages/Home/Home';
import { Manga, CriarManga, Capitulos } from './pages/Manga';
import { Livro, CriarLivro } from './pages/Livro';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Agora o React sabe exatamente quem são esses caras! */}
        <Route path="/mangas" element={<Manga />} />
        <Route path="/manga/novo" element={<CriarManga />} />
        <Route path="/manga/:mangaId/capitulos" element={<Capitulos />} />
        <Route path="/livros" element={<Livro />} />
        <Route path="/livro/novo" element={<CriarLivro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;