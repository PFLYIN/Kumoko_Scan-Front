import React from 'react';
import './Home.css';
import { Header } from "../../componentes";
import { Footer } from "../../componentes";
import destaque from "../../assets/imagentest2.jpg";
import card1 from "../../assets/imagentest1.jpg";

function Home() {
    return (
        
         <main className='main-content'>
            
<section className='hero-section' style={{ backgroundImage: `url(${destaque})` }}>
                <div className='hero-overlay'></div>
                <div className='hero-content'>
                     <h1>Trazendo o mundo para você, um cápitulo por vez</h1>
                      <a href="#" className="about-btn">SOBRE NÓS <i className="fas fa-arrow-right"></i></a>
                </div>
            </section>

            <section className='card-section'>
                <div className='card card-1'>
                    <div className='card-overlay'></div>
                       <img src={card1} alt="imagentest1.jpg"/>
                    <div className='card-content'>
                        <h3>ABOUT US</h3>
                    </div>
                </div>
                <div className='card card-2'>
                    <div className='card-overlay'></div>
                        <img src={card1} alt="imagentest1.jpg"/>
                    <div className='card-content'>
                        <h3>OUR TEAM</h3>
                    </div> 
                </div>
                <div className='card card-3'>
                    <div className='card-overlay'></div>
                        <img src={card1} alt="imagentest1.jpg"/>
                    <div className='card-content'>
                        <h3>PROJECTS</h3>
                    </div> 
                </div>
                <div className='card card-4'>
                    <div className='card-overlay'></div>
                        <img src={card1} alt="imagentest1.jpg"/>
                    <div className='card-content'>
                        <h3>GET INVOLVED</h3>
                    </div> 
                </div>
            </section>

        </main>

    );
};

export default Home;