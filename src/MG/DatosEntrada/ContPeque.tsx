import { Container } from '@mui/material';
import React from 'react';
export default function ContPeque() {
    return (
        <>
            <Container sx={{
                border: 1,
                boxShadow: 9,
                pb: 3,
                left: "center",
                top: 5,
                maxWidth: '104vw !important',
                position: "relative",
                borderRadius: "12px",
                background: "linear-gradient(90deg, rgba(25,94,13,1) 25%, rgba(17,24,46,1) 51%, rgba(46,138,246,1) 71%)",
                height: "40px"
            }}
            >datos personales
            </Container>
        </>
    );
}