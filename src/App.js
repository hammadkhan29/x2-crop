import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Box, Typography } from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Box sx={{backgroundColor:'#d0db97', color:'#4c6d0c', height:'2.5vh',display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Typography fontWeight={550}> A complete solution to your <strong>Farming needs</strong></Typography>           
      </Box>
    <Navbar />
      <Routes>
      {/* <Route exact path='/' element={<Home />}/>
      <Route exact path='/interview' element={<Interview />}/>
      <Route exact path='/result' element={<Results />}/> */}
      <Route exact path='/' element={<Home />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
