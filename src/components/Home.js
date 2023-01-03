import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import brokenCircle from '../assets/Asset 3.png'
import pakistan from '../assets/pakistan.png'
import '../App.css'





function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box className='home-farm'>
                <Typography variant='h1' fontWeight={550} sx={{ color: 'white' }}>X2 CROP</Typography>
                <Typography variant='h4' sx={{ color: 'white' }}>Growing solution for a thriving agriculture solution.</Typography>
                <Paper elevation={5} className='home-div' sx={{ width: '70vw', borderRadius: '20px', display: 'flex', marginTop: '100px', height: '45%', backgroundColor: 'white' }}>
                    
                    <Box sx={{ borderRight: '1px solid black', width: '33.25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <img src={brokenCircle} alt='broken' width={75} height={75} />
                        <Typography sx={{ color: 'black', fontSize: '20px', fontWeight: '550' }} >Suitable Sites/Location <br /> and Agricultural Offices</Typography>
                        <button className='learn-more'>learn more</button>
                    </Box>

                    <Box sx={{ borderRight: '1px solid black', width: '33.25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={brokenCircle} alt='broken' width={75} height={75} />
                        <Typography sx={{ color: 'black', fontSize: '20px', fontWeight: '550' }} >Data Analytics</Typography>
                        <button className='learn-more'>learn more</button>
                    </Box>

                    <Box sx={{ width: '33.25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={brokenCircle} alt='broken' width={75} height={75} />
                        <Typography sx={{ color: 'black', fontSize: '20px', fontWeight: '550' }} >Data Analytics</Typography>
                        <button className='learn-more'>learn more</button>
                    </Box>

                </Paper>
            </Box>

            <Box className='vision' p={3} sx={{ height: 'max-content', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', justifyContent: 'center',  }}>
                <Typography sx={{ borderBottom: '3px solid green' }} variant='h3' fontWeight={550} >Our Vision</Typography>
                <Typography variant='h6' sx={{ width: '70%', marginTop: '30px' }} >
                    The vision behind creating this website is to provide a platform for farmers, agribusinesses, and consumers to connect and engage with each
                    other. The website aims to support and promote sustainable agriculture by providing valuable information and resources on farming tech—
                    niques, market trends, and the latest innovations in the industry. By fostering a sense of community and collaboration, the website seeks to em—
                    power farmers to improve their practices and maximize their yields, while also enabling consumers to make informed choices about the food
                    they buy and eat. Ultimately, the goal of the agriculture website is to support the growth and success of the agriculture industry, while also con-
                    tributing to the health and well-being of individuals and communities around the world.
                </Typography>
            </Box>


            <Box sx={{ height: '550px', backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'white',}}>
                <Box sx={{width:'50%', textAlign:'center'}}>
                    <img src={pakistan} alt='pak' />
                </Box>
                <Box p={4} sx={{width:'50%', color:'black' }}>
                    <Typography fontSize={'40px'} fontWeight={550} sx={{borderBottom:'3px solid green'}} >Agriculture in pakistan</Typography>
                    <Typography mb={2} fontSize={'21px'}  sx={{ marginTop: '30px' }} >
                    The vision behind creating this website is to provide a platform for farmers, agribusinesses, and consumers to connect and engage with each
                    other. The website aims to support and promote sustainable agriculture by providing valuable information and resources on farming tech—
                    niques, market trends, and the latest innovations in the industry. By fostering a sense of community and collaboration, the website seeks to em—
                    power farmers to improve their practices and maximize their yields, while also enabling consumers to make informed choices about the food
                    they buy and eat. Ultimately, the goal of the agriculture website is to support the growth and success of the agriculture industry, while also con-
                    tributing to the health and well-being of individuals and communities around the world.
                </Typography>
                <button className='learn-more-footer'>Learn more</button>
                </Box>
            </Box>

        </Box>
    )
}

export default Home