import React from 'react'
import { Typography, Box, ButtonBase, Button } from '@mui/material'


const LinkComponent = ({title, icon, link}) => {


  return (
    <Box sx={{mb: {xs: 1.75, sm: 2, md: 2.25}}}>
      <ButtonBase 
        variant="contained"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,.65)",
          color: "#473d49",
          borderRadius: "1.5em",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "left",
          gap: 3,
          textTransform: "none",
          py: {xs: .75, sm:1},
          px: {xs: 1.25, sm:1.5},
          position: "relative",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          border: 2,
          borderColor: "rgba(100, 100, 111, 0.7)",
        }}
        href={link}
        
      >
        <Box sx={{width: "fit-content", position: "absolute", fontSize: {xs: "1.15em", sm: "1.2em", md: "1.3em"},}}>
          {icon}
        </Box>
        <Box sx={{alignSelf: "center", flex: 1}}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 500,
              fontFamily: "Oswald",
              letterSpacing: 1,
              fontSize: {xs: ".9em", sm: "1.2em", md: "1.3em"},
              
            }}
          >
            {title}
          </Typography>
        </Box>
      </ButtonBase>
    </Box>
  )
}

export default LinkComponent