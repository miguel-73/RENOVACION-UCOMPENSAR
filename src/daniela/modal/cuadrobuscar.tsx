import React from 'react'; 
import { InputText } from "primereact/inputtext";
import Box from '@mui/material/Box';

export default function CuadroBuscar() {
    return (

         <Box  sx={{
            position: "absolute",
            border: 0,
            top: 220,
            left: 55,
          }}>
            
        <div className="card flex flex-wrap justify-content-center gap-3">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>

        </div> 
        
        
        </Box>

        
    )
}