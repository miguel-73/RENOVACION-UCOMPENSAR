import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ContainedButtons from '../InformacionTerceros/Botones';
import Bodega from '../pru/Bodega';
import ConPequeDos from '../pru/ConPequeDos';
import Documeto from '../pru/Documeto';
import ElaboradoPor from '../pru/ElaboradoPor';
import Nombre from '../pru/Nombre';
import SeleccionarArchibo from '../pru/SeleccionarArchibo';
import SinArchibosSelet from '../pru/SinArchibosSelet';
import TipoDeDocumento from '../pru/TipoDeDocumento';
import Entrada from './Entrada';
import Fechaa from './Fechaa';
import MotivoObser from './MotivoObser';
import CustomizedInputs from './NumeFechEntra';
import Modal from './Modal';

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
                    md={12}
                    xs={12}
                    sm={12}
                    sx={{ border: 0, height: '100%', mt: 3 }}
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
                        xs={12}
                        sm={12}
                    >
                        <MotivoObser />
                    </Grid>
                    {/* Esto es la perte de abjo  InfotmacionTerceros  */}

                    <Grid
                        alignItems="stretch"
                        md={12}
                        xs={12}
                        sm={12}
                    >
                        <ConPequeDos />
                    </Grid>
                    <Grid >
                        <TipoDeDocumento />
                    </Grid>
                    <Grid >
                        <Documeto />
                    </Grid>
                    <Grid >
                        <Nombre />
                    </Grid>
                    <Grid >
                        <Modal />
                    </Grid>
                </Grid>
                <Grid
                    container spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-end"
                    md={12}
                    xs={12}
                    sm={12}
                    sx={{ border: 0, height: '100%', mt: 3 }}
                >
                    {/* Esto es la perte de abjo  InfotmacionTerceros  */}
                    <Grid >
                        <Bodega />
                    </Grid>
                    <Grid >
                        <ElaboradoPor />
                    </Grid>
                    <Grid >
                        <SeleccionarArchibo />
                    </Grid>
                    <Grid >
                        <SinArchibosSelet />
                    </Grid>
                </Grid>
                <Grid
                    container spacing={2}
                    direction="row"
                    justifyContent="flex-end"
                    md={12}
                    xs={12}
                    sm={12}
                    sx={{ border: 0, height: '100%', mt: 3 }}
                >
                    {/* buttons   */}
                    <Grid
                        alignItems="flex-end"
                    >
                        <ContainedButtons />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}