import React from 'react'
import { AppBar, Box, Button, ButtonGroup, Typography } from '@mui/material'
import Logo from '../assets/150x150logo.png'
import LoginModal from './LoginModal'
import { useStateValue } from '../context/StateProvider'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
function Navbar() {

    // const [{open}, dispatch ] = useStateValue();
    const [{open, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const handleOpen = () => {
        dispatch({
            type: 'OPENLOGINDIALOG'
        });
    }

    const handleClose = () => {
        dispatch({
            type: 'CLOSELOGINDIALOG',
        })
    }

    const handleAuthentication = () => {
        if(user) {
            auth.signOut()
            localStorage.removeItem('User')
            navigate('/')
        }

    }
    console.log(!user)


  return (
    <>
        <Box pl={4} pr={4} pt={2} pb={2} sx={{display:'flex', alignItems:'center', justifyContent:'space-around',backgroundColor:'white', color:'black', height:'10vh'}}>
            <Box > 
                {/* <Button sx={{color:"black"}} variant='text'>Weather</Button> */}
                <Button variant='text' sx={{color:"black"}} >Blogs</Button>
                <Button variant='text' sx={{color:"black"}} >Analytics</Button>
                <Button variant='text' sx={{color:"black"}} >Sites/Locations</Button>
            </Box>

            <Box mr={20}>
                <img src={Logo} alt='logo' height={125} width={125} />
            </Box>
            <Box>
                {
                    !user ?
                    <ButtonGroup variant='text' sx={{color:"black"}}>
                    <Button sx={{color:"black"}} onClick={handleOpen} >
                        Login
                    </Button>
                    <Button sx={{color:"black"}} onClick={handleOpen}>
                        Register
                    </Button>
                </ButtonGroup>  :
                <Button sx={{color:"black"}} onClick={handleAuthentication}>
                        Logout
                    </Button>
                }
                
            </Box>
            
            {/* <AppBar sx={{backgroundColor:'#d0db97', color:'black', height:'13vh'}} position='static'>
                <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <Typography> A complete solution to your Farming problem</Typography>           
                </Box>
            </AppBar> */}
        </Box>
        <LoginModal open={open} handleClose={handleClose}/>
    </>
  )
}

export default Navbar