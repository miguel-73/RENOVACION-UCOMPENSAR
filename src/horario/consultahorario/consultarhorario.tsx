import React from 'react'; 
import { Panel } from 'primereact/panel';
import { Grid, Box} from '@mui/material';
import PrincipalGrid from './gridprincipal';
import BontonContinuarHorario from '../horario1/botonmodal';

export default function ConsultarHorario() {
    return (
      <Grid alignItems="center" container spacing={2}>
        <Grid item xs={12} sm={12}  md={12}>
        <Box
          sx={{
            position: "auto",
  border: 2,
  backgroundColor:'white',
  borderColor: "#dddddd",  
  margin:2,      
  height: '400px',}}     //largo
        >


 <Panel header="Consultar Horario Estudiante"   >

             <p  style={{ height: "225px" }} className="m-0">
             <PrincipalGrid/>
            </p>
            
        </Panel>
       <BontonContinuarHorario/>
      
        </Box>

        </Grid>
        </Grid>




       
    )
}