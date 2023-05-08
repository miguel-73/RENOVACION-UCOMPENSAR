import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MotivoObser() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: '100%',
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "16px",
                }}
            >
                <TextField 
                    fullWidth 
                    label="Motivo" 
                    id="campo1" 
                    required
                />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: '100%',
                }}
            >
                <TextField 
                    fullWidth 
                    label="Observaciones" 
                    id="campo2" 
                    required
                />
            </Box>
        </>
    );
}
