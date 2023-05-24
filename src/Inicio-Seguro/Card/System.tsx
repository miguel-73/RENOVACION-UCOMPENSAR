import { Box, Grid} from "@mui/material";
import Gestion from '../Typography/Gestion';

function SistemaGestion () {
    return (
        <Box>
            <Grid alignItems={"center"} container spacing={0}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={12} >
                    <Box sx={{
                        height: "auto",
                        width: "auto",
                        }}>
                            <Gestion />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SistemaGestion;