import styled from "styled-components";

const ButtonContainer = styled.div`
display:flex;
justify-content: space-around;
`
const TitleContainer = styled.h1`
text-align: center;
`
const TripContainer = styled.div`
display: flex;
flex-direction: row;
`

const AdminHomePage = () => {
   
    return (
        
        <>
            <TitleContainer>Painel Administrativo</TitleContainer>
            <ButtonContainer>
                <button>Voltar</button>
                <button>Criar Viagem</button>
                <button>Logout</button>
            </ButtonContainer>
            
            <TripContainer>
                <p>Viagem 1</p>
                <button>Detalhes</button>
                <button>X</button>
            </TripContainer>
        </>
    )

}

export default AdminHomePage