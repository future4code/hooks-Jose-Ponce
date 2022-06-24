import styled from "styled-components";

const TitleContainer = styled.h1`
text-align: center;
`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
box-shadow: RGB(0 0 0 / 70%) 2px 5px 5px 2px;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
`

//------------------------- CÓDIGO --------------------//
const ListTripsPage = () => {
   

    return (
        <>
            <ButtonContainer>
                <button>Voltar</button>
                <button>Inscrever-se</button>
            </ButtonContainer>

            <TitleContainer>Lista de Viagens</TitleContainer>
            
            <CardContainer>
                <p>Nome: Mulheres são de Vênus</p>
                <p>Descrição: Mulheres são de vênus, os homens são de Marte</p>
                <p>Planeta: Vênus </p>
                <p>Duração: 90 </p>
                <p>Data: 2022-06-30 </p>
            </CardContainer>
        </>
    )

}

export default ListTripsPage