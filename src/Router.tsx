import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/login";
import Nav from "./common/NavBar/NavBar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      </Route>
    </Routes>
  );
};
