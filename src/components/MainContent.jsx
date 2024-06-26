import React from 'react'
import Image from 'mui-image'
import { Box, Typography, Button } from '@mui/material'
import logo from "../assets/ifd_logo.png"
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkComponent from './LinkComponent';
import Footer from './Footer';

import banner from "../assets/ifd_banner.png"


const MainContent = () => {
  return (
    <Box
      sx={{
        my: {xs: 3, sm: 8, md: 10},
        mx: 1,
        py: {xs: 3, sm: 5, md: 6},
        px: {xs: 3, sm: 5, md: 8},
        borderRadius: "1em",
        border: 1,
        borderColor: "rgba(255,255,255,.15)",
        backdropFilter: "blur(1px) brightness(102%)",
        backgroundColor: "rgba(255,255,255,.15)",
      }}
    >

      <Box
        sx={{
          width: "100%",
          mb: 6
        }}
      >
          <Image
            src={banner}
            alt="ifd-logo" 
            fit="scale-down"
            duration={500}
          />
        <Box sx={{width: "80%", height: "1px", backgroundColor: "black", opacity: ".2", mt: 1.5, mb: 1, mx: "auto"}}></Box>
        <Typography 
          variant="h5" 
          sx={{
            mt: {xs: .25, sm: .5, md: 1}, 
            opacity: .9,
            fontFamily: "Forum", 
            fontWeight: 400, 
            letterSpacing: {xs: 1, sm: 1.2, md:1.5},
            color: "#473d49",
            // textShadow: "2px 3px 4px rgba(80,80,80,0.15);",
            fontSize: {xs: ".85em", sm: "1.25em", md: "1.4em"}
          }}
        >FLORES-FLOWERS</Typography>
        <Typography 
          variant="h6" 
          sx={{
            mt: {xs: .15, sm: .25, md: .25}, 
            opacity: .75,
            fontFamily: "Forum", 
            fontWeight: 500, 
            letterSpacing: {xs: 1.25, sm: 1.25, md:1.5},
            color: "#594d5c",
            // textShadow: "2px 3px 4px rgba(80,80,80,0.15);",
            fontSize: {xs: ".65em", sm: "1em", md: "1.1em"}
          }}
        >NOVELTIES</Typography>
      </Box>
      <Box mt={{xs: 8, sm: 10, md: 12, }}>
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