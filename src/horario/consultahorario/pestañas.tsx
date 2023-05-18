import * as React from 'react';
import Box from '@mui/material/Box';
import ConsultarHorario from './consultarhorario';
import { Grid } from '@mui/material';

export default function Pestaña() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Grid alignItems="center" container spacing={2}>
    <Grid item xs={12} sm={12}  md={12}>

    <Box sx={{ width: 'auto', typography: 'body1' }}>
     
            <ConsultarHorario/>
         
    </Box>
    </Grid>
        </Grid>
  );
}