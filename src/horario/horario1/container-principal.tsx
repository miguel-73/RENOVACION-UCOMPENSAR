import React from 'react';
import { Box, Grid } from '@mui/material';
import HorarioTabla from './tablahorario';
import TablaHorario1 from './gridtabla';
import ResponsiveGrid from './gridtabla';
import RowAndColumnSpacing from './gridtabla';
import DatosUsuario from './datosusuario';



export default function ContainerPrincipalModal() {
  return (
    <Box sx={{border: 3, flexGrow: 1, height: 521,  width: "auto", borderColor: "#dddddd",}}>
      <Grid alignItems="center" container spacing={0}>
        <Grid alignItems="center" item xs={12} sm={12} md={12}> 
       
    <Box sx={{
    position: "auto",
    top: 0,
    border: 3,
    backgroundColor:'white',
    borderColor: "#dddddd", 
    width: "auto",      
    height: 495,
    margin:2
   }}>
    <DatosUsuario/>
   <RowAndColumnSpacing/>
    </Box>
      </Grid>  
        </Grid>
      </Box>
  );
}