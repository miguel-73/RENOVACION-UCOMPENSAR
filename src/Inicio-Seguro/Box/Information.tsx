import { Box, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';


function Information () {
    return (
        <Box sx={{position: "auto", width: "auto", height: "auto", flexGrown: 1, mt: 2,}}>
            <Grid alignItems={"center"} container spacing={1}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={5}>
                    <Box>
                    <Typography variant="h5">
                            Conoce las razones por las que debes estudiar con nosotros
                    </Typography>
                    </Box>
                </Grid>
                
            </Grid>
            <Grid alignItems={"center"} container spacing={1}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={5}>
                    <Box sx={{mt: 1,}}>
                    <Typography sx={{fontSize: "12px"}}>
                        En UCompensar somos pioneros en innovación educativa y a través del modelo Universidad - Empresa, nuestros estudiantes tienen la posibilidad de obtener titulaciones como Técnico, Tecnólogo y Profesional.                    
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Information;