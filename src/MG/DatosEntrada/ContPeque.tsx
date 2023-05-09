import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
export default function ContPeque() {
    return (
        <>
            <Container sx={{
                border: 0,
                boxShadow: 9,
                pb: 3,
                left: "center",
                top: 5,
                maxWidth: '104vw !important',
                position: "relative",
                borderRadius: "20px",
                background: " linear-gradient(90deg, rgba(47,217,17,1) 3%, rgba(25,94,13,1) 26%, rgba(17,24,46,1) 56%, rgba(46,138,246,1) 80%);",
                height: "40px"
            }}
            >
                <Typography variant="h6" sx={{
            position: "absolute",
            top: "5px",
            left: "3%",
            color: "#ffffff"
        }}>
            Datos De La Entrada Del Bien 
        </Typography>
            </Container>
        </>
    );
}