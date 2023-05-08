import * as React from 'react';
import { Container } from '@mui/material';
import ContPeque from './ContPeque';
import AutoGrid from './GRID';
export default function Container1() {
    return (
        <Container maxWidth="lg"
            sx={{
                borderRadius: "12px",
                position: "relative",
                maxWidth: '100vw !important',
                pb: 69,
                boxShadow: 6,
                border: 4,
                height: '100vh'
            }}
        >
            <ContPeque />
            <AutoGrid />
        </Container>
    );
}