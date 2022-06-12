import styled from "styled-components";

// profileID={showProfile.id}
// profileName={showProfile.name}
// profileBio={showProfile.bio}
// profilePhoto={showProfile.photo}
// profileAge={showProfile.age}


const CardContainer = styled.div`
margin-top: 10%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: relative;
`

const ImageCard = styled.img`
width: 380px;
height: 250px;
/* padding-top: 15%; */
box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;


`

const BioCard = styled.h4`
margin-left: auto;
margin-right: auto;
text-align: center;
`
const CardText = styled.label`
display: flex;
flex-direction: column;
align-items: center;

`

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`


const Main = (props) => {
   
    return (
        
        <>
            <CardContainer>
                <ImageCard src={props.profilePhoto}/>
                <CardText>
                    <h2>{props.profileName}, {props.profileAge}</h2>
                    <BioCard>{props.profileBio}</BioCard>
                </CardText>
            </CardContainer>
                <ButtonContainer>
                    <button onClick={props.buttonLike}> AMEI </button>
                    <button onClick={props.buttonDislike}> PRÓXIMO :/ </button>
                </ButtonContainer>
        </>
    )

}

export default Main