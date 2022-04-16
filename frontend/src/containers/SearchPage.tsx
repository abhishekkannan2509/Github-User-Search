
import { ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { serialize } from 'v8'
import Header from '../components/Header/Header'
import Results from '../components/Results/Results'
import SearchBar from '../components/SearchBar/SearchBar'
import { SearchPageTheme } from '../styles/styles'
import { debounce } from '@mui/material/utils'

import { defaultSearch, ISearch } from '../types'
import { APIDetails } from '../constants'

// import lodash from 'lodash'


const SearchPage = () => {
  const [Search, setSearch] = useState(defaultSearch);


  // const onSearchDebounce = debounce(onSearch, 200),
  const onSearch = async (text: string) => {
    if (text.length >= 3) {
      const value = localStorage.getItem(`search:${text}`)
      if (typeof value === 'string') {
        const parse = JSON.parse(value)
        setSearch(parse)
      }
      else{
      const params = new URLSearchParams();
      params.append('page', '1');
      params.append('per_page', '10');
      params.append('q', text)

     let res =  await axios.post<ISearch>(APIDetails.SEARCH_URL, params);
     if(res.data.items){
     setSearch(res.data)
      localStorage.setItem(`search:${text}`, JSON.stringify(res.data))
     }
     else{
       alert('api limit wait for a couple of minutes')
     }
    }}
    else {
      setSearch(defaultSearch);
    }
  }
  return (

    <ThemeProvider theme={SearchPageTheme}>
      <Header />
      <SearchBar onSearch={onSearch} />

      <Results search={Search} />

    </ThemeProvider>

  )
}

export default SearchPage