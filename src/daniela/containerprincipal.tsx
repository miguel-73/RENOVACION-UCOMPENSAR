import { Grid, Box} from '@mui/material';
import ModalPantalla1 from './modal1';


export default function  ParteDaniela() {
  return (

  
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "absolute",
    border: 2,
    backgroundColor:'white',
    borderColor: "#dddddd", 
    top: 0,
    left: 0, 
    margin:4,
    width: "95%",       //ancho
    height: "42%"}}     //largo
          >

      <ModalPantalla1/>


          </Box>




        </Grid>
     
  );
}