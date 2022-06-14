

// matchID={matchList.id}
// matchName={matchList.name}
// matchBio={matchList.bio}
// matchPhoto={matchList.photo}
// matchAge={matchList.age}

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PhotoCardMatchList = styled.img`
width: 80px;
height: 60px;

`
const TitleCardMatchList = styled.div`
justify-self: ;
`
const CardMatchListContainer = styled.div`
display: flex;
align-items:center;
padding:10px;
justify-content: space-between;
`

const MatchList = (props) => {

    const [matchList, setMatchList] = useState([]);

        const getMatches = () => {
            axios
            .get(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-ponce-hooks/matches"
            )
            .then((res) => {
                setMatchList(res.data.matches);
            })
            .catch(() => {
                alert("ERRO NA LISTA, verificar conexão com a internet ou API.")
            })
        }
        
    useEffect(() => {
        getMatches()
    }, []);

    const renderedMatchList = matchList.map ((matchlist) => {
        return(
        <CardMatchListContainer>
            <PhotoCardMatchList src={matchlist.photo}/>
            <TitleCardMatchList>
                {matchlist.name} - {matchlist.age} anos.
            </TitleCardMatchList>
        </CardMatchListContainer>
        )
    })

    return (
        <>
    

    <div>
    {renderedMatchList}
    </div>
    
    {/* <img src={props.matchPhoto} style={{ width: "200px" }} />
    <h1>{props.matchName}, {props.matchAge}</h1>
    <h3>{props.matchBio}</h3> */}

        </>
    )

}

export default MatchList