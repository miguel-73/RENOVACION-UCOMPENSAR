import { Grid, Box} from '@mui/material';
import BotonModalStiven from './Boton-modal';


export default function ParteStiven() {
  return (

  
   <Grid item xs={12} md={6}>
        <Box
     sx={{
    position: "absolute",
    border: 3,
    backgroundColor:'#ffffff',
    borderColor: "#dddddd", //borde
    top: 0,              //mover abajo
    left: 0,             //mover a la derecha
    margin:1,            //margen
    width: "99%",       //ancho
    height: "97%"}}     //largo
          >


      <BotonModalStiven/>

          </Box>
        </Grid>
     
  );
}


