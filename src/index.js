import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import SignUp from "./components/auth/SignUp"
import Login from "./components/auth/Login"
import firebase from "./firebase";

const Root = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
  </Routes>
)

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);
