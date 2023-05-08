import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import TextoBusquedaTerceros from './modal/textobusqueda';
import DatosDePersonas from './modal/barradepersonas';
import TextoPrimerNombre from './modal/textoprimernombre';
import CuadroPrimerNombre from './modal/cuadropnombre';
import TextoPrimerApellido from './modal/textopapellido';
import CuadroPrimerApellido from './modal/cuadropapellido';
import BottonBuscar from './modal/botonbuscar';
import CuadroBuscar from './modal/cuadrobuscar';
import BotonArchivo from './modal/botondocumento';
import BotonEnlaceExterno from './modal/botonenlace';
import BotonDeFiltrar from './modal/botonfiltrar';
import { Box} from '@mui/material';


export default function ModalPantalla1() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
               <TextoBusquedaTerceros/>
               <DatosDePersonas/>
               <TextoPrimerNombre/>
               <CuadroPrimerNombre/>
               <TextoPrimerApellido/>
               <CuadroPrimerApellido/>
               <BottonBuscar/>
               <Box   sx={{
            border:1,
            position: "absolute",
            borderColor: "black", 
            top: 160,
            left: -19, 
            margin:4,
            width: "98%",       //ancho
            height: "66%"}}>
                <CuadroBuscar/>
               <BotonArchivo/>
               <BotonEnlaceExterno/>
               <BotonDeFiltrar/>
               </Box>
               
               
            </Sidebar>
            
            <Button icon="pi pi-th-large" onClick={() => setVisible(true)} />
        </div>
    )
}