import { Box} from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const card = (
<React.Fragment>
<CardContent>
<Typography variant="h6" component="div"

sx={{
position: "relative",
top: "-15px",
color: "#ffffff"}}>

Datos Personales

</Typography>
</CardContent>
</React.Fragment>

);


export default function TituloModal() {
  return (

  

      <Box
     sx={{
     position: "absolute",
     top: -25,
     left: 10,
     width: "98%",       //ancho
     height: "12%"}}     //largo
    >

<h3>BUSQUEDA DE ARCHIVO</h3>
<Card variant="outlined"
sx={{ 
   borderRadius: 6,
   background: "linear-gradient(90deg, rgba(143,191,51,1) 0%, rgba(57,164,217,1) 99%)",
   height:35
    }}>{card}</Card>
          


     </Box>

     
  );
}
