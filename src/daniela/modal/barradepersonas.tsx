import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function DatosDePersonas() {
  return (
    <Box sx={{  
    
        border: 0,
        backgroundColor:'white',
        width: "95%",  
        left: 50, 
        top: 30,  //ancho
         
    }}>
      <AppBar position="absolute"sx={{  
    border: 0,
    borderRadius:7,
    background: "linear-gradient(90deg, rgba(55,90,26,1) 34%, rgba(17,127,200,1) 99%)",
    top: 46,
    left: 10, 
    margin:0,
    width: "95%",       //ancho
    height: "7%"
}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,  top:0,  margin:1,height: "85%" }}>
            Datos De Personas 
          </Typography>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}