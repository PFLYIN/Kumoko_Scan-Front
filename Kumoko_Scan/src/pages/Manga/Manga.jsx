import React from 'react';
import './Manga.css';
import { CardManga } from '../../componentes';

// import images from assets so Vite can process them
import MatoSlave from '../../assets/manga/Mato_Seihei_no_Slave.jpg';
import MakeHeroine from '../../assets/manga/Make_Heroine_o_Katasetai!!.jpg';
import BlueUrsus from '../../assets/manga/Blue_Ursus.jpg';
import Bouken from '../../assets/manga/Boukensha_ni_Naritai_to_Miyako_ni.jpg';
import Dandadan from '../../assets/manga/Dandadan.jpg';
import Haimiya from '../../assets/manga/Haimiya-senpai wa_Kowakute_Kawaii.jpg';
import IsekaiCheat from '../../assets/manga/Isekai_de_Cheat_Skill_wo_Te_ni.jpg';
import MariaDanzai from '../../assets/manga/Maria_no_Danzai.jpg';
import TenseiDragon from '../../assets/manga/Tensei_Shitara_Dragon_no_Tamago_datta.jpg';
import YuGiOh from '../../assets/manga/Yu☆Gi☆Oh.jpg';

function Manga() {
    const mangas = [
        {
            titulo: 'Mato Seihei no Slave',
            imagem: MatoSlave,
            descricao: 'Aventura dos piratas.'
        },
        {
            titulo: 'Make Heroine o Katsetai!!',
            imagem: MakeHeroine,
            descricao: 'História de ninjas.'
        },
        {
            titulo: 'Blue Ursus',
            imagem: BlueUrsus,
            descricao: 'Mistério sobrenatural e sideral.'
        },
        {
            titulo: 'Boukensha ni Naritai to Miyako ni',
            imagem: Bouken,
            descricao: 'Jornada de uma garota rumo à cidade dos aventureiros.'
        },
        {
            titulo: 'Dandadan',
            imagem: Dandadan,
            descricao: 'Aventura sobrenatural e comédia.'
        },
        {
            titulo: 'Haimiya-senpai wa Kowakute Kawaii',
            imagem: Haimiya,
            descricao: 'Comédia romântica escolar estranha.'
        },
        {
            titulo: 'Isekai de Cheat Skill wo Te ni',
            imagem: IsekaiCheat,
            descricao: 'Um estudante ganha habilidades em outro mundo.'
        },
        {
            titulo: 'Maria no Danzai',
            imagem: MariaDanzai,
            descricao: 'Drama sombrio e suspense.'
        },
        {
            titulo: 'Tensei Shitara Dragon no Tamago datta',
            imagem: TenseiDragon,
            descricao: 'Reencarnação como ovo de dragão.'
        },
        {
            titulo: 'Yu☆Gi☆Oh',
            imagem: YuGiOh,
            descricao: 'Clássico dos jogos de cartas e aventura.'
        }
    ];

    return (
        <div className="manga">
            <h1>Página de Mangás</h1>
            <p>Aqui você encontra todos os mangás disponíveis.</p>
            <div className="manga-list">
                {mangas.map((manga, index) => (
                    <CardManga
                        key={index}
                        titulo={manga.titulo}
                        imagem={manga.imagem}
                        descricao={manga.descricao}
                    />
                ))}
            </div>
        </div>
    );
}

export default Manga;