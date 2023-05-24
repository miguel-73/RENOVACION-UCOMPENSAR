import { Grid, Box, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function Expo () {
    return (
        <Grid alignItems={"center"} container spacing={0} justifyContent={"space-between"}>
            <Grid alignItems={"auto"} item xs={2} sm={4} md={3}>
                <Box sx={{position: "auto",}}>
                    <IconButton>
                        <StarIcon sx={{color: "#fff400",}}/>
                    </IconButton>
                </Box>
            </Grid>

            <Grid alignItems={"center"} item xs={10} sm={8} md={9}>
                <Box sx={{position: "auto",}}>
                    <Grid alignItems={"center"} container spacing={0} justifyContent={"center"}>
                    <Typography variant="h6" sx={{fontSize: "12px",}}>
                        BIENESTAR - Alza La Mano
                    </Typography>

                    </Grid>
                </Box>
            </Grid>

        </Grid>
    )
}
export default Expo;