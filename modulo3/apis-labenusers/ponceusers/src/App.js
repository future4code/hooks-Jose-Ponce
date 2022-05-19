import React from "react";
import axios from 'axios';

const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "jose-ponce-hooks"
  }
};


class App extends React.Component {
  state = {
    listaUsuarios: []
  }


  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios
      .get(urlAllUsers, headers)
      .then((res) => {
        console.log(res.data)
    })
      .catch((err) => {
        console.log(err.response)
    })
  }

  render(){


    return (
      <>
     <p>oii</p> 
      </>
    );
  }
}

export default App;
