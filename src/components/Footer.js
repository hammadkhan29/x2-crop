import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box p={5} sx={{height:'20vh', backgroundColor:'#d0db97', display:'flex', justifyContent:'space-around'}}>
        <Box sx={{width:'20%'}} >
            
        </Box>
        <Stack direction={'column'}>
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <LocationOnIcon />
                <Typography variant='subtitle2' >NED Universtiy of engineering and technology</Typography>
            </Box>
            <Box mt={2} sx={{display:'flex', flexDirection:'row'}}>
                <EmailIcon />
                <Typography ml={1} variant='subtitle2' >x2crops@.gmail.com</Typography>
            </Box>
        </Stack>
        <Box sx={{}} >
            <Stack direction={'column'}>
                <Typography variant='subtitle2'>About US</Typography>
                <Typography variant='subtitle2'>FAQ</Typography>
                <Typography variant='subtitle2'>Analytics</Typography>
                <Typography variant='subtitle2'>Sites/Locations</Typography>
                <Typography variant='subtitle2'>Login/Register</Typography>
            </Stack>
        </Box>
    </Box>
  )
}

export default Footer