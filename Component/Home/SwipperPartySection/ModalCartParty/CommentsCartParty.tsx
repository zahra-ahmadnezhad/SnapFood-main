import React from 'react'

import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import StarIcon from "@mui/icons-material/Star";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
const CommentsCartParty = () => {
    return (
        <>

            <Grid p={1} borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.12)"} >
                <Grid display={"flex"} xs={12} flexDirection={{ xs: "column", sm: "row" }} alignItems={{ sm: "center" }} >
                    <Grid item xs={12} p={0.5} display={"flex"} flexDirection={{ sm: "column", xs: "row" }} justifyContent={"space-between"}>
                        <Grid item xs={6} gap={2} display={"flex"}>
                            <Typography color={"rgb(34, 169, 88)"} display={{ xs: "flex", sm: "none" }} ><SentimentSatisfiedAltIcon /> </Typography>
                            <Typography color={"#3a3d42"} fontSize={"0.875rem"} fontWeight={700}>حنانه </Typography>
                        </Grid>
                        <Grid item >
                            <Typography color={"#3a3d42"} fontSize={"0.875rem"} fontWeight={400}>5 آذر 1401 </Typography>
                        </Grid>
                        <Grid item xs={3}display={{ sm: "flex", xs: "none" }}>
                            <Typography mt={1} justifyContent={"center"} alignItems={"center"} display={"flex"} gap={1} borderRadius={1} fontSize={"14px"} border={"0.0625rem solid rgb(235, 237, 240)"} ><StarIcon sx={{ color: "#FFCE00", width: "14px" }} />3.6</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}  >
                        <Typography color={"#3a3d42"} fontSize={"0.775rem"} fontWeight={400}>خیلی سریع رسید عالی بود ... طمع فوق العاده ای داشت ممنونم بابت این سرویس خوب</Typography>
                    </Grid>
                </Grid>
                <Grid item  display={"flex"} flexWrap={'wrap'} gap={2} p={1} >
                    <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>چلو کباب عالی </Typography>
                    <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                    <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                    <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                    <Typography bgcolor={"#ebedf0"} borderRadius={"0.375rem"} p={"0.25rem 0.375rem"} fontSize={"0.666rem"}>جوجه کباب خوشمزه </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default CommentsCartParty