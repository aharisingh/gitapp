import React, { useState } from 'react';
//Router v6
import { Routes, Route, Link } from "react-router-dom";
//React-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//firebase
import firebaseConfig from './Config/firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//components
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import PageNotFound from "./components/PageNotFound";
import UserContext from './Context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import ForgotPassword from "./components/ForgotPassword";
import './App.css';


//initialize firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
