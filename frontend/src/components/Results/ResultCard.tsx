import { ThemeProvider } from '@emotion/react'
import { createTheme, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import React from 'react'
import '../../app.css'
import { IItems } from '../../types'

const ResultCard = (props:{result:IItems}) => {
    const Item = props.result
    return (
       
        <a href={'/'+Item.login}>
            <Paper elevation={0} variant='outlined'>
                <Box padding={2}>
                <img src={Item.avatar_url}
                    className='avatar' />
                </Box>
                
                <Box padding={1}>    <Typography variant='h4'>
                    {Item.login}
                </Typography></Box>

            </Paper>
             </a>
    )
}

export default ResultCard