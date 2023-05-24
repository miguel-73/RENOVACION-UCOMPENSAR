import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import SelectorDePrograma from '../consultahorario/programas';

export default function DatosUsuario() {
  return (
    <Box sx={{ top: 5, border: 0, width: "98%", margin: 1, height: "14%", marginLeft:2 }}>
         <Grid alignItems="center" container spacing={0}>
        <Grid alignItems="center" item xs={3} >
        <Box sx={{
  position: "auto",
  border: 0,
  backgroundColor:'white',
  borderColor: "#dddddd", 
  width: '215px',      
  height: '60px',
  marginLeft:1
  
 }}>

 
      <Typography
        variant="subtitle2"
        display="block"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
       PROGRAMA: 
       Tecnica Profesional En Operacion y Mantenimiento Base De Datos
      </Typography> 
      </Box>
      </Grid> 

      <Grid alignItems="center" item xs={3} >
      <Box sx={{
  position: "auto",
  border: 0,
  backgroundColor:'white',
  borderColor: "#dddddd", 
  width: '170px',      
  height: '40px',
  
 }}>
      <Typography
        variant="subtitle2"
        display="block"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Nombre Del Estudiante:
        Maria Daniela Gallego 
      </Typography>

      </Box>
      
      </Grid>  

      <Grid alignItems="center" item xs={3} >
      <Box sx={{
  position: "auto",
  border: 0,
  backgroundColor:'white',
  borderColor: "#dddddd", 
  width: '170px',      
  height: '40px',
  
 }}>
      <Typography
        variant="subtitle2"
        display="block"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Numero De Documento:
        1123802918
      </Typography>

      </Box>
      
      </Grid> 
     
      <Grid alignItems="center" item xs={2} >
      <Box sx={{
  position: "auto",
  border: 0,
  backgroundColor:'white',
  borderColor: "#dddddd", 
  width: '170px',      
  height: '40px',
  
 }}>
      <Typography
        variant="subtitle2"
        display="block"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Ubicacion Semestral:
             4 semestre
      </Typography>

      </Box>
      
      </Grid> 

        </Grid>

    </Box>
  );
}