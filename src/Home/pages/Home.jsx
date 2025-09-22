import React from "react";
import './style/Home.css'
import MainImage from './img/main-img.png'

export default props =>
    <main className="home-container">
        <section className="gradient-box"></section>
        <section className="section-home-content">
            <section>

            </section>
            <section className="home-content">
                <h1>UMA COMUNIDADE DE LENDAS!</h1>
                <p>Acompanhe os melhores momentos dos campeonatos, fique por dentro das estratégias e decisões dos campeões, e viva a experiência completa do universo de League of Legends. Notícias, análises e entretenimento, tudo em um só lugar.</p>
                <button className="button-content">Conheça</button>
            </section>
            <img src={MainImage} alt="Imagem principal" className="img-home"/>
        </section>
    </main>