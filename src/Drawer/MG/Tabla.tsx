import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LineaNotas from './LineaNotas';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Tabla() {
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} columns={16} border={1} alignItems="stretch">
                    <Grid item xs={2} >
                        <Item>Materia</Item>
                    </Grid>
                    <Grid item xs={2} >
                        <Item  >Momento #1</Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>Momento #2</Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>Momento #3</Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>Definitiva</Item>
                    </Grid>


                </Grid>
                <div>

                    <Grid  container spacing={1} columns={{ xs: 16 }} border={1} sx={{ height: 370 }}>
                        <Grid item xs={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid >
                                    <Item style={{ backgroundColor: '#97CEEB' }}>Codigo #</Item>
                                </Grid>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={2} sx={{ height: '100%' }}>
                            <Item  style={{ backgroundColor: '#E6F2FF' }}sx={{ height: '100%' }}>
                                <Grid >
                                    <Item style={{ backgroundColor: '#97CEEB' }}>20%</Item>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                            <Grid >
                                    <Item style={{ backgroundColor: '#97CEEB' }}>35%</Item>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                            <Grid >
                                    <Item style={{ backgroundColor: '#97CEEB' }}>45%</Item>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                            <Grid >
                                    <Item style={{ backgroundColor: '#97CEEB' }}>Definitiva</Item>
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>

                </div>
            </Box>
        </>
    );
}
