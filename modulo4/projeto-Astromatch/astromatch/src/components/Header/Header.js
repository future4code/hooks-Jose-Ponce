import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
border-bottom-style:solid;
align-items: center;
justify-content: space-around;
`

const Header = (props) => {

    return (
        <>
        <HeaderContainer>
        <h1>AstroMatch</h1>
        <button onClick={() => props.changePage('matchListPage')}>Lista</button>
        <button onClick={() => props.changePage('mainPage')}>Home</button>
        </HeaderContainer>
        </>
    )

}

export default Header