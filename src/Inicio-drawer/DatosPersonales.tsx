import { Box, Grid } from "@mui/material";
import ImagenStudiante from "./ImagenStudiante";






export default  function FotoPerfilStudiante() {
  return (
    

    <Box sx={{ flexGrow: 1 }}>
    <Grid alignItems="center" container spacing={0}>
      <Grid alignItems="center" item xs={12} sm={6} md={4}>



     
  <Box sx={{
  position: "auto",
  top:86,
  left:50,
  
  border: 3,
  width: "244px",      
  height: "300px",
  margin:3
 }}>




  <ImagenStudiante/>

  </Box>
    </Grid>  











    <Grid alignItems="center" item xs={12} sm={6} md={4}>



     
<Box sx={{
position: "auto",
top:86,
left:50,

border: 3,
width: "244px",      
height: "300px",
margin:3
}}>




<ImagenStudiante/>

</Box>
  </Grid>  




      </Grid>
         </Box>






  );
}
