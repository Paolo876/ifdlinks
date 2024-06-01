import React from 'react'
import { Typography, Box, ButtonBase, Button } from '@mui/material'


const LinkComponent = ({title, icon}) => {
  return (
    <Box sx={{mb: 1.5}}>
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
          py: 1,
          px: 1.5,
          position: "relative",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          border: 2,
          borderColor: "rgba(100, 100, 111, 0.7)",
        }}

        
      >
        <Box sx={{width: "fit-content", position: "absolute"}}>
          {icon}
        </Box>
        <Box sx={{alignSelf: "center", flex: 1}}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              fontFamily: "Oswald",
              letterSpacing: 1,
              fontSize: {xs: "1.15em", sm: "1.2em", md: "1.4em"},
              
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