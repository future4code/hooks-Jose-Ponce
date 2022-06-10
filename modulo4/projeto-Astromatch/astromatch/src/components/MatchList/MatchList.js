

// matchID={matchList.id}
// matchName={matchList.name}
// matchBio={matchList.bio}
// matchPhoto={matchList.photo}
// matchAge={matchList.age}

const MatchList = (props) => {



    return (
        <>
        <p>MatchList!!</p>
    <img src={props.matchPhoto} style={{ width: "200px" }} />
    <h1>{props.matchName}, {props.matchAge}</h1>
    <h3>{props.matchBio}</h3>
        </>
    )

}

export default MatchList