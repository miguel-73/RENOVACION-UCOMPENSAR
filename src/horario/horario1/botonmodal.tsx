import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Box, Grid } from '@mui/material';

export default function BontonContinuarHorario() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        
         <Box
        sx={{
          position: "auto",
border: 2,
width: '15%',  
marginLeft: '50%'  // Valor positivo para desplazar hacia la derecha
}}     //largo
      >
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button  onClick={() => setVisible(true)} style={{ width: '100%'}}>
  continuar
</Button>

        </div>
        </Box>
       
    )
}