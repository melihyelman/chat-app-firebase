import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import firebase from "./firebase";
import store from "./store/store"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import SignUp from "./components/auth/SignUp"
import Login from "./components/auth/Login"

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

const Root = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
  </Routes>
)


ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider >,
  document.getElementById('root')
);
