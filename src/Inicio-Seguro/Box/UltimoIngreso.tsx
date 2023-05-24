import { Box, Grid, Typography } from '@mui/material';

export default function Ingreso () {
    return (
        <Box sx={{flexGrown: 1, background: "#a9a395", borderRadius: "12px", mt: 2,}}>
            <Grid alignItems={"center"} container spacing={0} justifyContent={"center"}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={9}>
                    <Typography variant='h6' sx={{fontSize: "12px",}}>
                        Ultimo Ingreso 23-05-2023 08:33:12
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}