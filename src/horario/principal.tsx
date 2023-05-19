import { Grid, Box} from '@mui/material';
import Pestañas from './consultahorario/pestañas';
// import ConsultarHorario from './consultahorario/consultarhorario';



export default function  ParteDaniela() {
  return (

  
        <Grid item xs={12} sm={6}  md={6}>
          <Box
            sx={{
              position: "auto",
    border: 2,
    backgroundColor:'white',
    borderColor: "#dddddd", 
    top: 70,
    left: 10, 
    margin:0,
    width: '1100px',      
    height: '250px',}}     //largo
          >
         {/* <Pestañas/> */}
      {/* <ConsultarHorario/> */}

          </Box>

          </Grid>

  )
            }