import { Box, Button } from '@mui/material'
import React from 'react'

export const HomePage:React.FC<{}> = () => {
  return (
    <Box sx={{ mt:9 }} maxWidth="xl">
      <Button fullWidth variant='contained'>
        Hola mundo
      </Button>
    </Box>
  )
}
