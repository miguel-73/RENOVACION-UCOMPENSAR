import { Box, Grid, Typography } from "@mui/material";

export default  function DatosCorreo() {
    return (
        <Grid alignItems={"center"} container spacing={0}>
            <Grid alignItems={"center"} item xs={1} sm={2} md={4}>
                <Box >
                    <Typography sx={{fontSize: "17px"}}>
                       Correo
                    </Typography>
                </Box>
            </Grid>
            <Grid alignItems={"center"} item xs={1} sm={3} md={8}>
                <Box>
                    <Typography sx={{fontSize: "17px", color: "#077cef"}}>
                       x@ucompensar.edu.co
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
