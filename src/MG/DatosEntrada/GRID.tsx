import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fechaa from './Fechaa';
import Entrada from './Entrada';
import CustomizedInputs from './NumeFechEntra';
import MotivoObser from './MotivoObser';
import React from 'react';
import TipoDocumento from '../InformacionTerceros/Labels';
import ConPequeDos from '../pru/ConPequeDos';
import Documeto from '../pru/Documeto';
import Bodega from '../pru/Bodega';
import Tex4 from '../pru/Nombre';
import TipoDeDocumento from '../pru/TipoDeDocumento';
import Nombre from '../pru/Nombre';
import ElaboradoPor from '../pru/ElaboradoPor';
import ContainedButtons from '../InformacionTerceros/Botones';

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
                    sx={{ border: 1, height: '100%', mt: 2 }}
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
                        <Nombre />
                    </Grid>

                    

                </Grid>

                <Grid
                    container spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-end"
                    md={12}
                    xs={12}
                    sm={12}
                    sx={{ border: 1, height: '100%', mt: 2 }}
                >
                  
                    {/* Esto es la perte de abjo  InfotmacionTerceros  */}

                    
                    <Grid >
                        <Bodega />
                    </Grid>
                    <Grid >
                        <ElaboradoPor />
                    </Grid>
                    {/* <Grid >
                        <SeleccionArchibo />
                    </Grid> */}
                    {/* <Grid >
                        <Nombre />
                    </Grid> */}

                    

                </Grid>
                <Grid
                    container spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-end"
                    md={12}
                    xs={12}
                    sm={12}
                    sx={{ border: 1, height: '100%', mt: 2 }}
                >
                  
                    {/* Esto es la perte de abjo  InfotmacionTerceros  */}

                    
                    
                    <Grid >
                        <ContainedButtons />
                    </Grid>
                    {/* <Grid >
                        <SeleccionArchibo />
                    </Grid> */}
                    {/* <Grid >
                        <Nombre />
                    </Grid> */}

                    

                </Grid>
            </Box>
        </>
    );
}