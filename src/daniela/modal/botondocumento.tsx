
import React from 'react'; 
import { Button } from 'primereact/button';
import { Box} from '@mui/material';

export default function BotonArchivo() {
    return (

        <Box    sx={{
            position: "absolute",
            borderColor: "white", 
            top: 160,
            left: 483, 
            margin:4,
            width: "9%",       //ancho
            height: "15%"}}     //largo 
            >
    
    <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-file" rounded outlined severity="secondary" aria-label="Bookmark" style={{
        top: 29,
        left: -228,
      }}/>
            </div>
       </div>
        
        
        </Box>
        
    )
}
        