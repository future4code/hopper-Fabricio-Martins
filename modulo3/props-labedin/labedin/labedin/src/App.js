import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {



  return (
    <div>
      <div className="App">
        <div className="page-section-container">
          <h2>Dados pessoais</h2>
          <CardGrande
            imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
            nome="Fabricio Martins Da Silva"
            descricao="Oi, eu sou o Fabricio Martins Da Silva. Estou inciando no mercado tecnológico como desenvolvedor fullstack a procura de oportunidade no nivel junior" />
        </div>

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/7168/7168658.png"
          texto="Ver mais" />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/747/747314.png"
          descricao="fabriciomdaislva8@gmail.com" />
      </div><div className="page-section-container">
        <CardPequeno
          imagem="https://www.flaticon.com/br/icone-gratis/endereco-residencial_1239525"
          descricao="Rua Fleming n°84 - São João - Volta Redonda - Rio de Janeiro" />
      </div><div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="CSN - companhia siderugica nacional"
          descricao="Desenvolvendo aplicações com VBA, Excel e power BI para realizar gerenciamento do plano de manuntenção de equipamentos" />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos." />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook" />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter" />
      </div>
    </div>
  );
}

export default App;
