import {  Avatar, Box, Grid, Typography } from "@mui/material";


function Perfil () {
    return (
        <Box sx={{flexGrown: 1, borderRadius: "18px", background: "#a9a395",}}>
            <Grid alignItems={"center"} container spacing={0} justifyContent={"space-between"}>
                <Grid alignItems={"center"} item xs={2} sm={1} md={1}>
                    <Box>
                        <Avatar  alt="Icono Perfil" src="../Images/ProfileMiguel.jpg"/>
                    </Box>
                </Grid>

                <Grid alignItems={"center"} item xs={10} sm={9} md={10}>
                    <Box>
                        <Typography variant="h6" sx={{fontSize: "12px", position: "relative", width: "auto"}}>
                            Hola, Miguel Angel Murcia Ocampo, bienvendo(a) a su Campus TI
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}
export default Perfil;