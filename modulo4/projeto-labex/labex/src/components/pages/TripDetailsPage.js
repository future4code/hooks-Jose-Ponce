import styled from "styled-components";

const ButtonContainer = styled.div`
display:flex;
justify-content: space-around;
`
const TitleContainer = styled.h1`
text-align: center;
`
const TripDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const PersonDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const AprovedPersonDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const TripDetailsPage = () => {
   
    return (
        
        <>
            <TitleContainer>Viagem 1</TitleContainer>
            
            <TripDetailsContainer>
                <p>NOME: VIAGEM 1</p>
                <p>DESCRIÇÃO: DESCRICAO VIAGEM</p>
                <p>PLANETA: JUPITER</p>
                <p>DURACAO: 100 DIAS</p>
                <p>DATA: 20/12/2020</p>
            </TripDetailsContainer>
            
            <ButtonContainer>
                <button>Voltar</button>
            </ButtonContainer>
            
            <TitleContainer>Candidatos Pendentes</TitleContainer>
            <PersonDetailsContainer>
                <p>NOME: CANDIDATO</p>
                <p>PROFISSAO: ESTUDANTE</p>
                <p>IDADE: 68 ANOS</p>
                <p>PAÍS: BRASIL</p>
                <p>TEXTO DA CANDIDATURA: QUERO MT VIAJAAAR</p>
            </PersonDetailsContainer>
            <ButtonContainer>
                <button>Aprovar</button>
                <button>Reprovar</button>
            </ButtonContainer>
            <TitleContainer>Candidatos Aprovados</TitleContainer>
            <AprovedPersonDetailsContainer>
                <ol>
                    <li>Fulano</li>
                    <li>Ciclano</li>
                </ol>
            </AprovedPersonDetailsContainer>
        </>
    )

}

export default TripDetailsPage