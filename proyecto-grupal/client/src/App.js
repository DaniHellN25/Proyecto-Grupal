import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Post from "./components/Post/Posts.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route exact path="/signup" element={<RegisterForm />} />
        <Route path="/" element={<Footer />} />
        <Route exact path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;