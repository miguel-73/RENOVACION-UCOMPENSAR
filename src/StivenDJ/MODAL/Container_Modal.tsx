import { Grid, Box} from '@mui/material';
import TituloModal from './titulo';
import TextCodigoBien from './Text_Cod_Bien';
import TextNombreBien from './Text_Nombre_Bien';
import TextTipoActivo from './Tipo_Activo';
import BottonBuscar from './boton_Buscar';
import TablaStiven from './tabla';



export default function ContainerModal() {
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
    margin:2,            //margen
    width: "95%",       //ancho
    height: "95%"}}     //largo
          >
 
        <TituloModal/>
       <TextCodigoBien/>
       <TextNombreBien/>
       <TextTipoActivo/>
       <BottonBuscar/> 
       <TablaStiven/>




          </Box>
        </Grid>
     
  );
}


