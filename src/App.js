import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import './App.css';
import logo from "./assets/ifd_logo.png"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} alt="ifd-logo" height={200} width={200} fit="cover"/>
        <Box>
          <Typography variant="h3">INCLUSIVE FLORAL DESIGNS</Typography>
          <Typography variant="h5">FLORES-FLOWERS</Typography>
          <Typography variant="h6">NOVELTIES</Typography>
        </Box>
        <p>under construction</p>
        <small>dev: paolo bugarin</small>
        <a href="https://paolobugarin.com/" target='_blank' style={{marginTop: "3em", textDecoration: "none", color: "gray"}}>paolobugarin.com</a>
      </header>
    </div>
  );
}

export default App;
