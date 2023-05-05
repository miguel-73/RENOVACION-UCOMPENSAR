
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {Box} from '@mui/material';
import ContainerModal from '../MODAL/Container_Modal';
export default function BotonModalStiven() {


    const [visible, setVisible] = useState<boolean>(false);

    return (


        <Box  sx={{
    position: "absolute",
    border: 3,
    backgroundColor:'#ffffff',
    borderColor: "#dddddd", //borde
    top: 110,              //mover abajo
    left: 110,             //mover a la derecha
    margin:1,            //margen
    width: "9%",       //ancho
    height: "7%"}}     //largo
          >


        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                
              
 
            <ContainerModal/>    {/* llamado a el modal */}


            </Sidebar>
            <Button icon="pi pi-th-large" onClick={() => setVisible(true)} />
        </div>
         </Box>
    )
}
        