import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
border-bottom-style:solid;
align-items: center;
justify-content: space-around;
background-color: #808080;
`

const Header = (props) => {

    return (
        <>
        <HeaderContainer>
        <h1>Real Date</h1>
        <button onClick={() => props.changePage('mainPage')}>Home</button>
        <button onClick={() => props.changePage('matchListPage')}>Lista</button>
        </HeaderContainer>
        </>
    )

}

export default Header