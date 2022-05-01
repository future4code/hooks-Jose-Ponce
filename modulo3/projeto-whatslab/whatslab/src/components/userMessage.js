import React from 'react'
import styled from 'styled-components'

// FALTA DEIXAR O NOME DO USUARIO EM NEGRITO E O TEXTO TODA VEZ QUE APERTAR ENVIAR



const ContainerCentral = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;

`
const ContainerAgrupado = styled.div`

    max-width: 600px;
    height: 100vh;
    border: 1px solid black;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;

    

`
const UsuarioMensagem = styled.div`
    display:flex;
    .inputNome{
        /* font-weight: bold; */
    }
    .inputMensagem{
    flex: 1 1 0%;
}

`
const HistoricoMensagem = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
    
    .listaMensagem.nome{
        font-weight: bold;

    }
`



//AQUI VAI SER O STYLED COMPONENTS

class UserMessage extends React.Component {
state = {
listaMensagem:[{
    nome: "WhatsLab",
    mensagem: "Sua mensagem aparecerá aqui em baixo!"
}],
    valorInputNome :"",
    valorInputMensagem:""
}

adicionaMensagem = () => {
    const  novaMensagem = {
        nome: this.state.valorInputNome,
        mensagem: this.state.valorInputMensagem
    }
    const novasMensagens = [...this.state.listaMensagem, novaMensagem];

    this.setState({ listaMensagem: novasMensagens, valorInputNome: "", valorInputMensagem: ""});


};

onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value});
};

onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value});
};

//RENDER
render() {
    const historicoMensagens = this.state.listaMensagem.map((listaMensagem) => {
        return (
            
            <p>{listaMensagem.nome}: {listaMensagem.mensagem}</p>
            
        );
    });

return ( 
<ContainerCentral>
    <ContainerAgrupado>
        <HistoricoMensagem>
            {historicoMensagens}
        </HistoricoMensagem>
        <UsuarioMensagem>
            <input class="inputNome" value={this.state.valorInputNome} onChange={this.onChangeInputNome} placeholder="Usuário"></input>
            <input class="inputMensagem" value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} placeholder="Mensagem"></input>
            <button class="botaoEnviar" onClick={this.adicionaMensagem} >Enviar</button>
        </UsuarioMensagem>
    </ContainerAgrupado>
</ContainerCentral>
);

}

}

export default UserMessage