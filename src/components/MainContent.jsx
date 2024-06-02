import React from 'react'
import Image from 'mui-image'
import { Box, Typography, Button } from '@mui/material'
import logo from "../assets/ifd_logo.png"
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkComponent from './LinkComponent';
import Footer from './Footer';

const MainContent = () => {
  return (
    <Box
      sx={{
        my: {xs: 5, sm: 8, md: 10},
        py: {xs: 3, sm: 5, md: 6},
        px: {xs: 3, sm: 5, md: 8},
        borderRadius: "1em",
        border: 1,
        borderColor: "rgba(255,255,255,.15)",
        backdropFilter: "blur(2px) brightness(110%)",
        backgroundColor: "rgba(255,255,255,.05)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <Box
        sx={{
        height: {xs: 60, sm: 120, md: 130},
        width: "auto",
        mb: 2,
        }}
      >
        <Image 
        src={logo} 
        alt="ifd-logo" 
        fit="scale-down"
        duration={100}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          mb: 6
        }}
      >
        <Typography 
          variant="h3" 
          sx={{
              fontFamily: "Oswald", 
              fontWeight: 500, 
              letterSpacing: {xs: -.5, sm: 1.2, md:1.5},
              color: "#352e37",
              textShadow: "2px 3px 4px rgba(0,0,0,0.1);",
              fontSize: {xs: "1.6em", sm: "2em", md: "2.2em"}
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
        <LinkComponent 
          title="Home Page" 
          link="https://ifdflowersla.com/"
          icon={
            <LanguageIcon 
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: "1.4em",
                color: "#EE8415"
              }}
            />
          }
        />
        <LinkComponent 
          title="Instagram" 
          link="https://www.instagram.com/ifdflower48/"
          icon={
            <InstagramIcon 
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: "1.4em",
                color: "#DD6122"
              }}
            />
          }
        />
        <LinkComponent 
          title="Facebook" 
          link="https://www.facebook.com/inclusivefloralLA"
          icon={
            <FacebookIcon 
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: "1.4em",
                color: "#1C6CCE"
              }}
            />
          }
        />
      </Box>
      <Footer/>
    </Box>
  )
}

export default MainContent