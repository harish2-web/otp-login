import React, { Component } from 'react';
import './App.css';
import firebaseConfig  from './firebase';
import * as firebaseui from "firebaseui";
import firebase from "firebase";

class App extends Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <div>
      <h1 style={{textAlign:'center',color:'white'}}>LOGIN USING OTP</h1>
      <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}

export default App;