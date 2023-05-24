import { Box, Grid} from '@mui/material';
import Perfil from './PerfilX';

function Logo () {
    return (
        <Box sx={{flexGrow: 1, }}>
            <Grid alignItems={"center"} container spacing={1} justifyContent={"space-between"} direction={"row"}>
                <Grid alignItems={"center"} item xs={12} sm={4} md={3}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                    }}>
                        <img src="../Images/LogoCompensar.png" style={{width: "90%",}} alt="Logo Compensar"/>
                    </Box>
                </Grid>

                <Grid alignItems={"center"} item xs={12} sm={4} md={5}>
                    <Perfil />
                </Grid>
            </Grid >
        </Box>

    )
}
export default Logo;