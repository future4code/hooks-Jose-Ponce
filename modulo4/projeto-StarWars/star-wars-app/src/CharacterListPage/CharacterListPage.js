import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
`

const CardCharacterList = styled.p`
border: 1px solid black;
height: auto;
width: 30%;
text-align: center;
&:hover {
    background-color:green;
}
`

const CharacterListPage = () => {

    const [characterList, setCharacterList] = useState([])

//----------COLOCAR CUSTOMHOOK AQ--------------------------
    const getCharacters = () =>{
    axios.get(`${BASE_URL}/people`)

    .then((res)=>{
        setCharacterList(res.data.results)
        console.log(res.data.results)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    useEffect(() => {
        getCharacters()
    
    },[])
//----------COLOCAR CUSTOMHOOK AQ--------------------------
// const renderHabilidade = abilities && abilities.map((hab) => {
//     return (<p>{hab.ability.name.toUpperCase()}</p>)

const characterListRender = characterList.map((character) => {
    return( 
        <CardCharacterList>
        <p>{character.name}</p>
        </CardCharacterList>
        )
})

    return(
    <>
        <h1>Lista de Personagens</h1>
        <CardContainer>
        {characterListRender}
        </CardContainer>
    </>
    )
}

export default CharacterListPage