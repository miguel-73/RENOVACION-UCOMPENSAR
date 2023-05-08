import React from 'react';
import './App.css';
import SideBar from './common/SideBar/SideBar';
import Almacen from './pages/Almacen/Almacen';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      {/* <SideBar/> */}
      <Almacen/>
    </Box>
  );
}

export default App;
