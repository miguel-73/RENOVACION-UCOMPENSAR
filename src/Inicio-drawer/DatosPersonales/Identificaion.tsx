import { Grid, Box, Typography } from "@mui/material";


export default  function DatosIdentification() {
    return (
        <Grid alignItems={"center"} container spacing={0}>
            <Grid alignItems={"center"} item xs={12}  md={6} justifyContent={"flex-start"}>
                <Box>
                    <Typography sx={{fontSize: "17px"}}>
                       Identificacion
                    </Typography>
                </Box>
            </Grid>
            <Grid alignItems={"center"} item xs={12} md={6} justifyContent={"flex-start"}>
                <Box>
                    <Typography sx={{fontSize: "17px", color: "#077cef"}}>
                       CC 1006779224 
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
