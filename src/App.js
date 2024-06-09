import { Box, Typography } from '@mui/material';
import './App.css';
import bg from "./assets/bg.webp"
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
      {/* background pattern */}
      <Box 
        sx={{
          opacity: .075, 
          position: "absolute", 
          zIndex: -1, 
          height: "100vh", 
          width: "100vw", 
          background: `transparent url(${bg}) repeat scroll 0% 0%`,
          }}>
      </Box>
      {/* content */}
      <Box 
        className="App-header" 
        component="header"
      >
        <MainContent/>
      </Box>
      <Box>
        <Typography sx={{fontSize: {xs: ".6em", sm: ".75em", md: ".8em"}, fontFamily: "Montserrat", opacity: .75}}>© 2024 Inclusive Floral Designs LA, All rights reserved.</Typography>
      </Box>
    </div>
  );
}

export default App;
