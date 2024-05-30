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
        <Image src={logo} alt="ifd-logo" height={200} width={200} fit="cover"/>
        <Box>
          <Typography variant="h3">INCLUSIVE FLORAL DESIGNS</Typography>
          <Typography variant="h5">FLORES-FLOWERS</Typography>
          <Typography variant="h6">NOVELTIES</Typography>
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
