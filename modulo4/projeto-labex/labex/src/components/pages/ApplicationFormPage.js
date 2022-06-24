import styled from "styled-components";

const TitleContainer = styled.h1`
text-align: center;
`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
`
// Inscreva-se para uma viagem
// Escolha uma Viagem
// Nome
// Idade
// Texto de Candidatura
// Profissão
// Escolha um País

// botao
// voltar
// enviar
//------------------------- CÓDIGO --------------------//
const ApplicationFormPage = () => {
   
    return (
        <>
            <TitleContainer>Inscreva-se para uma viagem abaixo:</TitleContainer>

            <CardContainer>
                <select name="viagemSelect">
                    <option value="1">Selecione</option>
                    <option value="2">Marte</option>
                    <option value="3">Jupiter</option>
                    <option value="4">Lua</option>
                </select>
                <input placeholder="Nome:"/>    
                <input placeholder="Idade:"/>    
                <input placeholder="Texto de Candidatura:"/>    
                <input placeholder="Profissão:"/>    
                <select name="paisSelect">
                    <option value="1">Escolha um País</option>
                    <option value="2">Brasil</option>
                    <option value="3">Estados Unidos</option>
                    <option value="4">Africa do Sul</option>
                </select>    
            </CardContainer>

            <ButtonContainer>
            <button>Voltar</button>    
            <button>Enviar</button>    
            </ButtonContainer>            


        </>
    )

}

export default ApplicationFormPage