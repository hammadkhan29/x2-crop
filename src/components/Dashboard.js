import { Box } from '@mui/material'
import React from 'react'
import MainNavbar from './MainNavbar'
import Sidebar from './Sidebar'
import styled from "styled-components";
function Dashboard() {

  const Container = styled("div")(() => ({
    width: "calc(100% - 55px)",
    "@media (max-width: 700px)": {
      width: "calc(100% - 40px)",
    },
  }));
  return (
    <>
    {/* <Box sx={{ display: "flex", width: "inherit", flexDirection: "column" }}>
    <MainNavbar />
      <Box sx={{ display: "flex", flexDirection: "row", width: '100%' }}>
          <Sidebar />
          </Box>
    </Box> */}
    <MainNavbar />
    <Box sx={{display:'flex'}} >
      <Sidebar />
      <Container>
        
      </Container>
    </Box>
    </>
  )
}

export default Dashboard