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
import { Modal } from '@mui/material';
import Entrada from '../DatosEntrada/Entrada';
import Fechaa from '../DatosEntrada/Fechaa';
import MotivoObser from '../DatosEntrada/MotivoObser';
import CustomizedInputs from '../DatosEntrada/NumeFechEntra';
import CodigoBien from './CodigoBien';
import NombreArticulo from './NombreArticulo';
import ContPequeInfo from './ContPequeInfo';
import TipoActivoTipoActivo from './TipoActivo';
import Buscar from './Buscar';
import Tablaa from './Tablaa';


export default function Grid2() {
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
                    sx={{ border: 1, height: '100%', mt: 3 }}
                >
                    {/* Esto es la perte de abjo  InfotmacionTerceros  */}

                    <Grid
                        alignItems="stretch"
                        md={12}
                        xs={12}
                        sm={12}
                    >
                        < ContPequeInfo/>
                    </Grid>                                
                </Grid>
                <Grid
                    container spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-end"
                    md={9}
                    xs={12}
                    sm={12}
                    sx={{ border: 0, height: '100%', mt: 3 }}
                >
                    {/* Esto es la perte de abjo  InfotmacionTerceros  */}
                    <Grid >
                        <CodigoBien />
                    </Grid>
                    <Grid >
                        <NombreArticulo />
                    </Grid>
                    <Grid >
                        <TipoActivoTipoActivo />
                    </Grid>
                    <Grid >
                        <Buscar />
                    </Grid>
                    
                </Grid>
                <Grid  sx={{ border: 0, height: '100%', mt: 3 }} >
                        <Tablaa /> 
                    </Grid>
                   
               
            </Box>
        </>
    );
}