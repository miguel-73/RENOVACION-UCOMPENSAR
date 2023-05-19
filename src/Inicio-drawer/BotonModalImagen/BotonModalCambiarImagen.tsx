


import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Box } from "@mui/system";

export default function BotonModalCambiarImagen() {
    const [visible, setVisible] = useState<boolean>(false);

    return (

      <Box sx={{
    position: "absolute",
    top:323,
    border: 0,
    width: 237
   }}>

    
        <div className="card flex justify-content-center">
                <Button style={{ borderColor: "#FF9142", color:"black", backgroundColor: "#FF9142",width:"100%"}}label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} maximizable style={{ width: "60%",height:"70%"}} onHide={() => setVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>

        </Box>


    )
}
