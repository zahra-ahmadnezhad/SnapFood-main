import React from 'react'

import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import par from "../../assets/images/par.svg"
import StarIcon from "@mui/icons-material/Star";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Image from 'next/image';


const Comments = () => {

    return (
        <>

            <Grid p={1} borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.12)"} xs={12} dir={'rtl'} >

                <Grid display={"flex"} xs={12} flexDirection={{ xs: "column", sm: "row" }} alignItems={{ sm: "center" }} >
                    <Grid item xs={4} p={0.5} display={"flex"} flexDirection={ "column" } justifyContent={"space-between"} >
                        <Grid item xs={6} gap={2} display={"flex"}>
                            {/* <Typography color={"rgb(34, 169, 88)"} display={{ md: "flex", xs: "none" }} ><SentimentSatisfiedAltIcon /> </Typography> */}
                            <Typography color={"#3a3d42"} fontSize={"0.875rem"} fontWeight={700}>حنانه </Typography>
                        </Grid>
                        <Grid display={"flex"} flexDirection={{sm:"column" , xs:"row" }} justifyContent={"space-between" }  > 
                        <Grid item >
                            <Typography color={"#3a3d42"} fontSize={"0.875rem"} fontWeight={400}>5 آذر 1401 </Typography>
                        </Grid>
                        <Grid item xs={3} display={{ sm: "flex" }}>
                            <Typography mt={{md:"1" , xs:"0" }} justifyContent={"center"} alignItems={"center"} display={"flex"} gap={1} borderRadius={1} fontSize={"14px"} border={"0.0625rem solid rgb(235, 237, 240)"} ><StarIcon sx={{ color: "#FFCE00", width: "14px" }} />3.6</Typography>
                        </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}  >
                            <Typography color={"#3a3d42"} fontSize={"0.775rem"} fontWeight={400}>خیلی سریع رسید عالی بود ... طمع فوق العاده ای داشت ممنونم بابت این سرویس خوب</Typography>
                        </Grid>
                        <Grid item display={"flex"} flexWrap={'wrap'} gap={2} mt={2}  >
                            <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>چلو کباب عالی </Typography>
                            <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                            <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                            <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                            <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                        </Grid>
                        <Grid border={"0.0625rem solid rgba(58, 61, 66, 0.12)"} borderRadius={"0.5rem"} width={"100%"} mt={2} p={1}>
                            <Typography color={"#ff00a6"} fontWeight={400}>
                               {"پاسخ مدیر رستوران"}
                            </Typography>
                            <Typography mt={1}>
                                {"نوش جان:)حتما بررسی میشود"}
                            </Typography>
                        </Grid>
                    </Grid>



                </Grid>
            </Grid>
        </>
    )
}

export default Comments