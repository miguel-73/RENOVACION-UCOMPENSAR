import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AutoComplete } from "primereact/autocomplete";
import TipoEntrada from './TipoEntrada';
import Fechaa from './Fechaa';
import { InputText } from "primereact/inputtext";
import Entrada from './Entrada';
export default function NumeFechEntra() {
    return (
        <>
        

            <Box
                sx={{
                    
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 }, 
                    height:100
                }}
                >
                <InputText
                    type="text"
                    placeholder="Numero Entrada"
                    required
                    />  
                    
                <Fechaa />
                <Entrada/>
            </Box>
        </>
    );
}