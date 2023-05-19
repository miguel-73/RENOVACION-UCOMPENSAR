import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function TextoNombre() {
  return (
    <Box sx={{ border: 0, width: '250PX',  margin:1,      
    height: '60px', }}>
      
      <Typography variant="button" display="block" gutterBottom style={{ fontWeight: "bold" }}>
        nombre
      </Typography> 
      <Typography variant="subtitle1" display="block" gutterBottom>
        maria paula leon
      </Typography>



    </Box>
  );
}