import { Box, Typography } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard';
import MainNavbar from './MainNavbar';
import { useStateValue } from '../context/StateProvider';
import Home from './Home';
import { RequireAuth } from '../context/RequireAuth';
import Footer from './Footer';

const Body = () => {
    const [{user}, dispatch] = useStateValue();

    const Container = styled('div')(()=>({
        width: 'calc(100% - 55px)',
        '@media (max-width: 700px)': {
            width: 'calc(100% - 40px)',
        }
    }))
  return (
    <>
    {
      !user &&
      <>
      <Box Box sx={{backgroundColor:'green', color:'white', height:'2.5vh',display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Typography fontWeight={550}> A complete solution to your <strong>Farming needs</strong></Typography>           
      </Box>
      <Navbar />
      </>
    }
     
    <Container>
      <Routes>
      <Route exact path='/' element={<Home />}/>

      <Route element={<RequireAuth />}>
        <Route exact path='/dashboard' element={<Dashboard />}/>
      </Route>
      
    </Routes>
    </Container>

    {
      !user &&
      <Footer />
    }
    </>
  )
}

export default Body