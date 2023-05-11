import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Box } from "@mui/material";

export default function CuadroPrimerApellido() {
    const [value, setValue] = useState<string>('');

    return (

      <Box
      sx={{
        position: "absolute",
        border: 0,
        top: 92,
        left: 285,
        width: "20%",       //ancho
        height: "11%"
      }}>
        <div className="card flex justify-content-center">
        <label htmlFor="username">Primer Apellido:</label>
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            style={{ width: '190px', height:'40px' }}
            />
        </div>  
        
        </Box>  
    )
}