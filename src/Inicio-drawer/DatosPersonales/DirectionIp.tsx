import { Box, Grid, Typography } from "@mui/material";

export default  function DatosDireccionIp () {
    return (
        <Grid alignItems={"center"} container spacing={0}>
            <Grid alignItems={"center"} item xs={12}  md={6}>
                <Box >
                    <Typography sx={{fontSize: "17px"}}>
                       Direccion Ip
                    </Typography>
                </Box>
            </Grid>
            <Grid alignItems={"center"} item xs={12}  md={6}>
                <Box >
                    <Typography sx={{fontSize: "17px", color: "#077cef"}}>
                       127.0.0.6
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
