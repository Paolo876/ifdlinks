import { Box, Typography, Button } from '@mui/material';
import Image from 'mui-image';
import './App.css';
import logo from "./assets/ifd_logo.png"
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <div className="App">
      <Box className="App-header" component="header">
        <Box
          sx={{
            height: {xs: 70, sm: 120, md: 150},
            width: "auto"
          }}
        >
          <Image 
            src={logo} 
            alt="ifd-logo" 
            fit="cover"
            duration={100}
          />
        </Box>

        <Box>
          <Typography 
            variant="h3" 
            sx={{
              fontFamily: "Oswald", 
              fontWeight: 400, 
              letterSpacing: 1.5,
              color: "#473d49",
              textShadow: "2px 3px 4px rgba(0,0,0,0.15);"
            }}
          >INCLUSIVE FLORAL DESIGNS</Typography>
          <Typography 
            variant="h5" 
            sx={{
              fontFamily: "Montserrat", 
              fontWeight: 400, 
              letterSpacing: 1.25, 
              mt: 1.25, 
              color: "#695e6c"
            }}
          >FLORES-FLOWERS</Typography>
          <Typography 
            variant="h6" 
            sx={{
              fontFamily: "Montserrat", 
              fontWeight: 200, 
              letterSpacing: 1.25, 
              color: "#7a707c"
            }}
          >NOVELTIES</Typography>
        </Box>
        <Box>
          <Box>
            <Button variant="outlined" startIcon={<LanguageIcon/>}>Website</Button>
          </Box>
          <Box>
            <Button variant="outlined" startIcon={<FacebookIcon/>}>Facebook</Button>
          </Box>
          <Box>
            <Button variant="outlined" startIcon={<InstagramIcon/>}>Instagram</Button>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography>1802 N. Broadway <Box component="br"></Box>Los Angeles, CA 90031</Typography>
          </Box>
          <Box>
            <PhoneIcon/>
            <Typography>(323) 332 - 2280</Typography>
          </Box>
          <Box>
            <PhoneIcon/>
            <Typography>(562) 753 - 3215</Typography>
          </Box>
          <Box>
            <EmailIcon/>
            <Typography>ifdflowers48@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
