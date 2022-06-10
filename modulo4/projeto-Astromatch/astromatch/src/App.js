import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import MatchList from "./components/MatchList/MatchList.js";

const  App = () => {
  const [showProfile, setShowProfile] = useState({});
  const [currentPage,setCurrentPage] = useState('mainPage');

  //FUNCAO DA API PARA PEGAR O PERFIL DO ASTROMACH - e passei por props para o Main.js

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-ponce-hooks/person"
      )
      .then((res) => {
        // console.log(res.data.profile);
        setShowProfile(res.data.profile);
      })
      .catch(() => {
        alert("ERRO, verificar conexão com a internet ou API.")
      })
  }

  useEffect(() => {
    getProfile()
  }, []);

//FUNCAO DA API PARA O BOTAO DE DAR MATCH - pretendo passar por props para M

  const choosePerson = (choice) => {
    const body = {
      id: showProfile.id,
      choice: choice
    }
    
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-ponce-hooks/choose-person",
          body
        )
      .then(() => {
        getProfile();
      })
      .catch(() => {
        alert("ERRO NOS BOTOES, verificar conexão com a internet ou API.")
        
      })
  }

  const onClickY = () => {
    choosePerson(true)
  };

  const onClickN = () => {
    choosePerson(false)
  }




  const renderCurrentPage = () => {
    if (currentPage === 'mainPage'){
      return <Main

      profileID={showProfile.id}
      profileName={showProfile.name}
      profileBio={showProfile.bio}
      profilePhoto={showProfile.photo}
      profileAge={showProfile.age}
      
      />
    } else if (currentPage === 'matchListPage'){
      return <MatchList 
      
      matchID={matchList.id}
      matchName={matchList.name}
      matchBio={matchList.bio}
      matchPhoto={matchList.photo}
      matchAge={matchList.age}

      /> 
    }
  }

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
  }

//-------------------------------------------------------------------------------------------
const [matchList, setMatchList] = useState([]);

    const getMatches = () => {
        axios
          .get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-ponce-hooks/matches"
          )
          .then((res) => {
            console.log(res.data.matches);
            setMatchList(res.data.matches);
          })
          .catch(() => {
            alert("ERRO NA LISTA, verificar conexão com a internet ou API.")
          })
      }
    
      // useEffect(() => {
      //   getMatches()
      // }, [currentPage('matchListPage')]);
//-------------------------------------------------------------------------------------------



  return (
  <>
    <Header changePage={changePage} />
    {renderCurrentPage()}
    <button onClick={onClickY}> amei </button>
    <button onClick={onClickN}> próximo :/ </button>

  </>
  );
}

export default App;
