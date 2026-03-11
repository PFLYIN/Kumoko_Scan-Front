import React from 'react';
import './Home.css';
import { Header } from "../../componentes";
import { Footer } from "../../componentes";
import destaque from "../../assets/imagentest2.jpg";

function Home() {
    return (
         <main className='main-content'>
            <aside className='social-sidebar'>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-discord"></i></a>
            </aside>
            <section className='hero-section'>
                <div className='hero-overlay'></div>
                <img src={destaque} alt="imagentest2.jpg"/>
                <div className='hero-content'>
                     <h1>Trazendo o mundo para você, um cápitulo por vez</h1>
                     
                </div>
            </section>
         </main>
    );
}

export default Home;