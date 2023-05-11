import { Grid, Box} from '@mui/material';
import React from 'react'; 
import { Button } from 'primereact/button';
import SearchIcon from '@mui/icons-material/Search';



export default function BottonBuscar() {
  return (

  
   <Grid item xs={12} md={6}>
        <Box
     sx={{
    position: "absolute",

    borderColor: "#dddddd", 
    top: 79,
    left: 483, 
    margin:4,
    width: "9%",       //ancho
    height: "15%"}}     //largo
          >

          

<div className="card flex flex-wrap justify-content-center gap-3">
<Button
      style={{
        borderRadius: '7px',
        backgroundColor: "#0b2a3d"
      }}
      label="Buscar"
      iconPos="right"
    >
      <span style={{ marginLeft: "5px" }}></span>
      <SearchIcon />
    </Button>
        </div>


          </Box>
        </Grid>
     
  );
}