import { Box, Grid } from "@mui/material";

function Fondo () {
    return (
        <Box sx={{flexGrown: 1,}}>
            <Grid alignItems={"center"} container spacing={0}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={12}>
                    <img src="../Images/Fondo1.png" alt="Paginacion" style={{height: "400px", width: "500px"}}/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Fondo;