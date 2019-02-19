
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from "./Router";

class App extends Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBB915mXIlteYP9k4E3rJLVVdJdBbJ7o7Y",
      authDomain: "manager-d8554.firebaseapp.com",
      databaseURL: "https://manager-d8554.firebaseio.com",
      projectId: "manager-d8554",
      storageBucket: "manager-d8554.appspot.com",
      messagingSenderId: "375090640172"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
         <Router/>
      </Provider>
    );
  }
}

export default App;
