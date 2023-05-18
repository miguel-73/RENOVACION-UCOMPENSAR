import { Box, Grid } from '@mui/material';
import TextoIdentificacion from './textoidentifi';
import TextoNombre from './textonombre';
import SelectorDePrograma from './programas';




export default function PrincipalGrid() {
  return (
    <Grid alignItems="center" container spacing={0}>
    <Grid item xs={8} sm={6}  md={4}>

    <TextoIdentificacion/>

    </Grid>

    <Grid item xs={8} sm={6}  md={4}>

      <TextoNombre/>

    </Grid>

     <Grid item xs={8} sm={9}  md={10}>
     
       <SelectorDePrograma/>
     
     </Grid>

    {/* <Grid item xs={12} sm={6}  md={6}> */} 

   

    {/* </Grid> */}

    </Grid>
  );
}