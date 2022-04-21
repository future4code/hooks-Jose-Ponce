import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          // imagem src={miniatura}
          nome="José Guilherme Ponce" 
          descricao="Estudante de Análise e Desenvolvimento de Sistemas e Web Full Stack, com 5 anos de vivência em TI. Conhecimento nas linguagens React, Java Script, HTML, CSS, MySQL, SQL Server, Python e grande desejo em continuar me especializando na área de Desenvolvimento. Me considero uma pessoa de bom relacionamento interpessoal, comunicação e com facilidade para trabalhar em equipe."
        />
        
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/1511/PNG/512/newemailoutlinesymbolinblackcircularbutton_104753.png" 
          // imagem src={miniatura}
          nome="Email: " 
          link="jgponce@gmail.com"
        />
        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/1511/PNG/512/newemailoutlinesymbolinblackcircularbutton_104753.png" 
          // imagem src={miniatura}
          nome="Endereço:" 
          link="R.Voluntários da Patria, 389 - RJ"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://jetfly.com.br/wp-content/uploads/2021/08/jetfly_logo-sem-air-bp-e1627921946641.png" 
          nome="Jetfly" 
          descricao="Assistente de Suporte de Sistemas" 
        />
        
        <CardGrande 
          imagem="https://www.sprink.com.br/wp-content/uploads/2018/03/sprink.png" 
          nome="Sprink" 
          descricao="Assistente de TI" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" 
          texto="Github" 
        />        
      </div>
    </div>
  );
}

export default App;
