import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fechaa from './Fechaa';
import Entrada from './Entrada';
import CustomizedInputs from './NumeFechEntra';
import MotivoObser from './MotivoObser';
export default function AutoGrid() {
    return (
        <>
            <Box
                sx={{ flexGrow: 1, border: 0 }}
            >
                <Grid
                    container spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-end"
                    sx={{ border: 0, height: '100%', mt: 2 }}
                >
                    <Grid >
                        <CustomizedInputs />
                    </Grid>
                    <Grid >
                        <Fechaa />
                    </Grid>
                    <Grid >
                        <Entrada />
                    </Grid>
                    <Grid
                        alignItems="stretch"
                        md={12}
                    // sx={{ border: 1, mt: 4 }}
                    >
                        <MotivoObser />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}