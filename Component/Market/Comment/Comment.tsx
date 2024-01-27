import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import pic from "../../../Assets/Images/sun.jpeg"
import ModalComment from './ModalComment'
import StarIcon from "@mui/icons-material/Star";
import CartComment from './CartComment'

const Comment = ({market}: any) => {
    console.log(market)
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(!open);
    // const handleClose = () => setOpen(!open);
    return (
        <>
            <Grid item xs={12} sm={6} md={3} p={2} height={"200px"} display={{ sm: "flex", xs: "none" }} flexDirection={"column"}>
                <Grid item xs={12} display={"flex"} gap={2}>
                    <Grid xs={4}  display={"flex"}  alignItems={"center"} justifyContent={"center"} boxShadow={"rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 30%) 0px 8px 32px -16px"} borderRadius={"0.75rem"} >
                        <img src={market.picture} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "0.75rem", width: "95%", height: "95%" }} width={25} height={25}/>
                    </Grid>
                    <Grid item xs={8.9} >
                        <Grid item xs={12}  mt={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"} justifyItems={"center"}>
                            <Grid item  display={"flex"} gap={1}>
                                <Typography fontSize={"14px"} fontWeight={400} justifyContent={"center"} alignItems={"center"} display={"flex"} ><StarIcon sx={{ color: "#FFCE00", width: "16px" }} />4.3</Typography>

                                <Typography color={"#a6aaad"} fontSize={"14px"} fontWeight={400}>(16 نظر)</Typography>
                            </Grid>
                            {/* <Grid item pl={4} >
                                <Typography>(%35)</Typography>
                            </Grid> */}
                        </Grid>
                        <Grid item xs={12} mt={2}>
                            <Typography fontSize={"20px"} fontWeight={900} color={"000"}>{market.name}</Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} mt={3} onClick={handleOpen} >
                    <ModalComment open={open} setOpen={setOpen}/>
                    <Button sx={{
                        width: "90%",
                        border:"0.09375rem solid rgba(0, 133, 66, 0.06)",
                        borderRadius:"24px",
                        boxShadow:"rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 20%) 0px 4px 16px -8px",
                        cursor:"pointer"

                    }}>
                        <Typography color={"rgb(0, 184, 98)"}>مشاهده نظرات</Typography></Button>
                </Grid>
            </Grid>


            <CartComment state={open} />
        </>


    )
}

export default Comment