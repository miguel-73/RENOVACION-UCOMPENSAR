import { Box, Grid } from '@mui/material';
// import Ingreso from './UltimoIngreso';
import Centrar from './CentrarEx';

export default function OptionsEx() {
    return (
        <Box sx={{ flexGrow: 1, mt: 2, }}>
            <Grid alignItems={"center"} container spacing={0} justifyContent={"flex-end"}>
                <Grid alignItems={"center"} xs={12} sm={3} md={2}>
                    <Box sx={{
                        // border: 1,
                        boxShadow: 2,
                        top: "420px",
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        borderRadius: "12px",
                        background: "#f66d09",
                        mt: 1,
                    }}>
                        <Centrar />
                    </Box>
                </Grid>

                {/* <Grid alignItems={"center"} item xs={12} sm={4} md={3}>
                    <Ingreso />
                </Grid> */}
            </Grid>
        </Box>
    )
}