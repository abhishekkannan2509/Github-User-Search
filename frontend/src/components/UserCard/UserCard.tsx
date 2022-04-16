import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import MailIcon from '@mui/icons-material/Mail';
import React, { useEffect, useState } from 'react'
import { Mail } from '@mui/icons-material';
import { Button } from '@mui/material';
import { defauldUserDetails, IUserDetails } from '../../types'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { APIDetails } from '../../constants';



const UserCard = (props: { login: string }) => {

    const navigate = useNavigate();
    const [user, setuser] = useState(defauldUserDetails);
    const [login, setlogin] = useState(props.login)
    const onSearch = async (text: string) => {
        const value = localStorage.getItem(`user:${text}`)
        if (typeof value === 'string') {
          const parse = JSON.parse(value)
          setuser(parse)
        }
        else{
            const params = new URLSearchParams();
            params.append('user', text)
             let res =await axios.post<IUserDetails>(APIDetails.USER_URL, params);
             if(res.data.login){
             setuser(res.data);
             localStorage.setItem(`user:${text}`, JSON.stringify(res.data))}
             else{
                setuser(defauldUserDetails);
             }
            }}
    useEffect(() => {
        onSearch(login)
    }, [login])
    if(user.login!=""){
        return (
            <Container maxWidth="sm" className='userbox3'>
                <Paper elevation={0} variant='outlined'>
                    <Box padding={2} className='userbox1'>
                        <img src={user.avatar_url}
                            className='useravatar' />
                        <Box padding={2} className='userbox2'>
                            <Typography variant='h4'>
                                {user.name||"-"}
                            </Typography>
                            <Typography variant='h5'>
                                {user.login}
                            </Typography>
                        </Box>
                    </Box>
                    <Box padding={2} >
                        <Typography variant='h6'>
                            {user.bio}
    
                        </Typography>
                    </Box>
    
    
                    <Box padding={2} className='userbox3'  maxWidth="sm">
                        <Box>
                            <Typography variant='h4'>
                                {user.public_repos}
                            </Typography>
                            <Typography variant='h6'>
                                repos
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4'>
    
                                {user.following}
                            </Typography>
                            <Typography variant='h6'>
                                following
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4'>
                                {user.followers}
                            </Typography>
                            <Typography variant='h6'>
                                followers
                            </Typography>
                        </Box>
                    </Box>
                    <Box padding={2} className='userbox4'>
                        {user.location && <Box><LocationOnIcon color='primary' /><Typography variant='h6'>
                            {user.location}
                        </Typography></Box>}
                        {user.email && <Box>
                            <Mail color='primary' />
                            <Typography variant='h6'>
                                {user.email}
                            </Typography>
                        </Box>}
    
                    </Box>
                    <Box>
                        <Button variant="outlined" onClick={() => {// Simulate a mouse click:
                            navigate('/')
                        }}>back to search</Button>
                        <Button variant="contained" onClick={() => {// Simulate a mouse click:
                            window.location.href = user.html_url;
                        }}>visit github</Button>
    
                    </Box>
    
                </Paper>
            </Container>
        )
    }
    else {
        return(
            <Container maxWidth="sm" className='userbox3'>
            <Paper elevation={0} variant='outlined'>
                <Box padding={2} className='userbox1'>
                <Typography variant='h4'>
                              user not found
                            </Typography>
                            <Box>
                        <Button variant="outlined" onClick={() => {// Simulate a mouse click:
                            navigate('/')
                        }}>back to search</Button>
                        </Box>
                    </Box></Paper></Container>
        )
    }
    
}

export default UserCard