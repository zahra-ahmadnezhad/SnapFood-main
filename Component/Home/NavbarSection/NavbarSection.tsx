import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Image from 'next/image'
import { NavbarSectionItem } from '../../../Data/NavbarSection/NavbarSection.data'
import Link from 'next/link'

const NavbarSection = () => {
    return (
        <Grid container display={"flex"} bgcolor={"#fff"} position={{sm:'sticky'}} zIndex={200} borderBottom={{sm:"1px solid #EBEDF0"}} flexWrap={"wrap"} pt={4} sx={{overflowX:{sm:"auto", xs:"hidden" } ,  minWidth:'100px' , top:{sm:"60px" , xs:"0" }}} >
            {
                NavbarSectionItem.map(item =>(

                    <Grid item xs={4} mb={2} sm={1.5} key={item.id}  display={"flex"}  justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                    <Link href={`/category/${item.href}`}>

                    <Grid item  sx={{bgcolor:{xs:"#F3F5F9" , sm:"#fff"} , p:{xs:"25px 32px" , sm:"0"}}}  borderRadius={4}  >

                    <Image style={{width:"40px" , height:"40px"}} src={item.image} alt={"dfg"} />
                    </Grid>
                    </Link>
                    <Grid item mt={1}>
                    <Typography variant='subtitle1' color={"rgb(83, 86, 92)"}>{item.title}</Typography>
                    </Grid>
                </Grid>
                ))
            }
            </Grid>

    )
}

export default NavbarSection