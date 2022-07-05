import styled from "styled-components";

const ButtonContainer = styled.div`
display:flex;
justify-content: space-around;
`
const TitleContainer = styled.h1`
text-align: center;
`
const LoginContainer = styled.div`
display: flex;
flex-direction: column;
`

const LoginPage = () => {
   
    return (
        <>
            <TitleContainer> Login </TitleContainer>
            <LoginContainer>
                <input placeholder="Email:"/>
                <input placeholder="Senha:"/>
            </LoginContainer>
            <ButtonContainer>
                <button>Voltar</button>
                <button>Entrar</button>
            </ButtonContainer>
        </>
    )

}

export default LoginPage