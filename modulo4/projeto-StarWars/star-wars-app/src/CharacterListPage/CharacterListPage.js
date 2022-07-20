import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const CardList = styled.div`
display: flex;
flex-direction: column;
`

const CharacterName = styled.p`
border: 1px solid black;
height: auto;
width: 30%;
text-align: center;
`

const CharacterListPage = () => {

    const [characterList, setCharacterList] = useState([])

    const getCharacters =() =>{
    axios.get('https://swapi.dev/api/')
    .then((res)=>{
        setCharacterList(res.data.people)
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    
    useEffect(() => {
        getCharacters()
    
    },[])

    return(
    <>
        <h1>Lista de Personagens</h1>
        <CardList>
            <CharacterName>Luke Skywalker</CharacterName>
            <CharacterName>C-3PO</CharacterName>
            <CharacterName>R2-D2</CharacterName>
        </CardList>
    </>
    )
}

export default CharacterListPage