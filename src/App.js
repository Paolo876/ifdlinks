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
            width: "auto",
            mb: 2.5
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
              fontFamily: "Montserrat", 
              fontWeight: 500, 
              letterSpacing: {xs: -.5, sm: 1.2, md:1.5},
              color: "#352e37",
              textShadow: "2px 3px 4px rgba(0,0,0,0.1);",
              fontSize: {xs: "1.3em", sm: "1.8em", md: "1.8em"}
            }}
          >INCLUSIVE FLORAL DESIGNS</Typography>
          <Typography 
            variant="h5" 
            sx={{
              mt: {xs: .25, sm: .5, md: 1}, 
              opacity: .9,
              fontFamily: "Montserrat", 
              fontWeight: 400, 
              letterSpacing: {xs: 1, sm: 1.2, md:1.5},
              color: "#473d49",
              textShadow: "2px 3px 4px rgba(0,0,0,0.05);",
              fontSize: {xs: "1em", sm: "1.15em", md: "1em"}

            }}
          >FLORES-FLOWERS</Typography>
          <Typography 
            variant="h6" 
            sx={{
              mt: {xs: .15, sm: .25, md: .7}, 
              opacity: .9,
              fontFamily: "Montserrat", 
              fontWeight: 300, 
              letterSpacing: {xs: 1.25, sm: 1.25, md:1.5},
              color: "#594d5c",
              textShadow: "2px 3px 4px rgba(0,0,0,0.05);",
              fontSize: {xs: ".75em", sm: ".9em", md: ".9em"}
            }}
          >NOVELTIES</Typography>
        </Box>
        <Box mt={3}>
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
