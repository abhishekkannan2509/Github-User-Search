import { Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { Search } from '@mui/icons-material';
import { defaultSearch, ISearch } from '../../types'


const SearchBar = (props:{onSearch:(text: string) => Promise<void>}) => {
  const onSearch = props.onSearch;


  const [SearchText, setSearchText] = useState('')
  useEffect(() => {
    getData()
  }, [SearchText])

  const getData = ()=>{
    onSearch(SearchText);
  }
  const handleInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const text = e.target.value;
    setSearchText(text);
  }
    return (
  //  <TextField id="outlined" onChange={handleInput} label="Outlined" variant="outlined" />
  <Container maxWidth='md' sx={{display: 'flex',
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: 'center',
  position: "relative",
  marginTop: "20px",
  marginBottom: "20px"
}}>
   <TextField
        label="Search github users" onChange={handleInput} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color='primary'/>
            </InputAdornment>
          ),
        }} variant='standard'/>
        </Container>
  )
}

export default SearchBar