import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AutoComplete } from "primereact/autocomplete";
import TipoEntrada from './TipoEntrada';

export default function NumeFechEntra() {
    return (
        <Box
            sx={{
                
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
            }}
        >

            <TextField 
           
            id="Número De Entrada" 
            label="Número De Entrada" 
            variant="outlined" 
            required
            />
            
             <TextField 
            id="Fecha" 
            label="Fecha" 
            variant="outlined" 
            disabled placeholder="Disabled"
            required
            />
                <TipoEntrada/>
       
        </Box>
    );
}