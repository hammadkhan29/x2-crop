import React from 'react'
import { AppBar, Box, Button, ButtonGroup, Typography } from '@mui/material'
import Logo from '../assets/farmer.jpg'

function Navbar() {
  return (
    <>
        <Box pl={4} pr={4} pt={2} pb={2} sx={{display:'flex', alignItems:'center', justifyContent:'space-around',backgroundColor:'white', color:'black', height:'10vh'}}>
            <Box > 
                {/* <Button sx={{color:"black"}} variant='text'>Weather</Button> */}
                <Button variant='text' sx={{color:"black"}} >Blogs</Button>
                <Button variant='text' sx={{color:"black"}} >Analytics</Button>
                <Button variant='text' sx={{color:"black"}} >Sites/Locations</Button>
            </Box>

            <Box>
                <img src={Logo} alt='logo' height={100} width={100} />
            </Box>
            <Box>
                <ButtonGroup variant='text' sx={{color:"black"}}>
                    <Button sx={{color:"black"}} >
                        Login
                    </Button>
                    <Button sx={{color:"black"}}>
                        Register
                    </Button>
                </ButtonGroup>  
            </Box>
            
            {/* <AppBar sx={{backgroundColor:'#d0db97', color:'black', height:'13vh'}} position='static'>
                <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <Typography> A complete solution to your Farming problem</Typography>           
                </Box>
            </AppBar> */}
        </Box>
    </>
  )
}

export default Navbar