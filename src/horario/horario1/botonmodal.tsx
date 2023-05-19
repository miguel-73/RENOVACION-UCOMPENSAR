import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Box, Grid } from '@mui/material';
import ContainerPrincipalModal from './container-principal';

export default function BontonContinuarHorario() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        
         <Box
        sx={{
          position: "absolute",
border: 1,
width: '10%',  
marginLeft: '70%'  // Valor positivo para desplazar hacia la derecha
}}     //largo
      >
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
               <ContainerPrincipalModal/>
            </Sidebar>
            <Button  onClick={() => setVisible(true)} style={{ width: '100%'}}>
  continuar
</Button>

        </div>
        </Box>
       
    )
}