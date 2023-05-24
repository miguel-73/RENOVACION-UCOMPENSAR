import { Box, Grid, Typography } from "@mui/material";

export default  function DatosCelular() {
    return (
        <Grid alignItems={"center"} container spacing={0}>
            <Grid alignItems={"center"} item xs={12} md={6}>
                <Box>
                    <Typography sx={{fontSize: "17px"}}>
                       Celular
                    </Typography>
                </Box>
            </Grid>
            <Grid alignItems={"center"} item xs={12}  md={6}>
                <Box>
                    <Typography sx={{fontSize: "17px", color: "#077cef"}}>
                       xxxxxxxxx
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
