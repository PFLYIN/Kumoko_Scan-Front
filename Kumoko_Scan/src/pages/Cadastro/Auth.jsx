import React, { useState } from 'react';
import './Auth.css';

function Auth() {
  // Controla qual aba está ativa ('login' ou 'register')
  const [activeTab, setActiveTab] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui entrará a lógica do seu back-end futuramente!
    console.log(`Enviando formulário de ${activeTab}`);
  };

  return (
    <main className="auth-main">
      <div className="auth-wrapper">
        
        {/* Lado Esquerdo - Boas-vindas */}
        <section className="auth-left">
          <div className="brand">
            {/* Se tiver a logo em imagem, coloque o import aqui. Por enquanto, usei texto elegante */}
            <h1 className="logo-text">
              KUMOKO<span>SCAN</span>
            </h1>
          </div>
          <header className="welcome">
            <h2>Bem-vindo de volta</h2>
            <p>Acesse sua conta para salvar suas obras favoritas, acompanhar seus capítulos e interagir com a comunidade.</p>
          </header>
        </section>

        {/* Lado Direito - O Card de Login/Cadastro */}
        <section className="auth-right">
          <div className="auth-card">
            
            {/* Abas de Navegação */}
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'login' ? 'is-active' : ''}`} 
                onClick={() => setActiveTab('login')}
                type="button"
              >
                Entrar
              </button>
              <button 
                className={`tab-btn ${activeTab === 'register' ? 'is-active' : ''}`} 
                onClick={() => setActiveTab('register')}
                type="button"
              >
                Cadastrar
              </button>
            </div>

            {/* CONTEÚDO DA ABA LOGIN */}
            {activeTab === 'login' && (
              <div className="tab-panel">
                <h3 className="card-title">Acessar Conta</h3>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <input type="email" name="email" placeholder="E-mail" required />
                  </div>
                  <div className="field">
                    <input type="password" name="senha" placeholder="Senha" required />
                  </div>
                  <button type="submit" className="btn-primary">Entrar</button>
                </form>
              </div>
            )}

            {/* CONTEÚDO DA ABA CADASTRO */}
            {activeTab === 'register' && (
              <div className="tab-panel">
                <h3 className="card-title">Criar nova conta</h3>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <input type="text" name="nome" placeholder="Nome de usuário" required />
                  </div>
                  <div className="field">
                    <input type="email" name="email" placeholder="E-mail" required />
                  </div>
                  <div className="field">
                    <input type="password" name="senha" placeholder="Senha" required />
                  </div>
                  <div className="field">
                    <input type="password" name="confirmar_senha" placeholder="Confirmar senha" required />
                  </div>
                  <button type="submit" className="btn-primary">Cadastrar</button>
                </form>
              </div>
            )}

            {/* Divisor e Botão do Google (Fica fora dos forms para aparecer em ambos) */}
            <div className="auth-separator"><span>ou</span></div>
            
            <button type="button" className="google-btn">
              <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google Logo" />
              <span>Continuar com o Google</span>
            </button>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Auth;