import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Materias from './Materias';
import Nota1 from './Nota1';
import Nota2 from './Nota2';
import Nota3 from './Nota3';
import Definitiva from './Definitiva';
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
                <Grid container spacing={1} columns={16} border={0} alignItems="stretch">
                    <Grid item xs={3.2} sm={2.8} >
                        <Item  style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Materia</Item>
                    </Grid>
                    <Grid item xs={3.2} sm={2} >
                        <Item style={{  wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #1</Item>
                    </Grid>
                    <Grid item xs={3.2} sm={2}>
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #2</Item>
                    </Grid>
                    <Grid item xs={3.2} sm={2}>
                        <Item style={{  wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #3</Item>
                    </Grid>
                    <Grid item xs={3.2} sm={2}>
                        <Item style={{  wordWrap: "break-word",backgroundColor: '#ff7700', borderRadius: 20 }}>Definitiva</Item>
                    </Grid>
                </Grid>
                <div>
                    <Grid container spacing={1} columns={16} border={1} alignItems="stretch" sx={{ height: 370 }}>
                        <Grid item xs={3.2} sm={2.8} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item  style={{  wordWrap: "break-word",backgroundColor: '#97CEEB', borderRadius: 20 }}>Codigo #</Item>
                                </Grid>
                                
                                <Materias/>

                            </Item>
                        </Grid>
                        <Grid item xs={3.2} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ backgroundColor: '#97CEEB', borderRadius: 20 }}>20%</Item>
                                </Grid>
                                <Nota1/>
                            </Item>
                        </Grid>
                        <Grid item xs={3.2} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ backgroundColor: '#97CEEB', borderRadius: 20 }}>35%</Item>
                                </Grid>
                                <Nota2/>
                            </Item>
                        </Grid>
                        <Grid item xs={3.2} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ backgroundColor: '#97CEEB', borderRadius: 20 }}>45%</Item>
                                </Grid>
                                <Nota3/>
                            </Item>
                        </Grid>
                        <Grid item xs={3.2} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item  style={{  wordWrap: "break-word", backgroundColor: '#97CEEB', borderRadius: 20 }}>Definitiva</Item>
                                </Grid>
                                <Definitiva/>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    );
}
