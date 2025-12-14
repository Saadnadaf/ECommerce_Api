import { useEffect, useState } from "react"
import type { Product } from "../Models/Product";
import Catalog from "../../features/catalog/Catalog";
import {Box, Container, CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import Navbar from "./Navbar";

function App() {
  const [products , setProducts] = useState<Product[]>([]);
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

  useEffect(()=>{
    fetch('https://localhost:5001/api/products').then(response => response.json()).then(data => setProducts(data))
  },[])
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar toggledarkmode={toggleDarkMode} darkmode={darkmode}/>
    <Box sx={{minHeight:'100vh' , 
    background:darkmode?'radial-gradient(circle,#1e3aBa,#111B27)':'radial-gradient(circle,#baecf9,#f09f9ff)',py:6
    }}>
    <Container maxWidth='xl' sx={{mt:14}}>
      <Catalog products={products}/>
    </Container>
    </Box>
      
    </ThemeProvider>
  )
}

export default App
