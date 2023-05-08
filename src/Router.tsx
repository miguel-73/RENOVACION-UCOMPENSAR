import React from 'react';
import {Routes, Route} from "react-router";
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/login';

export const appRouter:React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}
