import { Box, Grid, Typography } from "@mui/material";

function InformationV2 () {
    return (
        <Box sx={{position: "auto", width: "auto", height: "auto", flexGrown: 1, mt: 2,}}>
            <Grid alignItems={"center"} container spacing={1}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={5}>
                    <Box>
                    <Typography variant="h5">
                    Nuestra Institución
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid alignItems={"center"} container spacing={1}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={5}>
                    <Box sx={{mt: 1,}}>
                        <Typography sx={{fontSize: "12px"}}>
                            La Fundación Universitaria Compensar piensa en una formación educativa integral para los futuros profesionales de Colombia, pues dentro de su modelo educativo da la posibilidad al estudiante de convertirse en Técnico, Tecnólogo y Profesional, a través de herramientas de calidad para competir en el mercado laboral y fortalecer la relación Universidad - Empresa.
                        </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}
export default InformationV2;