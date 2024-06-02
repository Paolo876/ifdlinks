import React from 'react'
import { Box, Typography } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const textStyles = {
  fontSize: {xs: ".8em", sm: ".9em", md: "1em"},
  fontFamily: "Montserrat",
  fontWeight: 500,
  opacity: .7,
  letterSpacing: .25,
}

const boxStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  color: "#352e37",
  mt: 2,
  
}

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: "1.2em",
  color: "#063F57",
}


const Footer = () => {
  return (
    <Box mt={8}>
      <Box sx={boxStyles}>
        <LocationOnIcon style={iconStyles}/>
        <Box sx={{borderLeft: 1, borderColor: "rgba(0,0,0,0.15)", pl: 1}} align="left">
          <Typography sx={textStyles}>
            1802 N. Broadway <Box component="br"></Box>Los Angeles, CA 90031
          </Typography>
        </Box>
      </Box>
      <Box sx={boxStyles}>
        <PhoneIcon style={iconStyles}/>
        <Box sx={{borderLeft: 1, borderColor: "rgba(0,0,0,0.15)", pl: 1}} align="left">
          <Typography sx={textStyles}>(323) 332 - 2280</Typography>
          <Typography sx={textStyles}>(562) 753 - 3215</Typography>
        </Box>
      </Box>
      <Box sx={boxStyles}>
        <EmailIcon style={iconStyles}/>
        <Box sx={{borderLeft: 1, borderColor: "rgba(0,0,0,0.15)", pl: 1}} align="left">
          <Typography sx={textStyles}>ifdflowers48@gmail.com</Typography>
        </Box>
      </Box>
    </Box>  
  )
}

export default Footer