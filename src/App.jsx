import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./page/SignUp.page";
import LoginPage from "./page/Login.page";
import HomePage from "./page/Home.page";
import AuthContextProvider from "./context/AuthContext";
import NotFoundPage from "./page/NotFound.page";
import CardPage from "./page/Card.page";

const App = () => {
  return (
    <AuthContextProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="3d_page" element={<CardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
};

export default App;
