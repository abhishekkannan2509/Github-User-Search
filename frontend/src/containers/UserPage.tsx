import { ThemeProvider } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'
import UserCard from '../components/UserCard/UserCard'
import { UserPageTheme } from '../styles/styles'
import { useNavigate,useParams } from 'react-router-dom'
const UserPage = () => {

  const {login} = useParams();
  return (
    <ThemeProvider theme={UserPageTheme}>
          <Header/>
          <UserCard login={login!}/>
    </ThemeProvider>

  )
}

export default UserPage