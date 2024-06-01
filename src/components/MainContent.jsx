import React from 'react'
import Image from 'mui-image'
import { Box, Typography, Button } from '@mui/material'
import logo from "../assets/ifd_logo.png"
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkComponent from './LinkComponent';

const MainContent = () => {
  return (
    <Box>
      <Box
        sx={{
        height: {xs: 70, sm: 120, md: 130},
        width: "auto",
        mb: 2.5
        }}
      >
        <Image 
        src={logo} 
        alt="ifd-logo" 
        fit="scale-down"
        duration={100}
        />
      </Box>
      <Box>
        <Typography 
          variant="h3" 
          sx={{
              fontFamily: "Oswald", 
              fontWeight: 500, 
              letterSpacing: {xs: -.5, sm: 1.2, md:1.5},
              color: "#352e37",
              textShadow: "2px 3px 4px rgba(0,0,0,0.1);",
              fontSize: {xs: "1.4em", sm: "2em", md: "2.2em"}
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
            fontSize: {xs: ".85em", sm: "1.25em", md: "1.4em"}
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
            fontSize: {xs: ".7em", sm: "1em", md: "1.2em"}
          }}
        >NOVELTIES</Typography>
      </Box>
      <Box mt={3}>
        <LinkComponent title="Home Page" icon={<LanguageIcon/>}/>

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
  )
}

export default MainContent