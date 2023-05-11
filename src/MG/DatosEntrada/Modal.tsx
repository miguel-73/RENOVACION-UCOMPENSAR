import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import SearchIcon from '@mui/icons-material/Search';
import CodigoBien from '../ModalPantalla2/CodigoBien';
import ContPequeInfo from '../ModalPantalla2/ContPequeInfo';
import NombreArticulo from '../ModalPantalla2/NombreArticulo';
import Grid2 from '../ModalPantalla2/Grid2';
export default function Modal() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
            <h2 style={{marginTop: "-10px"}}>MIGUEL ANGEL MURCIA OCAMPO</h2>

               {/* <ContPequeInfo/>
               <CodigoBien/>
               <NombreArticulo/> */}
               <Grid2/>
            </Sidebar>
            <Button onClick={() => setVisible(true)} >
                BUSQUEDA ABANZADA <SearchIcon />
            </Button>
        </div>
    )
}
