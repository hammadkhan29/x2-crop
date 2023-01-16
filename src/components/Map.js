import { Box } from '@mui/system';
import React from 'react'
import { useTitle, useTitleContainer } from './GeneralComponents'
import MainNavbar from './MainNavbar';
import Sidebar from './Sidebar';






function Map() {


    const Title = useTitle();
    const TitleContainer = useTitleContainer();
  return (
    <>
    <MainNavbar />
    <Box sx={{ display: 'flex', width: '100vw' }} >
        <Sidebar />
        <Box sx={{ width: 'calc(100% - 62px)', maxHeight: "calc(100vh - 55px)" }}>
            <TitleContainer style={{ marginBottom: "30px" }}>
                <Title>Suitable sites and locations</Title>
            </TitleContainer>

        <Box p={10} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/dc1be72b-2a31-45cc-b2f3-c2d221f7a5c8/page/MNkCD"  style={{border:"0"}} allowfullscreen></iframe>
        </Box>




        </Box>
        </Box>
    </>
  )
}

export default Map