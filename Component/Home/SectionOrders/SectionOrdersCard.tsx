import React, { useState } from 'react'

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import  Button from '@mui/material/Button';
import SectionOrdersModal from './SectionOrdersModal';

import Image from 'next/image'
import image from "../../../Assets/Images/SectionOrders/image.jpeg"
import arrow from "../../../Assets/Svgs/arrow.svg"


export interface ModalBoxProps {
    open: boolean,
    setOpen:(arg0: boolean)=> boolean

}
const SectionOrdersCard = ({open,setOpen}:any): JSX.Element => {
    const handelOpen = ()  => {
        setOpen(true)
      }
    return (
        <>
            <Grid p={{xs:"0 16px" , sm:"0"}} item bgcolor={"#fff"} boxShadow={{xs:"0 2px 8px 0 rgb(0 0 0 / 10%)" , sm:"none"}} flexDirection={"column"} xs={12} border={{ xs: "1px solid #e6e6e6", sm: "none" }} borderRadius={2} m={2} mt={2}>
                <Grid item display={"flex"} alignItems={"center"} mt={2} gap={2}>
                    <Grid item >
                        <Image
                            style={{ height: "50px", width: "100%", borderRadius: 4, objectFit: "cover", }}
                            src={image}
                            alt=""
                        />
                    </Grid>
                    <Grid item gap={4} >
                        <Grid item ><Typography mb={0.8} fontSize={"0.8rem"} fontWeight={700}>رستوران و کترینک بزرگان </Typography></Grid>
                        <Grid item display={"flex"} gap={4}>
                            <Typography  color={"#3a3d42"} fontSize={"0.65rem"} fontWeight={400}>جمعه 20 آبان </Typography>
                            <Typography color={"#3a3d42"}  fontSize={"0.65rem"} fontWeight={400}> {"13:30"}  </Typography>
                        </Grid>
                        <Grid item display={{xs:"flex" , sm:"none"}} >
                            <Typography ml={1.5} fontSize={"12px"} fontWeight={400} color={"#a3a3a3"}> {" تحویل به بلوار بعثت، امام خمینی، خاتم جنوبی،...  "} </Typography>
                              {/* <Typography whiteSpace={"nowrap"}  overflow={"hidden"} textOverflow={"ellipsis"} fontSize={"0.75rem"} > {"  بلوار بعثت، امام خمینی، خاتم جنوبی،..."}  */}
                            {/* </Typography> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item display={{xs:"block" , sm:"none"}} m={1} dir={"ltr"} ><Typography  fontSize={"1rem"} fontWeight={700} >{"138,000 تومان "}</Typography></Grid>
                <Grid item display={"flex"} flexDirection={"column"} mb={2}>
                    <Grid display={"flex"} alignItems={"center"} justifyContent={"space-between"} p={{sm:"8px 10px" , xs:"5px 3px"}} mt={1} borderRadius={"0.25rem"} sx={{ border:{ xs:"0.09375rem solid rgba(58, 61, 66, 0.06)" , sm:"none"} }} bgcolor={"rgba(0, 133, 66, 0.06)"}>
                        <Typography variant='body2'  fontSize={"0.53rem"} color={"#3a3d42"} display={{xs:"none" , sm:"block"}}>{"نظرتان را درباره این سفارش به اشتراک بگذارید."}</Typography>
                        <Typography fontSize={"10px"} fontWeight={500} display={{xs:"block" , sm:"none"}}>{"هنوز به این سفارش امتیازی نداده‌اید"}</Typography>
                        <Grid item display={"flex"} alignItems={'center'}>
                        <Typography fontWeight={900} fontSize={"0.66rem"}  color={"rgb(0, 184, 98)"}>{"ثبت نظر "}</Typography>
                        <Typography  display={{xs:"flex" , sm:"none"}} color={"rgb(0, 184, 98)"}><NavigateBeforeIcon style={{fontSize:"1rem"}}/></Typography>
                        </Grid>
                    </Grid>
                    <Grid display={"flex"} mb={1} flexDirection={{xs:"row-reverse" , sm:"row"}} height={"38px"} justifyContent={"space-between"} alignItems={"center"} mt={1.5}>
                        <Button onClick={handelOpen} sx={{  bgcolor: { xs: "#FFF", sm: "#3a3d420f" },border:{xs:"solid 1px #404040" , sm:"none"}, borderRadius: "6px",color: { sm: "#3a3d42", xs: "#404040" }, gap:1, width: "48%", '&:hover': { backgroundColor: {xs:"#FFF" , sm:"#EBEDF0"} }}} >
                            <Typography display={{xs:"none" , sm:"flex"}}><SyncProblemIcon style={{fontSize:"19px" }}/></Typography>
                            <Typography fontSize={"0.8rem"}fontWeight={900} >مشاهده فاکتور </Typography>
                        </Button>
                        <Button  sx={{ bgcolor: { xs: "#ff00a4", sm: "#3a3d420f" } , borderRadius: "6px", color: { sm: "#3a3d42", xs: "#FFF" }, gap:1, width: "48%", '&:hover': { backgroundColor:{xs:"#ff00a4" , sm:"#EBEDF0"}}  }}>
                           <Typography display={{xs:"none" , sm:"flex"}} ><Image src={arrow} alt={"jhbbbhjnkml"}/></Typography>
                            <Typography fontSize={"0.8rem"}fontWeight={900} >سفارش مجدد </Typography>  
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <SectionOrdersModal setOpen={setOpen} open={open} />
        </>
    )
}
export default SectionOrdersCard