import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor:"#8b8b8b",
    padding: theme.spacing(1),
}));

export default function TituloDatosPersonales() {
    return <Div>{"Datos Personales"}</Div>;
}