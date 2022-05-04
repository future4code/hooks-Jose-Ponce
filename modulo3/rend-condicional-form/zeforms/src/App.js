import React from 'react';
import './App.css';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';
import Pagina4 from './components/Pagina4';

class App extends React.Component {
 
  state={
    etapa: 1,
  }

  renderizaEtapa = (evento) => {
    switch (this.state.evento) {
    case 1:
      return  <Pagina1/>;
    
    case 2:
      return  <Pagina2/>;
    
    case 3:
      return  <Pagina3/>;
    
    case 4:
      return <Pagina4/>;
    }

  }
  
  
    irParaProximaEtapa = () => {
  
      this.setState({etapa: +1})
  
    }
  
  
  render()  {

    return  (
      <>


      {this.renderizaEtapa()}
      <button onClick={this.irParaProximaEtapa()}>Próxima Etapa</button>
        
      </>
    )


  }
    
}

export default App;
