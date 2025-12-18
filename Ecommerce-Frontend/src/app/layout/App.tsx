import { useState } from "react";
import {Box, Container, CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [darkmode,setDarkMode] = useState(false);
  const palleteType = darkmode ? 'dark' : 'light'
  const theme = createTheme({
    palette : {
      mode : palleteType,
      background:{
        default:(palleteType==='light') ? '#eaeaea' : '#121212'
      }
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar toggledarkmode={toggleDarkMode} darkmode={darkmode}/>
    <Box sx={{minHeight:'100vh' , 
    background:darkmode?'radial-gradient(circle,#1e3aBa,#111B27)':'radial-gradient(circle,#baecf9,#f09f9ff)',py:6
    }}>
    <Container maxWidth='xl' sx={{mt:14}}>
      <Outlet />
    </Container>
    </Box>
      
    </ThemeProvider>
  )
}

export default App
