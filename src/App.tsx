import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { appRouter } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <appRouter />
    </BrowserRouter>
  );
}

export default App;
