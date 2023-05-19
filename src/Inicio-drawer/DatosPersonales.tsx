import { Box, Grid } from "@mui/material";
import ImagenStudiante from "./ImagenStudiante";
import InformacionPersonalInicio from "./Informacion";
import TituloDatosPersonales from "./TituloDatosPersonales";
import BotonModalCambiarImagen from "./BotonModalImagen/BotonModalCambiarImagen";

export default function FotoPerfilStudiante() {
  return (


<Box sx={{
    position: "absolute",
    top: 100,
    border: 2,
    borderColor: "#dddddd", 
    width: "75%",      
    height: "70%",
    margin:0
   }}>

   


    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid alignItems="center" container spacing={0}>

            <Grid alignItems="center" item xs={12} >
              <Box
                sx={{
                  position: "auto",
                  backgroundColor:'#8B8B8B',
                  width: "100%",
                  height: 40,
                  borderColor:"white"
                 
                }}
              >
                <TituloDatosPersonales/>
              </Box>
            </Grid>







        <Grid alignItems="center" item xs={12} sm={10} md={4}>
          <Box
            sx={{
              position: "auto",
              border: 3,
              width: "244px",
              height: "300px",
              margin: 3,
            }}
          >
            <ImagenStudiante />
                <BotonModalCambiarImagen/>
          </Box>
        </Grid>

        <Grid alignItems="center" item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "auto",
              border: 3,
              width: "244px",
              height: "300px",
              margin: 3,
            }}
          >
            <InformacionPersonalInicio/>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>

    </Box>
  );
}
