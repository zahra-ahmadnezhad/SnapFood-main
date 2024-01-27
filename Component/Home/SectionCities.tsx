import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import { DataSectionCities } from '../../Data/DataSectionCities'
const SectionCities = () => {
  return (
    <Grid container p={"2rem"} mt={"2rem"} bgcolor={"rgb(255, 255, 255)"} dir={"rtl"} borderTop={"1px solid #EDEFF0"}   sx={{ width: { xs: "12", lg: "11" }, display: { sm: "flex", xs: "none" } }} display={"flex"} justifyContent={"space-around"}>
       <Grid xs={12} mb={"2rem"} ><Typography variant='h3'>{"اسنپ‌فود در شهرهای ایران"}</Typography></Grid>
       {
        DataSectionCities.map((item:any,index:any) =>(
            <Grid key={index} md={1} pt={2} flexBasis={"16.6667%"} sx={{cursor:"pointer" , maxWidth:"16.6667%" }} ><Typography variant='body2'>{item.name}</Typography></Grid>
        ))
       }
      
    </Grid>
  )
}

export default SectionCities