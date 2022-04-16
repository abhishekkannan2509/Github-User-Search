import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import { IItems, ISearch } from '../../types'
import ResultCard from './ResultCard'

const Results = (props:{search:ISearch}) => {
  const results = props.search.items;
  console.log(results);
  return (<Container maxWidth="lg" sx={{display: 'flex',
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: 'center',
  position: "relative",
  marginTop: "20px",
  marginBottom: "20px"
}}>
    <Grid container spacing={3} >
  {results.map((item:IItems)=>(
      <Grid item lg={2.4} md={3} sm={6} xs={6}>
      <ResultCard key = {item.id} result={item}/>
      </Grid>
  ))}

</Grid>
</Container>
  )
}

export default Results