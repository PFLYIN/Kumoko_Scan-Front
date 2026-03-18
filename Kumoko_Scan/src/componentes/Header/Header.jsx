import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f111a]/70 backdrop-blur-lg border-b border-indigo-500/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        
        {/* Logo Delicada */}
        <div className="flex items-center gap-3 shrink-0">
          <h1 className="text-xl tracking-[0.2em] text-zinc-100 font-light">
            KUMOKO<span className="text-indigo-400 font-medium ml-1">SCAN</span>
          </h1>
        </div>

        {/* Barra de Pesquisa "Vidro Fumê" */}
        <div className="flex-1 max-w-lg relative group">
          <input 
            type="text" 
            placeholder="O que você quer ler hoje?" 
            className="w-full bg-white/5 border border-white/5 rounded-full px-6 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 outline-none focus:border-indigo-400/50 focus:bg-white/10 transition-all duration-500"
          />
          {/* Botão de busca transformado em um ícone sutil ou texto fino */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">
            BUSCAR
          </button>
        </div>

        {/* Menu Minimalista */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-xs tracking-widest text-zinc-400 font-medium">
            <li className="hover:text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <Link to="/">INÍCIO</Link>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <Link to="/manga">MANGÁ</Link>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <Link to="/livros">LIVROS</Link>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <Link to="#">PROJETOS</Link>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <Link to="#">COMUNIDADE</Link>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;