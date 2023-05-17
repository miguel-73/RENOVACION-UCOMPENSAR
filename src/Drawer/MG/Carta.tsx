import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DividerStack() {
    return (
        <div>
            <Grid container spacing={2} border={0}>
                <Grid item xs={12} sm={4}>
                    <Item>
                        Estudiante
                        <div />
                        Miguel Angel Murcia Ocampo
                        <div />
                        miguelangelmurciaocampo73@gmail.com
                        <div />
                        CC:1006856855
                        <div />
                        TEL:3223780518
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Item>
                        Datos del programa
                        <div />
                        TÉCNICA PROFESIONAL EN OPERACIÓN Y MANTENIMIENTO DE BASES DE DATOS
                        <div />
                        Jornada (Nocturna)
                        <div />
                        Semestre 4
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

