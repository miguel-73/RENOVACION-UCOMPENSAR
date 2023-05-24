import { Box, Grid, Typography } from "@mui/material";

export default  function DatosApellido() {
    return (
        <Grid alignItems={"center"} container spacing={0}>
            <Grid alignItems={"center"} item xs={12} md={6}>
                <Box>
                    <Typography sx={{fontSize: "17px"}}>
                       Apellidos
                    </Typography>
                </Box>
            </Grid>
            <Grid alignItems={"center"} item xs={12}  md={6}>
                <Box>
                    <Typography sx={{fontSize: "17px", color: "#077cef"}}>
                       Vigoya Mestra
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
