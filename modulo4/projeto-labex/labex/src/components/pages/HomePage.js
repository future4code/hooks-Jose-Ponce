import styled from "styled-components";

const ButtonContainer = styled.div`
display:flex;
justify-content: space-around;
`
const TitleContainer = styled.h1`
text-align: center;
`



//------------------------- CÓDIGO --------------------//

const HomePage = () => {
   
    return (
        
        <>
            
            <TitleContainer>LabeX - O céu nunca foi limite! </TitleContainer>
            
            <ButtonContainer>
            <button>Lista de Viagens</button>
            <button>Área de Administrador</button>
            </ButtonContainer>
        </>
    )

}

export default HomePage