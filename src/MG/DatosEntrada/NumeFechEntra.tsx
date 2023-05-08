import TextField from '@mui/material/TextField';
import React from 'react';
export default function CustomizedInputs() {
    return (
        <>
            <div className="App">
                <TextField
                    id="outlined-error"
                    label="Numero Entrada"
                    defaultValue=""
                    required
                />
            </div>
        </>
    );
}