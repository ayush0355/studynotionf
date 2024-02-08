import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

import {Route,Routes} from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
 

function App() {

  const[ isLogegdIn, setIsLoggedIn]=useState(false);
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-richblack-900 flex flex-col ">
    
      <Navbar isLogegdIn={isLogegdIn} setIsLoggedIn={setIsLoggedIn}/>
      
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="Dashboard" element={
        <PrivateRoute isLogegdIn={isLogegdIn}>
            <Dashboard/>
        </PrivateRoute>
        } />

      </Routes>
    </div>
  );
}

export default App;
