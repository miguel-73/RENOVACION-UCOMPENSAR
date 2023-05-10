import * as React from 'react';
import { Box, Container } from '@mui/material';
import ContPeque from './ContPeque';
import AutoGrid from './GRID';
export default function Container1() {
    return (
        <Box maxWidth="lg"
            sx={{
                borderRadius: "12px",
                 pb: 4,
                 border: 2,
                 boxShadow: "12px 13px 5px rgba(0, 0, 0, 0.3)"
             }}
        >
            <ContPeque />
            <AutoGrid />
        </Box>
    );
}