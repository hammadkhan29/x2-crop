import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Box, Typography } from '@mui/material';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';
import { useStateValue } from './context/StateProvider';
import { auth } from './firebase';
import {RequireAuth} from './context/RequireAuth'
import styled from "styled-components";
import MainNavbar from './components/MainNavbar';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Blogs from './components/Blogs';
import Map from './components/Map';
// #4c6d0c
// #d0db97

function App() {

  const [{user}, dispatch] = useStateValue();
  

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type:'SETUSER',
          user: authUser
        });
        localStorage.setItem("User", authUser.email)
      } else {
        dispatch({
          type:'SETUSER',
          user: null
        });
      }
    })
  },[])
  console.log(user)

  const SubContainer = styled("div")(() => ({
    display: "flex",
  }));

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

    {/* <Navbar /> */}
     
    
      <Routes>
      <Route exact path='/' element={<Home />}/>

      <Route element={<RequireAuth />}>
        <Route exact path='/dashboard' element={<Dashboard />}/>
        <Route exact path='/blogs' element={<Blogs />}/>
        <Route exact path='/locations' element={<Map />}/>
        
      </Route>
      
    </Routes>
    {
      !user &&
      <Footer />
      
    } 


   {/* <MainNavbar />
      <SubContainer>
        <Sidebar />
        <Body />
      </SubContainer> */}
    </>
  );
}

export default App;
