import { Grid, Box} from '@mui/material';
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function TextTipoActivo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (

        <Grid item xs={12} md={6}>
        <Box
     sx={{
    position: "absolute",
    borderColor: "#000000", 
    top: 80,
    left: 640, 
    margin:0,
    width: "18%",       //ancho
    height: "15%"}}     //largo
          >


<label htmlFor="username">Tipo de Activo</label>
<MultiSelect
  value={selectedCities}
  onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)}
  options={cities}
  optionLabel="name"
  placeholder="seleccione"
  maxSelectedLabels={3}
  style={{  borderColor: "#000000",  borderRadius:7,width: '100%', maxWidth: '60rem', height:35}}
/>
       



        </Box>
        </Grid>
     

    );
}
        