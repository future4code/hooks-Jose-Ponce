import styled from "styled-components";

const ButtonContainer = styled.div`
display:flex;
justify-content: space-around;
`
const TitleContainer = styled.h1`
text-align: center;
`
const TripCreationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
box-shadow: RGB(0 0 0 / 70%) 2px 5px 5px 2px;
`

const CreateTripPage = () => {
   
    return (
        
        <>
            <TitleContainer>Criar Viagem:</TitleContainer>
            <TripCreationContainer>
                <p>NOME: VIAGEM JUPITER</p>   
                <p>ESCOLHA UM PLANETA</p>   
                <p>DATA</p>   
                <p>DESCRICAO</p>   
                <p>DURAÇÃO EM DIAS</p>   
            </TripCreationContainer>
            <ButtonContainer>
                <button>Voltar</button>
                <button>Criar</button>
            </ButtonContainer>
        </>
    )

}

export default CreateTripPage