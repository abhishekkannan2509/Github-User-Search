import { Container, Typography } from '@mui/material'
import React from 'react'
const Header = () => {
  return (
    <Container maxWidth='md' sx={{display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center',
      position: "relative",
      marginTop: "20px",
      marginBottom: "20px"
    }}>
      <Typography variant='h1'>
      Search Github users
      </Typography>
    </Container>
  )
}

export default Header