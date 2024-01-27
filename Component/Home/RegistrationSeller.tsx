import React from 'react'
import Image from 'next/image'
import Home from "../../Assets/Images/vendor_pic.png"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import FoundationIcon from '@mui/icons-material/Foundation'

const RegistrationSeller = () => {
  return (
    <Grid container bgcolor={"rgb(249, 250, 251)"} borderRadius={4} pb={15} sx={{ width:{ xs:"99%", lg: "90%"} , display: { sm: "flex", xs: "none" }}} mt={18} display={"flex"} justifyContent={"space-around"}>
      
      <Grid  item  display={"flex"} md={6} xs={12}  flexDirection={"column"} dir={"rtl"} sx={{ paddingRight:{xs:"20px" , md:"0px"} , marginRight:{md:"90px" , xs:"0px"}}} >
        <Grid item mt={5} md={12}>
          <Typography variant="h1" >{" صاحب کسب و کار هستید؟"}</Typography>
        </Grid>
        <Grid item mt={5}  md={12}>
          <Typography variant="h3" >{"با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید."} </Typography>
        </Grid>
        <Grid item mt={6} md={12}  >
            <Button  sx={{height:"3rem" , fontWeight:"700" , width:"auto" , minWidth:"6.6875rem"}} variant="contained"><FoundationIcon/>{"ثبت نام فروشندگان  "}</Button>
          </Grid>
        </Grid>
        <Grid container item position={"relative"} xs={4} ml={4}>
        <Grid item position={"absolute"} bottom={10} right={"3.4375rem"} sx={{display: { md: "flex", xs: "none" } }}  >
          <Image width={350} src={Home} alt={",mnjhbgvf"} />
        </Grid>
      </Grid>
      </Grid>   
  )
}

export default RegistrationSeller