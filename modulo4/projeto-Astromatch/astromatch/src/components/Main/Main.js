import styled from "styled-components";

// profileID={showProfile.id}
// profileName={showProfile.name}
// profileBio={showProfile.bio}
// profilePhoto={showProfile.photo}
// profileAge={showProfile.age}

const Main = (props) => {


    
    return (
        <>
    <p>Main</p>
    <img src={props.profilePhoto} style={{ width: "200px" }} />
    <h1>{props.profileName}, {props.profileAge}</h1>
    <h3>{props.profileBio}</h3>

        </>
    )

}

export default Main